<!-- Payment.vue file for payment form-->
<template>
    <div>
      <h2>Payment Details Form</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="provider">Payment Provider:</label>
          <input type="text" id="provider" v-model="payment.provider" required>
        </div>
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" v-model="payment.cardNumber" required>
        </div>
        <div class="form-group">
          <label for="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" v-model="payment.expirationDate" required>
        </div>
        <div class="form-group">
          <label for="securityCode">Security Code:</label>
          <input type="text" id="securityCode" v-model="payment.securityCode" required>
        </div>
        <div class="form-group">
          <label for="cardHolderName">Cardholder Name:</label>
          <input type="text" id="cardHolderName" v-model="payment.cardHolderName" required>
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="payment.address" required>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payment: {
          provider: '',
          cardNumber: '',
          expirationDate: '',
          securityCode: '',
          cardHolderName: '',
          address: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Send payment details to backend or handle form submission as needed
        console.log('Payment details:', this.payment);
        // You can send this data to your backend API using Axios or fetch
      }
    }
  };
  </script>
  
  <style scoped>
  /* custom CSS styles here */
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
  }
  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  