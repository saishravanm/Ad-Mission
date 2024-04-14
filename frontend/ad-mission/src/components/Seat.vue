
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
  border-color: #FFF(3, 0, 8);
  border-style: solid;
  border-width: 2px;
  background-color: #000;
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
.popup {
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 50px; /* Add this line to create vertical spacing */
  margin-left: 40px; /* Add this line to create horizontal spacing */
}

</style>

<template>
  <div>
    <div class="legend">
      <div class="legend-item">
        <div class="legend-box reserved">
          <div
            :class="{'div-black': isFilled, 'div-white': !isFilled}"
            @mouseover="preselect"
            @mouseleave="handleMouseLeave"
            @click="handleClick(seatNum,seatPrice)"
          ></div>
        </div>
        <div v-show="isHovering" class="popup">
          <p>Seat Number: {{ seatNum }}</p>
          <p>Seat Row: {{ seatRow }}</p>
          <p>Seat Column: {{ seatColumn }}</p>
          <p>Seat Price: {{ seatPrice }}</p>
          <p>Is Filled: {{ isFilled ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useSeatStore } from '@/stores/auth';
import { useEventStore } from '@/stores/auth';
import { useAuthStore } from '@/stores/auth';
import { errorMessages } from 'vue/compiler-sfc';
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
  data() {
    return {
      isHovering: false,
      errorMessage: " ",
    }
  },
  methods: {
    preselect() {
      this.isHovering = true;
    },
    handleMouseLeave() {
      this.isHovering = false;
    },
    handleClick(sN,sP) {
      const userStore = useAuthStore()
      if(userStore.isAuthenticated)
      {
        confirm('would you like to reserve this seat?');
  
  const seatStore = useSeatStore()
  const eventStore = useEventStore() 
  const currentUserName = userStore.loadCurrentUserName()
  const currentEventName = eventStore.loadCurrentEventName()
  seatStore.storeSelectedSeat({currentUserName,currentEventName,sN,sP})

  seatStore.loadSelectedSeatFromLocalStorage()
      }
      else{
        this.errorMessage = "You have not logged in! Please Sign in or register!"
      }
      
    }
  }
};
</script>