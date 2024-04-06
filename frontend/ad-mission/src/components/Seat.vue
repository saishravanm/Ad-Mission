
<style scoped>
.div-white {
  background-color: #fff;
  min-height: 36px;
  max-width: 38px;
}
.div-black {
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
    }
  },
  methods: {
    handleSeatClick() {
      // Emit a custom event to indicate that the seat was clicked,, CAN'T GET THIS METHOD TO WORK
      // Should show seat-details when clicked
      this.$emit('seat-click', {
        seatNum: this.seatNum,
        seatRow: this.seatRow,
        seatColumn: this.seatColumn,
        seatPrice: this.seatPrice,
        isFilled: this.isFilled
      });
    }
  }
};
</script>