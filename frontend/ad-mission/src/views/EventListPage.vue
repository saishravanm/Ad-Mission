<script lang="ts">
import { eventNames } from 'process'
import EventList from '../components/EventList.vue'
import SeatList from '@/components/SeatList.vue'
import SeatListView from '@/components/SeatListView.vue'

export default{
name: 'EventListPage',
    components: {
        EventList,
        SeatListView,
    },
    data() {
        return {
        currentComponent: 'EventList',
        eventName: "" 
        }
    },
    methods: {
        toggleSeat(component, eventName) {
        this.currentComponent = component
        this.eventName = eventName
        }
    }
  }
</script>
<style>
body{
    background-color: black;
}
</style>

<template>
<body>
    <component :is="currentComponent"
               :eventName=eventName
    />

</body>
     

    
</template>