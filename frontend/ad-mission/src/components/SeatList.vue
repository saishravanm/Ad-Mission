<style>
.seating-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.row {
  display: flex;
  gap: 10px;
}

.seat {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div v-if="seats">
    <p>{{ seats.length }} Seats</p>
    <div class="seating-chart">
      <div class="row" v-for="row in numRows">
        <div class="seat" v-for="col in numCols" :key="`seat-${(row - 1) * numCols + col}`">
          <Seat
            :seatNum="(row - 1) * numCols + col"
            :seatRow="String.fromCharCode(64 + row)"
            :seatColumn="col"
            :seatPrice="seats[(row - 1) * numCols + col - 1].seatPrice"
            :isFilled="seats[(row - 1) * numCols + col - 1].isFilled"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else>No Seats Data Available...</div>
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
        console.log(this.seats)
      })
    
      .catch(error => {
        
        console.error('Error fetching seats:', error);
      });
  },
  computed: {
  numRows() {
    return Math.ceil(this.seats.length / 5); // Assuming 5 seats per row
  },
  numCols() {
    return 5; // Assuming 5 seats per row
  }
}
};
</script>
