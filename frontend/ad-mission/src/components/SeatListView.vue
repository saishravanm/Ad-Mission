<style>
/* CSS styles for the component */

body {
  background-color: black; /* Setting body background color to black */
}

.main-container {
  width: 200%;
  padding: 300px;
  margin: 0px ;
  background-color: black; /* Setting main container background color to black */
  border: 1px solid white; /* Adding border around the entire content with white color */
}

.event-name {
  color: #fff; /* Setting text color to white */
  -webkit-text-stroke: 2px #fdfdfd; /* Adding a black stroke around text */
  border: 10px solid rgb(0, 0, 0); /* Adding a black border */
  margin: -260px 5 0 84px;
  font: 200 50px Oswald, sans-serif; /* Setting font properties */
  font-size: 40px;
  margin-top: -10px;
  text-align: center;
}

.seating-chart-title {
  color: #fff; /* Setting text color to white */
  -webkit-text-stroke: 6px #969292; /* Adding a black stroke around text */
  border: 10px solid rgba(0, 0, 0, 1); /* Adding a black border */
  margin-top: -260px; /* Adjusting margin */
  font: 200 100px Oswald, sans-serif; /* Setting font properties */
  font-size: 80px;
  text-align: center;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.legend-box {
  width: 38px;
  height: 36px;
}

.legend-box.reserved {
  background-color: #000;
  border: 1px solid #fff;
}

.legend-box.available {
  background-color: #fff;
}

.legend-label {
  font-family: Oswald, sans-serif;
  color: white;
}

.venue-details {
  width: 100%;
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  font: 200 25px Oswald, sans-serif;
  padding: 22px 30px 100px;
  margin-left: 100px;
  -webkit-text-stroke: 1px #000;
}

@media (max-width: 991px) {
  .venue-details {
    padding: 0 20px;
  }
}


</style>

<script>
    import SeatList from "./SeatList.vue";
    export default{
      props:{
    eventName:{
      type: String, 
      required: true
    }
  },
  components:{
    SeatList
  }
    }
</script>

<template>
  <!-- Adding .main-container class to wrap all content -->
  <div class="main-container">
    <header class="seating-chart-header">
      <h1 class="seating-chart-title">SEATING CHART</h1>
      <h2 class="event-name">EVENT-NAME : {{ eventName }}</h2>
    </header>
    <br></br>
    <br></br>
    <br></br>
    <main>
     <SeatList
      :eventName="this.eventName"
     />
    </main>
    <br></br>
    <div class="legend">
        <div class="legend-item">
          <div class="legend-box reserved"></div>
          <span class="legend-label">Reserved</span>
        </div>
        <div class="legend-item">
          <div class="legend-box available"></div>
          <span class="legend-label">Available</span>
        </div>
      </div>
    </div>
</template>