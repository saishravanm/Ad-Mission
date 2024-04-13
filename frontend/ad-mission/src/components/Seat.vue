
<style scoped>
.div-white {
  background-color: #f8f6f6;
  min-height: 36px;
  max-width: 38px;
  border-color: #777171;
  border-width: 2px;
  border-style: solid;
}
.div-black {
  border-color: rgb(3, 0, 8);
  border-style: solid;
  border-width: 2px;
  background-color: #d0d5e2;
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
</style>

<template>
  <div>
    <!-- If isFilled is true, render .div-white -->
    <div class="legend">
      <div class="legend-item">
        <div class="legend-box reserved">
          <div v-if="isFilled" class="div-black" v-on:mouseover="preselect()" v-on:click="handleClick()"></div>
          <div v-else class="div-white" v-on:mouseover="preselect()" v-on:click="handleClick()"></div>
        </div>
      </div>
    </div>
    
    <!-- If isFilled is false, render .div-black -->
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