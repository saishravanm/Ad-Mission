<style scoped>
@font-face {
    font-family: Jaffna;
    src: url('../assets/fonts/PostNoBillsJaffna-Regular.ttf');
    
}
h1{
    color: black;
    font-family: Jaffna;
    font-size: x-large;
}

</style>
<script>
export default{
    name: 'Event',
    props:{
        eventName: {
            type: String, 
            required: true
        },
        eventDate: {
            type: String,
            required: true
        },
        eventVenue:{
            type: String, 
            required: true
        },
        eventTime:{
            type: String, 
            required: true
        }
    }
}
</script>
<template>
<div style ="width: 1000px; height: 150px; background-color: #DEE2E6;">
<h1>Event Name:{{ eventName }}</h1>
<h1>Date:{{ eventDate }}</h1>
<h1>Venue:{{ eventVenue }}</h1>
<h1>Time:{{ evenTime }}</h1>
</div>

</template>

