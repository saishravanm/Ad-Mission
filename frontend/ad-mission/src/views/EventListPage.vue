<script lang="ts">
import SeatListView from '@/components/SeatListView.vue'
import { useEventStore } from '@/stores/auth'
import EventList from '../components/EventList.vue'

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
        toggleSeat(component) {
        const eventStore = useEventStore()
        this.currentComponent = component
        this.eventName = eventStore.loadCurrentEventName()
        console.log(this.eventName)
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
<body style="width: fit-content;">
    <component :is="currentComponent"
               :eventName=eventName
    />

</body>
     

    
</template>