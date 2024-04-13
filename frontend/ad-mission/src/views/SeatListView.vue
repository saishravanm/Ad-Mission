<style>
/* CSS styles for the component */

body {
  background-color: black; /* Setting body background color to black */
}

.main-container {
  width: 160%;
  padding: 350px;
  margin: -170px ;
  background-color: black; /* Setting main container background color to black */
  border: 1px solid white; /* Adding border around the entire content with white color */
}

.event-name {
  color: #fff; /* Setting text color to white */
  -webkit-text-stroke: 2px #000; /* Adding a black stroke around text */
  border: 10px solid rgba(0, 0, 0, 1); /* Adding a black border */
  margin: -260px 5 0 84px;
  font: 200 50px Oswald, sans-serif; /* Setting font properties */
  font-size: 40px;
  margin-top: -10px;
  text-align: center;
}

.seating-chart-title {
  color: #fff; /* Setting text color to white */
  -webkit-text-stroke: 6px #000; /* Adding a black stroke around text */
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

<script setup lang="ts">
    import SeatList from "../components/SeatList.vue"
</script>

<template>
  <div class="gallery">
    <div class="gallery-container">
      <div class="gallery-top">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3f3f72cfbc0e3dc1a243b7e1b7b9b4510497fcabfdabd82a8a44e2202ea2fb?apiKey=2e752dba96d84337be028933d4224675&" alt="Gallery image 1" class="gallery-image" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3f3f72cfbc0e3dc1a243b7e1b7b9b4510497fcabfdabd82a8a44e2202ea2fb?apiKey=2e752dba96d84337be028933d4224675&" alt="Gallery image 2" class="gallery-image" />
      </div>
      <div class="main-container">
        <header class="seating-chart-header">
          <h1 class="seating-chart-title">SEATINGCHART</h1>
          <h2 class="event-name">EVENT NAME - VENUE</h2>
        </header>
        <main>
          <SeatList />
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
      <div class="gallery-bottom">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3f3f72cfbc0e3dc1a243b7e1b7b9b4510497fcabfdabd82a8a44e2202ea2fb?apiKey=2e752dba96d84337be028933d4224675&" alt="Gallery image 3" class="gallery-image" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3f3f72cfbc0e3dc1a243b7e1b7b9b4510497fcabfdabd82a8a44e2202ea2fb?apiKey=2e752dba96d84337be028933d4224675&" alt="Gallery image 4" class="gallery-image" />
      </div>
    </div>
  </div>
  <aside class="venue-details">VENUE DETAILS</aside>
</template>