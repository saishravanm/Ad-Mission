<template>
  <!-- Main container for displaying seats -->
  
    <!-- Conditional rendering based on whether seats data is available -->
    <div v-if="seats">
      <!-- Display total number of seats -->
      <p> {{ seats.length }} Seats</p>
      <!-- Iterate over each seat to render seats component -->
      <Seat
        v-for="seat in seats"
        :key="seat.id"
        :seatNum="seat.seatNum"
        :seatRow="seat.seatRow"
        :seatColumn="seat.seatColumn"
        :seatPrice="seat.seatPrice"
        :isFilled="seat.isFilled"
      />
    </div>
    <!-- Display a message indicating seats are loading if seats data is not available yet -->
    <div v-else>
      No Seats Data Available...
    </div>
</template>

<script>
// Importing Axios library for making HTTP requests
import axios from 'axios';
// Importing seats component for rendering individual seats
import Seat from './Seat.vue';

export default {
  props:{
    eventName:{
      type: String, 
      required: true
    }
  },
  // Registering seats component for use within this component
  components: {
    Seat
  },
  methods: {
        toggleComponent(component) {
        this.currentComponent = component
        }
    },
  // Data property to hold the seats fetched from the server
  data() {
    return {
      seats: null
    };
  },
  
  mounted() {
    // Making an HTTP GET request to fetch seats data from the server
    axios.get("http://localhost:8000/api/getevent/"+this.eventName)

      .then(response => {
        // Storing the fetched seats data in the 'seats' data property
        this.event = response.data;
        this.seats = this.event.seatList;
      })
    
      .catch(error => {
        
        console.error('Error fetching seats:', error);
      });
  }
};
</script>
