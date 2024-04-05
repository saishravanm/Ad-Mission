<!-- Raj Thapa -->

<template>
    <div class="div">
      <div class="div-2">
        <div class="div-5">AD-MISSION</div>
        <div class="div-input">Email:</div>
          <input
            class="input-field"
            type="email"
            placeholder="Enter your email"
            v-model="userEmail"
            required
          />
          <div class="div-input">Password:</div>
          <input
            class="input-field"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            required
          />
          <div class="div-input">Phone Number:</div>
          <input
            class="input-field"
            type="tel"
            placeholder="Enter your phone number"
            v-model="phoneNumber"
            required
          />
          <div class="div-input">Street Address:</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your street address"
            v-model="addressStreet"
            required
          />
          <div class="div-input">City:</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your city"
            v-model="addressCity"
            required
          />
          <div class="div-input">State:</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your state"
            v-model="addressState"
            required
          />
          <div class="div-input">ZIP Code:</div>
          <input
            class="input-field"
            type="number"
            placeholder="Enter your ZIP code"
            v-model="addressZIP"
            required
          />
          <div class="div-input">First Name:</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your first name"
            v-model="firstName"
            required
          />
          <div class="div-input">Last Name:</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your last name"
            v-model="lastName"
            required
          />
          <div class="div-input">Birthday:</div>
          <input
            class="input-field"
            type="date"
            placeholder="Enter your birthday"
            v-model="birthday"
            required
          />
          <div class="div-input">Are you an organizer?</div>
          <input
            class="input-checkbox"
            type="checkbox"
            v-model="isOrganizer"
          />

        <div class="div-9">
          <button class="button" @click="handleRegistration">Register</button>
          <button class="button" @click="$parent.toggleComponent('Login')">BackToLogin</button>
        </div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userEmail: '',
        password: '',
        phoneNumber: '',
        addressStreet: '',
        addressCity: '',
        addressState: '',
        addressZIP: '',
        firstName: '',
        lastName: '',
        birthday: '',
        isOrganizer: false,
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async handleRegistration() {
        try {
          // Date object for age validation
          const date = new Date();

          // Null/empty string checks
          if (!this.userEmail.trim()) {
            this.errorMessage = "UserEmail cannot be empty" ;
            return false;
          }
          if (!this.password.trim()) {
            this.errorMessage = "Password cannot be empty" ;
            return false;
          }
          if (!this.firstName.trim()) {
            this.errorMessage = "First name cannot be empty" ;
            return false;
          }
          if (!this.lastName.trim()) {
            this.errorMessage =  "Last name cannot be empty";
            return false;
          }
          if (!this.addressStreet.trim()) {
            this.errorMessage = "Address cannot be empty";
            return false;
          }
          if (!this.addressCity.trim()) {
            this.errorMessage = "City cannot be empty";
            return false;
          }
          if (!this.addressState.trim()) {
            this.errorMessage = "State cannot be empty";
            return false;
          }
          if (this.addressZIP == null) {
            this.errorMessage = "ZIP code cannot be empty";
            return false;
          }
          if (isNaN(this.addressZIP) || this.addressZIP.toString().length !== 5) {
            this.errorMessage = "Invalid ZIP code";
            return false;
          }
          if (isNaN(this.phoneNumber) || this.phoneNumber.toString().length !== 10) {
            this.errorMessage = "Phone number must be a 10-digit number";
            return false;
          }
          if (!this.birthday || !this.birthday.trim()) {
            this.errorMessage = "Birthdate field cannot be empty" ;
            return false;
          }

          // Age validation
          if (date.getFullYear() - new Date(this.birthday).getFullYear() < 18) {
            this.errorMessage = "Must be 18 or older to create an account";
            return false;
          }

          // Creating an object literal to hold all data fields
          const userData = {
            userEmail: this.userEmail,
            password: this.password,
            phoneNumber: this.phoneNumber,
            addressStreet: this.addressStreet,
            addressCity: this.addressCity,
            addressState: this.addressState,
            addressZIP: this.addressZIP,
            firstName: this.firstName,
            lastName: this.lastName,
            birthday: this.birthday,
            isOrganizer: this.isOrganizer,
          };
          
          //calls registration function on the backend to handle user registration
          const response = await axios.post('http://localhost:8000/api/registration', userData);
          this.errorMessage = '';
          this.successMessage = response.data.message;

          // Clear all form fields
          this.userEmail = '';
          this.password = '';
          this.phoneNumber = '';
          this.addressStreet = '';
          this.addressCity = '';
          this.addressState = '';
          this.addressZIP = '';
          this.firstName = '';
          this.lastName = '';
          this.birthday = '';
          this.isOrganizer = false;
          this.errorMessage = '';

        } catch (error) {
          this.successMessage = '';
          this.errorMessage = error.response.data.error;
        }
      },
    },
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
    padding: 61px;
    display: flex;
    flex-direction: column;
  }
  
  .div-input {
    color: #d9d9d9;
    font: 20px Oswald, sans-serif;
    margin-bottom: 10px;
  }
  
  .div-5 {
    height: auto;
    align-self: center;
    font-size: 40px;
    color: #fff;
    flex: 1;
  }
  
  .input-field {
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: #000;
    width: 100%;
    height: 54px;
    padding: 0 10px;
    font-size: 16px;
    color: #d9d9d9;
    margin-bottom: 20px;
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