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
<template>
<div style ="width: 1000px; height: auto; background-color: hex(CED4DA);">
<h1>Event Name:{{ eventName }}</h1>
<h1>Date:{{ date }}</h1>
<h1>Venue:{{ eventVenue }}</h1>
<h1>Time:{{ time }}</h1>
</div>
</template>


<script>
const eventName = "bgfhhf";
const date = "";
const venue = "";
const time = "";
export default{
    name: 'EventBox',
}
</script>