<template>
    <div class="div">
      <div class="div-2">
        <div class="div-5">Shopping Cart</div>
        <div class="div-4">Event Name: {{seatNum.currentEventName}}</div>
        <div>
            <p>Seat number: {{seatNum.sN}}</p>
            <p>Price: $10.00</p>
        </div>
        <div class="div-7">
          <div class="left">
            Total:
          </div>
          <div class="right">
            $10.00
          </div>
        </div>
        <div class="div-9">
          <button class="button" @click="goToHome()">Cancel</button>
          <button class="button" @click="handleCheckout()">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
  import axios from 'axios';
  import { useAuthStore } from '../../stores/auth.ts';
  import {useEventStore} from '../../stores/auth.ts';
  import {useSeatStore } from '../../stores/auth.ts';
  import router from '@/router/index.ts';

  export default{
    data() {
      return {
          totalCost: 0,
      };
    },
    computed: {
      seatNum() {
        const seatStore = useSeatStore();
        if(seatStore.selectedSeat != null){
          console.log("HI");
          return seatStore.selectedSeat; // Load user data from the authStore
        }
        else{
          return null;
        }
      },
      seatPrice(){
        const seatStore = useSeatStore();
        if(seatStore.selectedSeat != null){
          return seatStore.selectedSeat.seatPrice; // Load user data from the authStore
        }
        else{
          return null;
        }
      }
    },
    methods: {
      goToHome() {
        router.push({name: 'homepage'});
      },
      handleCheckout() {
        const seatStore = useSeatStore();
        if (seatStore != null && seatStore.selectedSeat != null) {
          const eventName = seatStore.selectedSeat.currentEventName;
          const seatNum = seatStore.selectedSeat.sN;
          const response = axios.put('http://localhost:8000/api/reserve_seat/'+eventName+'/'+seatNum);
        }
      }
    }
  };
  
  </script>

  <style scoped>
  .div {
    background-color: #000;
    display: flex;
    width: 800px;
    margin-left: 400px;
    height: 100vh;
    align-items: center;
    font-weight: 200;
    justify-content: center;  
  }
  @media (max-width: 991px) {
    .div {
      white-space: initial;
      padding: 0 20px;
    }
  }
/** .div-2 {
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
  } */
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