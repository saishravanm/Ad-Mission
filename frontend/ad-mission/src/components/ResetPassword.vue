<!-- Raj Thapa -->
<!-- This is the compnent page for reset password -->

<template>
    <div class="div">
      <!-- <div class="div-2">AD-Mission</div> -->
      <div class="div-3">
        <div class="div-4">Reset Password</div>
        <div class="div-5">Email:</div>
        <input
          class="input-field"
          type="email"
          placeholder="Enter your email"
          v-model="userEmail"
        />
        <div class="div-5">Old Password:</div>
        <input
          class="input-field"
          type="password"
          placeholder="Enter your old password"
          v-model="oldPassword"
        />
        <div class="div-7">New Password:</div>
        <input
          class="input-field"
          type="password"
          placeholder="Enter your new password"
          v-model="newPassword"
        />
        <div class="div-9">Confirm New Password:</div>
        <input
          class="input-field"
          type="password"
          placeholder="Confirm your new password"
          v-model="confirmNewPassword"
        />
        <button class="button" @click="resetPassword">RESET</button>
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
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        errorMessage: ''
      };
    },
    methods: {
      async resetPassword() {
        // Form validation
        if (!this.userEmail || !this.oldPassword || !this.newPassword || !this.confirmNewPassword) {
          this.errorMessage = 'Please fill in all fields.';
          return;
        }
  
        if (this.newPassword !== this.confirmNewPassword) {
          this.errorMessage = 'New password and confirm new password do not match.';
          return;
        }
  
        try {
          const response = await axios.post('http://localhost:8000/api/reset-password', {
            userEmail: this.userEmail,
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
          });
  
          console.log(response.data.message);
          //this.$parent.toggleComponent('Login');

        } catch (error) {
          console.error(error);
          this.errorMessage = error.response.data.message;
        }
      }
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
  .div-3 {
    border: 1px solid rgba(217, 217, 217, 1);
    background-color: #000;
    width: 718px;
    max-width: 100%;
    padding: 61px;
    display: flex;
    flex-direction: column;
  }
  .div-4 {
    align-self: center;
    color: #d9d9d9;
    font: 40px Oswald, sans-serif;
    margin-bottom: 10px;
  }

  .div-5, .div-6, .div-7, .div-9 {
    color: #d9d9d9;
    font: 30px Oswald, sans-serif;
    margin-bottom: 10px;
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
  
  .button {
    font-family: Oswald, sans-serif;
    border: 2px solid rgba(255, 255, 255, 1);
    background-color: #000;
    padding: 9px 20px 9px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    width: 30%;
  }
  
  .error-message {
    color: red;
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
  
    .div-4,
    .div-7 {
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