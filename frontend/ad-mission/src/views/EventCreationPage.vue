<!-- Saishravan Muthukrishnan and Raj Thapa -->

<template>
    <div class="div">
      <div class="div-2">
        <div class="div-5">Event-Creation</div>
        <div class="div-input">Event Name</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter your Event Name"
            v-model="eventName"
            required
          />
          <div class="div-input">Location</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter the Event Location"
            v-model="eventLocation"
            required
          />
          <div class="div-input">Date</div>
          <input
            class="input-field"
            type="Date"
            placeholder="Enter the Event Date"
            v-model="eventDate"
            required
          />
          <div class="div-input">Event Time</div>
          <input
            class="input-field"
            type="text"
            placeholder="Enter the Event Time"
            v-model="eventTime"
            required
          />
          <div class="div-input">Event Description</div>
          <input
            class="input-field"
            type="text"
            placeholder="Describe the event"
            v-model="eventDescription"
            required
          />
          <div class="div-input">Total Seats</div>
          <input
            class="input-field"
            type="number"
            placeholder="Enter the number of seats"
            v-model="seatNum"
            required
          />
          

        <div class="div-9">
          <button class="button" @click="handleCreation">Create Event</button>        
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
        eventName: '',
        eventLocation: '',
        eventDate:'',
        eventTime:'',
        eventDescription: '',
        seatNum:'',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async handleCreation() {
        try {
          // Date object for date validation
          const date = new Date();

          // Null/empty string checks
          if (!this.eventName.trim()) {
            this.errorMessage = "Event cannot be empty" ;
            return false;
          }
          if (!this.eventLocation.trim()) {
            this.errorMessage = "Location cannot be empty" ;
            return false;
          }
          if (!this.eventDate.trim()) {
            this.errorMessage = "Date cannot be empty" ;
            return false;
          }
          if (!this.eventTime.trim()) {
            this.errorMessage = "Time cannot be empty" ;
            return false;
          }
          if (!this.eventDescription.trim()) {
            this.errorMessage = "Description cannot be empty" ;
            return false;
          }
          if (!this.seatNum || isNaN(this.seatNum)) {
            this.errorMessage = "Number of seats cannot be empty" ;
            return false;
          }
          const eDate = new Date(this.eventDate);
          if(eDate.getFullYear() < date.getFullYear()) {
             this.errorMessage="Event Year has passed!"
             return false;
          }
          
          if(this.eventName.length > 20 || this.eventName.length < 5)
            {
                this.errorMessage=("Invalid Event Name! Either too long(Over 20 characters) or too short(less than 5)")
                return false;
            }
            if(this.eventDescription < 0 || this.eventDescription.length > 250)
          {
            this.errorMessage=("Invalid Event Description! Either too long (over 250 characters) or too short (less than 5)")
            return false;
          }
          // Creating an object literal to hold all data fields
          const eventData = {
            eventName: this.eventName,
            eventLocation: this.eventLocation,
            eventDate: this.eventDate,
            eventTime: this.eventTime,
            eventDescription: this.eventDescription,
            seatNum: this.seatNum,
          };
          console.log(eventData);
          //calls registration creation  on the backend to handle event creation
          const response = await axios.post('http://localhost:8000/api/event_creation', eventData);
          this.errorMessage = '';
          this.successMessage = response.data.message;

          // Clear all form fields
          this.eventName = '';
          this.eventLocation = '';
          this.eventDate = '';
          this.eventTime = '';
          this.eventDescription = '';
          this.seatNum = '';
          this.errorMessage = '';
        } catch (error) {
          this.successMessage = '';
          console.log(error);
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