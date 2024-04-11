
<!--Saishravan Muthukrishnan-->
<!--Frontend code to define the dimensions of the event box-->
<style scoped>
@font-face {
    font-family: Oswald;
    src: url("../assets/fonts/Oswald-ExtraLight.ttf");
}

.div {
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  display: flex;
  max-width: 689px;
  gap: 20px;
  justify-content: space-between;
  padding: 24px 0 24px 15px;
}
@media (max-width: 991px) {
  .div {
    flex-wrap: wrap;
  }
}
.div-2 {
  color: #d9d9d9;
  font: 200 35px Oswald, sans-serif;
}
.button {
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  color: #fff;
  justify-content: center;
  margin: auto 0;
  padding: 10px 6px;
  font: 300 23px Oswald, sans-serif;
  cursor:pointer;
}
</style>


<!--Define the props (instance variables to populate the event object)-->
<script>
import SeatList from './SeatListView.vue'
export default{
    name: 'Event',
    props:{
        eventName: {
            type: String, 
            required: true
        },
        eventDate: {
            type: String,
            required: true
        },
        eventVenue:{
            type: String, 
            required: true
        },
        eventTime:{
            type: String, 
            required: true
        },
        seatNum:{
          type: Number,
          required: true
        }
    }
}
</script>

<!--Write the HTML code to display the value of each prop onto the event object-->
<template>
<div class="div">
    <div class="div-2">EVENT NAME: {{ eventName }}<br />DATE:{{ eventDate }}<br />VENUE:{{ eventVenue }} <br /> SEATS: {{ seatNum }}</div>
    <button class="button" @click="$parent.$parent.toggleSeat('SeatListView',this.eventName)">FIND TICKETS</button>
    <!--SeatList
      :eventName -->
  </div>

</template>

