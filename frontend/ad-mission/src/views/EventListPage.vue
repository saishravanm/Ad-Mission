<script lang="ts">
import EventList from '../components/EventList.vue'
import SeatList from '../components/SeatList.vue'

export default{
name: 'EventListPage',
    components: {
        EventList
    },
    data() {
        return {
        currentComponent: 'EventList'
        }
    },
    methods: {
        toggleComponent(component) {
        this.currentComponent = component
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
    <component :is="currentComponent"></component>
</body>
     

    
</template>