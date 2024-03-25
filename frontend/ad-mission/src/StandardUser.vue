<template>
    <div>
      <h2>User Information</h2>
      <div v-if="user">
        <UserBox
          :firstName="user.firstName"
          :lastName="user.lastName"
          :userEmail="user.userEmail"
          :phoneNumber="user.phoneNumber"
          :birthday="user.birthday"
          :addressStreet="user.addressStreet"
          :addressCity="user.addressCity"
          :addressState="user.addressState"
          :addressZIP="user.addressZIP"
        />
        <!-- Add more fields as needed -->
      </div>
      <div v-else>
        <p>Loading user information...</p>
      </div>
    </div>
  </template>
<script>
// Importing Axios library for making HTTP requests
import axios from 'axios';
// Importing EventBox component for rendering individual events
import UserBox from './components/UserBox.vue';

export default {
  // Registering EventBox component for use within this component
  components: {
    UserBox
  },
  // Data property to hold the events fetched from the server
  data() {
    return {
      standarduser: null
    };
  },
  // Lifecycle hook called after the component has been mounted to the DOM
  mounted() {
    // Making an HTTP GET request to fetch events data from the server
    axios.get("http://localhost:8000/api/getUser")
      // Handling the successful response from the server
      .then(response => {
        // Storing the fetched events data in the 'standarduser' data property
        this.standarduser = response.data;
      })
      // Handling any errors that occur during the HTTP request
      .catch(error => {
        // Logging the error to the console
        console.error('Error fetching user:', error);
      });
  }
};
</script>
