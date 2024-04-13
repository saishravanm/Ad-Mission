

<template>
  <div class="app-container">
    <div class="form-container">
      <h1 class="form-title">Ad Mission</h1>
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
          <label for="name">Cardholder Name:</label>
          <input type="text" id="name" v-model="cardholderName" required>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
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
      // Input validation
      if (!/^\d{16}$/.test(this.cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
      }

      if (!/\d{2}\/\d{4}/.test(this.expiry)) {
        alert('Please enter a valid expiry date in MM/YYYY format.');
        return;
      }

      if (!/^\d{3}$/.test(this.cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
      }

      // Form submission logic
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
  width: 600px;
  margin: 0 auto; /* Centering the form horizontally */
  padding: 20px;
  background-color: #333; /* Dark gray background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #eee; /* Light text */
  
  /* Centering the form vertically */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Form labels */
label {
  display: block;
  margin-bottom: 8px;
  color: #eee; /* Light text */
}

/* Form input fields */
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #555; /* Darker border */
  border-radius: 4px;
  transition: border-color 0.3s ease;
  background-color: #444; /* Darker input background */
  color: #eee; /* Light text */
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
  background-color: #fff; /* gray button background */
  color: #0c0c0c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0c0c0c; /* Darker gray on hover */
  color: #fff; /* Light text on hover */
  transform: scale(1.1); /* Enlarge the button on hover */
}
</style>


