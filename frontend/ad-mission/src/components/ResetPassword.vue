<!-- Raj Thapa -->
<!-- This is the compnent page for reset password -->

<template>
    <div class="div">
      <div class="div-2">AD-Mission</div>
      <div class="div-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6dda971b807d93a8bea09aaf1625035363f7f08c439bd86843e38d15089863?apiKey=e7db2ab1be9c42fa88e927d21db16051&"
          class="img"
        />
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
        <button class="div-11" @click="resetPassword">RESET</button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
      <div class="div-12"></div>
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
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-weight: 800;
    text-align: center;
  }
  .div-2 {
    background-color: #373636;
    width: 100%;
    align-items: start;
    color: #fff;
    white-space: nowrap;
    padding: 16px 60px 26px 92px;
    font: italic 35px/178% Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      white-space: initial;
      padding: 0 20px 0 30px;
    }
  }
  .div-3 {
    display: flex;
    flex-direction: column;
    fill: #7a7a7a;
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 862px;
    width: 100%;
    align-items: start;
    font-size: 20px;
    color: #000;
    line-height: 312%;
    padding: 80px;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-4 {
    position: relative;
    color: #fff;
    margin-top: 22px;
    font: italic 40px/156% Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .div-4 {
      margin-left: 6px;
    }
  }
  .div-5 {
    position: relative;
    font-family: Montserrat, sans-serif;
    font-style: italic;
    margin-top: 59px;
  }
  @media (max-width: 991px) {
    .div-5 {
      margin: 40px 0 0 6px;
    }
  }
  .input-field {
    position: relative;
    background-color: rgba(217, 217, 217, 1);
    margin-top: 17px;
    width: 371px;
    max-width: 100%;
    height: 56px;
    padding: 0 10px;
    font-size: 16px;
    color: #000;
  }
  @media (max-width: 991px) {
    .input-field {
      margin-left: 6px;
    }
  }
  .div-7, .div-6 {
    position: relative;
    font-family: Montserrat, sans-serif;
    font-style: italic;
    margin-top: 72px;
  }
  @media (max-width: 991px) {
    .div-7 {
      margin: 40px 0 0 6px;
    }
  }
  .div-9 {
    position: relative;
    font-family: Montserrat, sans-serif;
    font-style: italic;
    margin-top: 68px;
  }
  @media (max-width: 991px) {
    .div-9 {
      margin: 40px 0 0 6px;
    }
  }
  .div-11 {
    position: relative;
    font-family: Montserrat, sans-serif;
    font-style: italic;
    background-color: rgba(217, 217, 217, 1);
    white-space: nowrap;
    margin: 34px 0 42px;
    padding: 24px 17px 12px;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    .div-11 {
      white-space: initial;
      margin: 0 0 40px 6px;
    }
  }
  .div-12 {
    background-color: #373636;
    min-height: 92px;
    width: 100%;
  }
  @media (max-width: 991px) {
    .div-12 {
      max-width: 100%;
    }
  }
  </style>