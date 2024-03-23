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
/* Form container */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Form labels */
label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

/* Form input fields */
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus {
  outline: none;
  border-color: #5cb3fd; /* Light blue border color */
}

/* Submit button */
button[type="submit"] {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #5cb3fd; /* Light blue button background */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #4ca6e8; /* Darker blue on hover */
}
</style>

