<template>
    <!-- Main container for displaying events -->
    <div>
      <!-- Conditional rendering based on whether events data is available -->
      <div v-if="seats">
        <!-- Display total number of events -->
        <p>Total Seats: {{ seats.length }}</p>
        <!-- Iterate over each event to render EventBox component -->
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
      <!-- Display a message indicating events are loading if events data is not available yet -->
      <div v-else>
        Loading seats...
      </div>
    </div>
</template>

<script>
// Importing Axios library for making HTTP requests
import axios from 'axios';
// Importing EventBox component for rendering individual events
import Seat from './Seat.vue';

export default {
  // Registering EventBox component for use within this component
  components: {
    Seat
  },
  // Data property to hold the events fetched from the server
  data() {
    return {
      seats: null
    };
  },
  // Lifecycle hook called after the component has been mounted to the DOM
  mounted() {
    // Making an HTTP GET request to fetch events data from the server
    axios.get("http://localhost:8000/api/getseats")
      // Handling the successful response from the server
      .then(response => {
        // Storing the fetched events data in the 'events' data property
        this.seats = response.data;
      })
      // Handling any errors that occur during the HTTP request
      .catch(error => {
        // Logging the error to the console
        console.error('Error fetching seats:', error);
      });
  }
};
</script>
