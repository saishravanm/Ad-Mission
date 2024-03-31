
  <style scoped>
  .div-white {
    background-color: #fff; 
    min-height: 36px;
    max-width: 38px;
  }
  .div-black{
    border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  min-height: 36px;
  max-width: 38px;
  }
  </style>

<template>
  <div>
    <!-- If isFilled is true, render .div-white -->
    <div v-if="isFilled" class="div-white"></div>
    <!-- If isFilled is false, render .div-black -->
    <div v-else class="div-black"></div>
  </div>
</template>

  

    <script>
export default{
    name: 'Seat',
    props:{
        seatNum: {
            type: Number, 
            required: true
        },
        seatRow: {
            type: String,
            required: true
        },
        seatColumn:{
            type: Number, 
            required: true
        },
        seatPrice:{
            type: Number, 
            required: true
        },
        isFilled:{
            type: Boolean, 
            required: true
        }
    },
    
}
</script>
