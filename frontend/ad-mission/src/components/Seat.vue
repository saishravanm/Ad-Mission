
<style scoped>
.div-white {
  background-color: #fff;
  min-height: 36px;
  max-width: 38px;
  border-color: #9e9c9c;
  border-width: 2px;
  border-style: solid;
}
.div-black {
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #070707;
  min-height: 36px;
  max-width: 38px;
}
.backgroundColor{
  border-color: rgb(10, 10, 10);
  border-style: solid;
  border-width: 2px;
  background-color: #3046a7;
  min-height: 36px;
  max-width: 38px;
}
</style>

<template>
  <div>
    <!-- If isFilled is true, render .div-white -->
    <div v-if="isFilled" class="div-black" v-on:mouseover="preselect()" v-on:click="handleClick()"></div>
    <!-- If isFilled is false, render .div-black -->
    <div v-else class="div-white" v-on:mouseover="preselect()" v-on:click="handleClick()"></div>
  </div>
</template>


<script>
export default {
  name: 'Seat',
  props: {
    seatNum: {
      type: Number,
      required: true
    },
    seatRow: {
      type: String,
      required: true
    },
    seatColumn: {
      type: Number,
      required: true
    },
    seatPrice: {
      type: Number,
      required: true
    },
    isFilled: {
      type: Boolean,
      required: true
    },
    associatedUser: {
      type: String
    }
  },
  methods: {
    handleClick() {
      // Display seat details in a popup
      alert(`
        Seat Number: ${this.seatNum}
        Seat Row: ${this.seatRow}
        Seat Column: ${this.seatColumn}
        Seat Price: ${this.seatPrice}
        Is Filled: ${this.isFilled ? 'Yes' : 'No'}
      `);
    }, 
    //preselect() {
      
   // }
  } 
};
</script>