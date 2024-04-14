<template>
    <div class="div">
      <div class="div-2">
        <div class="div-5">Shopping Cart</div>
        <div class="div-4">Current cart:</div>
        <div v-for="seat in seats" :key="seatid">
            <p>Seat number: {{ seat.id }}</p>
            <p>Price: {{ seat.price }}</p>
        </div>
        <div class="div-7">
          <div class="left">
            Total:
          </div>
          <div class="right">
            {{ totalCost }}
          </div>
        </div>
        <div class="div-9">
          <button class="button" @click="">Cancel</button>
          <button class="button" @click="">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
  import axios from 'axios';
  import { useAuthStore } from '../../stores/auth.ts';
  import {useEventStore} from '../../stores/auth.ts';
  import {useSeatStore } from '../../stores/auth.ts';
  const seatStore = useSeatStore();
  const seat = seatStore.
  export default{
    data() {
      return {
          seats: [],
          totalCost: 0,
      };
    },
    mounted() {
      axios.get('data.json')
        .then(response => {
          this.seats = response.data;
          this.calculateTotal();
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    methods: {
      calculateTotal() {
        this.totalCost = this.seats.reduce((total, seat) => total + seat.cost, 0);
      }
  }
  };
  
  </script>

  <style scoped>
  .div {
    background-color: #000;
    display: flex;
    width: 1200px;
    height: 100vh;
    align-items: center;
    font-weight: 200;
    white-space: nowrap;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    
  }
  @media (max-width: 991px) {
    .div {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-2 {
    border-color: rgba(217, 217, 217, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #000;
    display: flex;
    width: 718px;
    max-width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 61px;
  }
  @media (max-width: 991px) {
    .div-2 {
      margin-top: 40px;
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-3 {
    display: flex;
    width: 339px;
    max-width: 100%;
    align-items: flex-start;
    gap: 20px;
  }
  @media (max-width: 991px) {
    
  }
  .div-4 {
    color: #d9d9d9;
    font: 25px Oswald, sans-serif;
    margin-bottom: 10px;
  }
  @media (max-width: 991px) {
    .div-4 {
      margin-top: 40px;
    }
  }
  .div-5 {
    height: auto;
    align-self: center;
    font-size: 40px;
    color: #fff;
    flex: 1;
    padding-bottom: 0px;
  }
  @media (max-width: 991px) {
    .div-5 {
      white-space: initial;
    }
  }
  .input-field {
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #000;
    margin-top: 10px;
    width: 100%;
    height: 54px;
    padding: 0 10px;
    font-size: 16px;
    color: #d9d9d9;
  }
  .div-7 {
    align-self: stretch;
    display: flex;
    margin-top: 31px;
    gap: 20px;
    font-size: 25px;
    color: #fff;
    justify-content: space-between;
    padding: 0 2px;
  }
  @media (max-width: 1991px) {
    .div-7 {
      max-width: 100%;
      white-space: initial;
    }
  }
  .div-9 {
    align-self: stretch;
    display: flex;
    margin-top: 31px;
    gap: 20px;
    font-size: 25px;
    color: #fff;
    justify-content: space-between;
    padding: 0 2px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      flex-wrap: wrap;
      white-space: initial;
    }
  }
  .button {
    font-family: Oswald, sans-serif;
    border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: 2px;
    background-color: #000;
    align-items: start;
    padding: 16px 38px 9px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    .button {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  </style>