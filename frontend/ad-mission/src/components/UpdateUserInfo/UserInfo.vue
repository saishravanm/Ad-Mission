<!-- Vinay Verma & Raj Thapa-->
<!-- This is a component to display user information -->

<template>
  <div class="div">

      <div class="div-2">
        <div class="div-5">Update Account Information</div>
        <div class="div-input">First Name:</div>
        <div class="user-box">
            <p class="user-data">{{ userData.firstName}}
              <button class="change-button" @click="changeFirstName()">
                <img src="../../assets/edit-icon.png" alt="Edit Button" height="40" width="40">
              </button>
            </p>
        </div>
        <div v-if="changeFirst">
          <div class="div-change">New First Name:</div>
          <input class="input-field" type="text" placeholder="Enter First Name" v-model="newUserData.firstName" required>
        </div>

        <div class="div-input">Last Name:</div>
        <div class="user-box">
            <p class="user-data">{{ userData.lastName }}
              <button class="change-button" @click="changeLastName()">
                <img src="../../assets/edit-icon.png" alt="Edit Button" height="40" width="40">
            </button>
            </p>
        </div>
        <div v-if="changeLast">
          <div class="div-change">New Last Name:</div>
          <input class="input-field" type="text" placeholder="Enter Last Name" v-model="newUserData.lastName" required>
        </div>

        <div class="div-input">Email:</div>
          <div class="user-box">
            <p class="user-data">{{ userData.email }}
              <button class="change-button" @click="changeEmailAddress()">
                <img src="../../assets/edit-icon.png" alt="Edit Button" height="40" width="40">
              </button>
            </p>
        </div>
        <div v-if="changeEmail">
          <div class="div-change"> New Email:</div>
          <input class="input-field" type="text" placeholder="Enter New Email" v-model="newUserData.email" required>
          <div class="div-change"> Confirm Email:</div>
          <input class="input-field" type="text" placeholder="Confirm New Email" v-model="newUserData.confirmEmail" required>
        </div> 
        <div class="div-input">Phone Number:</div>
          <div class="user-box">
           <p class="user-data">{{ userData.phoneNumber}}
            <button class="change-button" @click="changePhoneNumber()">
                <img src="../../assets/edit-icon.png" alt="Edit Button" height="40" width="40">
            </button>
          </p>
        </div>
        <div v-if="changePhone" class="change-name">
          <div class="div-change">New Phone Number:</div>
          <input class="input-field" type="text" placeholder="Enter New Phone Number" v-model="newUserData.phoneNumber"  required>
        </div>


        <div class="div-input">Address:</div>
         <div class="user-box">
            <p class="user-data">{{ userData.street + ', ' + userData.city + ', ' + userData.state + ' ' + userData.zip }}
              <button class="change-button" @click="changeAddress()">
                <img src="../../assets/edit-icon.png" alt="Edit Button" height="40" width="40">
              </button>
            </p>
        </div>
        <div v-if="changeAdd" class="change-name">
          <div class="div-change">New Address:</div>
          <input class="input-field" type="text" placeholder="Street" v-model="newUserData.street" required>
          <input class="input-field" type="text" placeholder="City" v-model="newUserData.city" required>
          <input class="input-field" type="text" placeholder="State" v-model="newUserData.state" required>
          <input class="input-field" type="text" placeholder="Zip" v-model="newUserData.zip" required>
        </div>

        <div class="div-input">Birthday:</div>
        <div class="user-box">
            <p class="user-data">{{ userData.birthday }}</p>
        </div>
        <button class="save-button" @click="saveChanges()">
          <p>Save Changes</p>
          <img src="../../assets/save-icon.png" alt="Save Button" height="40" width="40">
        </button>
        <button class="save-button" @click="goToHomePage()">
          Go To HomePage
        </button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useAuthStore } from '@/stores/auth.ts';
import router from '@/router/index.ts';

export default {
  data() {
    return {
      id: null,
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        birthday: ''
      },
      newUserData: {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        birthday: ''
      },
      changeFirst: false,
      changeLast: false,
      changeEmail: false,
      changePhone: false,
      changeAdd: false,
      errorMessage: '',
    };
  },
  methods: {
    async getUserData() {
        // call login function in the backend to handle user login
        try{
          const userAuth = useAuthStore();
          const userId = userAuth.user._id;
          const response = await axios.post(`http://localhost:8000/api/userData?userId=${userId}`);          
          this.id = response.data.userID;
          this.userData.firstName = response.data.firstName;
          this.userData.lastName = response.data.lastName;
          this.userData.email = response.data.userEmail;
          this.userData.phoneNumber = response.data.phoneNumber;
          this.userData.street = response.data.addressStreet;
          this.userData.city = response.data.addressCity;
          this.userData.state = response.data.addressState;
          this.userData.zip = response.data.addressZip;
          this.userData.birthday = response.data.birthday;
        }
        catch(error){
          console.error("Error fetching user data:", error);
        }
    },
    changeFirstName(){
      this.changeFirst = !this.changeFirst;
    },
    changeLastName(){
      this.changeLast = !this.changeLast;
    },
    changeEmailAddress(){
      this.changeEmail = !this.changeEmail;
    },
    changePhoneNumber(){
      this.changePhone = !this.changePhone;
    },
    changeAddress(){
      this.changeAdd = !this.changeAdd;
    },
    async saveChanges(){
      try{
        const newData = {
          id: this.id,
          firstName: this.newUserData.firstName,
          lastName: this.newUserData.lastName,
          email: this.newUserData.email,
          phoneNumber: this.newUserData.phoneNumber,
          street: this.newUserData.street,
          city: this.newUserData.city,
          state: this.newUserData.state,
          zip: this.newUserData.zip,
        };

        if (newData.email) {
          if (!/\S+@\S+\.\S+/.test(newData.email)) {
            this.errorMessage = "Invalid Email Format";
            return;
          }
          if (this.newUserData.confirmEmail != newData.email) {
            this.errorMessage = "Email doesn't match";
            return;
          }
        }

        if (newData.phoneNumber) {
          if (!/^\d{10}$/.test(newData.phoneNumber)) {
            this.errorMessage = "Invalid Phone";
            return;
          }
        }

        if (newData.zip) {
          if (!/^\d{5}$/.test(newData.zip)) {
            this.errorMessage = "Invalid Zip";
            return;
          }
        }

        const response = await axios.put('http://localhost:8000/api/updateUser', newData);
        window.location.reload();
        if (this.changeFirst){
          this.changeFirstName();
        }
        if(this.changeLast){
          this.changeLastName();
        }
        if(this.changeEmail){
          this.changeEmailAddress();
        }
        if (this.changePhone){
          this.changePhoneNumber();
        }
        if(this.changeAdd){
          this.changeAddress();
        }
      }
      catch(error){
        console.error("Error saving changes: ", error);
      }
    },

    goToHomePage() {
      router.push({ name: 'homepage' });
    }
  },
  mounted(){
    this.getUserData();
  }
};
</script>

<style scoped>
.div {
  background-color: #000;
  display: flex;
  width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 80px 60px;
  min-height: 100vh;
}

.div-2 {
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: #000;
  width: 718px;
  max-width: 100%;
  padding-right: 60px;
  padding-left: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.input-field {
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: #000;
    width: 95%;
    height: 54px;
    font-size: 16px;
    color: #d9d9d9;
    margin: 20px;
    padding: 15px 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
.change-button{
  background: none;
  cursor: pointer;
  padding: 0px;
  display: flex;
  justify-content: center;
  border: none;
  align-self: right;
}
.save-button p{
  color: #fff;
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-self: center;
}
.save-button{
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  font: 20px Oswald, sans-serif;
  color: #fff;
  position: relative;
  bottom: 1px;
  padding-top: 50px;
  margin-bottom: 1px;
}
.div-input {
  color: #d9d9d9;
  font: 20px Oswald, sans-serif;
  margin-bottom: 10px;
}
.div-change{
  color: #d9d9d9;
  font: 18px Oswald, sans-serif;
  font-style: italic;
  margin: 20px;
}

.div-5 {
  height: auto;
  align-self: center;
  font-size: 40px;
  color: #fff;
  flex: 1;
  padding-bottom: 10px;
}
.user-box{
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: #000;
  width: 100%;
  height: 54px;
  padding: 15px 10px;
  margin: 7px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.user-data {
  font: 20px Oswald, sans-serif;
  color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
}

.div-9 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 31px;
}

.button {
  font-family: Oswald, sans-serif;
  border: 2px solid rgba(255, 255, 255, 1);
  background-color: #000;
  padding: 16px 38px 9px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.input-checkbox {
  width: 3%;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.success-message {
  color: green;
  margin-top: 10px;
}

@media (max-width: 991px) {
  .div {
    padding: 0 20px;
  }

  .div-2 {
    margin-top: 40px;
    padding: 0 20px;
  }

  .div-3 {
    flex-wrap: wrap;
  }

  .div-input {
    margin-top: 40px;
  }

  .div-9 {
    flex-wrap: wrap;
  }

  .button {
    padding: 0 20px;
  }
}
</style>
