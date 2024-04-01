<!-- Raj Thapa -->

<template>
    <div class="div">
      <div class="div-2">
        <div class="div-5">AD-MISSION</div>
        <div class="div-4">Email:</div>
        <input
          class="input-field"
          type="email"
          placeholder="Enter your email"
          v-model="email"
        />
        <div class="div-7">Password:</div>
        <input
          class="input-field"
          type="password"
          placeholder="Enter your password"
          v-model="password"
        />
        <div class="div-7">Phone Number:</div>
        <input
          class="input-field"
          type="tel"
          placeholder="Enter your phone number"
          v-model="phoneNumber"
        />
        <div class="div-9">
          <button class="button" @click="handleRegistration">Register</button>
          <button class="button" @click="$parent.toggleComponent('Login')">Login</button>

        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        phoneNumber: '',
        errorMessage: '',
      };
    },
    methods: {
      async handleRegistration() {
        try {
          //calls registration function on the backend to handle user registration
          const response = await axios.post('http://localhost:8000/api/registration', {
            userEmail: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
          });
  
          console.log(response.data.message);
          // Redirect or handle successful registration
        } catch (error) {
          console.error(error);
          this.errorMessage = error.response.data.message;
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
  
  .div-4 {
    color: #d9d9d9;
    font: 40px Oswald, sans-serif;
    margin-bottom: 10px;
  }
  
  .div-5 {
    height: auto;
    align-self: center;
    font-size: 40px;
    color: #fff;
    flex: 1;
    padding-bottom: 43px;
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
  
  .div-7 {
    color: #d9d9d9;
    font: 40px Oswald, sans-serif;
    margin-bottom: 10px;
  }
  
  .div-9 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 31px;
  }
  
  .button {
    font-family: Oswald, sans-serif;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: #000;
    padding: 16px 38px 9px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
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