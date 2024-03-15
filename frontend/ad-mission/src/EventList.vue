<script setup>
import axios from 'axios';
import EventBox from './components/EventBox.vue';
import {ref} from 'vue'
var events;
axios.get("http://localhost:8000/api/getevents").then(response =>{
    events = JSON.parse(JSON.stringify(response.data))
    console.log(events)
    //const eventNames = events[0]
    //console.log(events._value.target.eventName)
    //for(const event in events){
    //    console.log(events[event].eventName)
    //}
    return {events}
})

</script>


<template v-for="event in events">
    
    <EventBox
        eventName=event.eventName
        eventDate=event.eventDate
        eventVenue=event.eventLocation
        eventTime=event.eventTime
    />

</template>