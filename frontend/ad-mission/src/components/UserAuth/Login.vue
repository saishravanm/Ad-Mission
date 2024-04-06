<!-- Raj Thapa -->
<!-- This is login page component -->

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
          required
        />
        <div class="div-7">Password:</div>
        <input
          class="input-field"
          type="password"
          placeholder="Enter your password"
          v-model="password"
          required
        />
        <div class="div-9">
          <button class="button" @click="handleLogin">Login</button>
          <button class="button" @click="$parent.toggleComponent('Registration')">Registration</button>
          <button class="button" @click="$parent.toggleComponent('ResetPassword')">Reset Password</button>

        </div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
<script>
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth.ts';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async handleLogin() {
        try {
          if (!this.email || !this.password) {
            this.errorMessage = "Please fill out all required fields.";
            return; 
          }
          // call login function in the backend to handle user login
          const response = await axios.post('http://localhost:8000/api/login', {
            userEmail: this.email,
            password: this.password,
          });
  
          console.log(response.data.message);
          this.errorMessage = '';
          this.successMessage = response.data.message;

          // Store user information in the auth store
          console.log(response);
          const authStore = useAuthStore();
          authStore.login(); 
          console.log(authStore.isAuthenticated);
          window.location.href = '/'; 

        } catch (error) {
          console.error(error);
          this.successMessage = '';
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
    height: 100vh;
    align-items: center;
    font-weight: 200;
    white-space: nowrap;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    
  }
  @media (max-width: 991px) {
    .div {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-2 {
    border-color: rgba(217, 217, 217, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #000;
    display: flex;
    width: 718px;
    max-width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 61px;
  }
  @media (max-width: 991px) {
    .div-2 {
      margin-top: 40px;
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-3 {
    display: flex;
    width: 339px;
    max-width: 100%;
    align-items: flex-start;
    gap: 20px;
  }
  @media (max-width: 991px) {
    
  }
  .div-4 {
    color: #d9d9d9;
    font: 40px Oswald, sans-serif;
    margin-bottom: 10px;
  }
  @media (max-width: 991px) {
    .div-4 {
      margin-top: 40px;
    }
  }
  .div-5 {
    height: auto;
    align-self: center;
    font-size: 40px;
    color: #fff;
    flex: 1;
    padding-bottom: 0px;
  }
  @media (max-width: 991px) {
    .div-5 {
      white-space: initial;
    }
  }
  .input-field {
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #000;
    margin-top: 10px;
    width: 100%;
    height: 54px;
    padding: 0 10px;
    font-size: 16px;
    color: #d9d9d9;
  }
  .div-7 {
    color: #d9d9d9;
    align-self: stretch;
    margin-top: 47px;
    font: 40px Oswald, sans-serif;
  }
  @media (max-width: 991px) {
    .div-7 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-9 {
    align-self: stretch;
    display: flex;
    margin-top: 31px;
    gap: 20px;
    font-size: 40px;
    color: #fff;
    justify-content: space-between;
    padding: 0 2px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      flex-wrap: wrap;
      white-space: initial;
    }
  }
  .button {
    font-family: Oswald, sans-serif;
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 2px;
    background-color: #000;
    align-items: start;
    padding: 16px 38px 9px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    .button {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .error-message {
    color: red;
    margin-top: 10px;
  }
  .success-message {
    color: green;
    margin-top: 10px;
  }

  </style>