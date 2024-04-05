<template>
    <!-- Main container for displaying events -->
    <div>
      <!-- Conditional rendering based on whether events data is available -->
      <div v-if="events">
        <!-- Display total number of events -->
        <p>Total Events: {{ events.length }}</p>
        <!-- Iterate over each event to render EventBox component -->
        <EventBox
          v-for="event in events"
          :key="event.id"
          :eventName="event.eventName"
          :eventDate="event.eventDate"
          :eventVenue="event.eventLocation"
          :eventTime="event.eventTime"
        />
      </div>
      <!-- Display a message indicating events are loading if events data is not available yet -->
      <div v-else>
        Loading events...
      </div>
    </div>
</template>

<script>
// Importing Axios library for making HTTP requests
import axios from 'axios';
// Importing EventBox component for rendering individual events
import EventBox from './EventBox.vue';

export default {
  // Registering EventBox component for use within this component
  components: {
    EventBox
  },
  // Data property to hold the events fetched from the server
  data() {
    return {
      events: null
    };
  },
  // Lifecycle hook called after the component has been mounted to the DOM
  mounted() {
    // Making an HTTP GET request to fetch events data from the server
    axios.get("http://localhost:8000/api/getevents")
      // Handling the successful response from the server
      .then(response => {
        // Storing the fetched events data in the 'events' data property
        this.events = response.data;
      })
      // Handling any errors that occur during the HTTP request
      .catch(error => {
        // Logging the error to the console
        console.error('Error fetching events:', error);
      });
  }
};
</script>
