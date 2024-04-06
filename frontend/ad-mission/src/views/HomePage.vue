<script>
    import Navbar from '../components/NavBar/NavBar.vue';

    export default {
        components: {
            Navbar
        }
    }
</script>

<template>
  <div class="div">
    <Navbar></Navbar>
    <div class="events">
        <div class="backgrd">
          <div class="lights">
            <div class="lgt"></div>
            <div class="lgt"></div>
          </div>

          <div class="div-8">
            <div class="div-9">

            </div>
          </div>
        </div>
      </div>
  </div>
</template>
  
  
  
<style scoped>
  .div {
    background-color: #000;
    width: 1200px;
  }
  .events {
    z-index: 10;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 68px 80px;
  }
  @media (max-width: 991px) {
    .events {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .backgrd {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .backgrd {
      max-width: 100%;
    }
  }
  .lights {
    align-self: center;
    display: flex;
    width: 562px;
    max-width: 100%;
    gap: 20px;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  @media (max-width: 991px) {
    .lights {
      flex-wrap: wrap;
    }
  }
  .lgt {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: #d9d9d9;
    border-radius: 50%;
    width: 69px;
    height: 18px;
  }


  .div-8 {
    border-color: rgba(217, 217, 217, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #000;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 60px;
  }
  @media (max-width: 991px) {
    .div-8 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-9 {
    width: 494px;
    max-width: 100%;
    margin: 176px 0 198px;
  }
  @media (max-width: 991px) {
    .div-9 {
      margin: 40px 0;
    }
  }
  </style>