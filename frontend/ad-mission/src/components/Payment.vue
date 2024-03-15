<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" v-model="cardNumber" required>
        </div>
        <div>
          <label for="expiry">Expiry Date:</label>
          <input type="text" id="expiry" placeholder="MM/YYYY" v-model="expiry" required>
        </div>
        <div>
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" required>
        </div>
        <div>
          <label for="name">Cardholder's Name:</label>
          <input type="text" id="name" v-model="cardholderName" required>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardNumber: '',
        expiry: '',
        cvv: '',
        cardholderName: ''
      };
    },
    methods: {
      submitForm() {
        // You can handle form submission here, e.g., send data to server, validate, etc.
        console.log('Form submitted with data:', {
          cardNumber: this.cardNumber,
          expiry: this.expiry,
          cvv: this.cvv,
          cardholderName: this.cardholderName
        });
        // Reset form fields after submission if needed
        this.cardNumber = '';
        this.expiry = '';
        this.cvv = '';
        this.cardholderName = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom CSS styles here */
  </style>
  