<style scoped>
@font-face {
    font-family: Oswald;
    src: url("../assets/fonts/Oswald-ExtraLight.ttf");
}

.div {
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  display: flex;
  max-width: 689px;
  gap: 20px;
  justify-content: space-between;
  padding: 24px 0 24px 15px;
}
@media (max-width: 991px) {
  .div {
    flex-wrap: wrap;
  }
}
.div-2 {
  color: #d9d9d9;
  font: 200 35px Oswald, sans-serif;
}
.div-3 {
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  color: #fff;
  justify-content: center;
  margin: auto 0;
  padding: 10px 6px;
  font: 300 23px Oswald, sans-serif;
}
</style>


<script>
export default{
    name: 'StandardUser',
    props:{
        userEmail: {
        type: String
        },
        phoneNumber: {
        type: Number
        },
        addressStreet: {
            type: String
        },
        addressCity: {
            type: String
        },
        addressState: {
            type: String
        },
        addressZIP: {
            type: Number
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        birthday: {
            type: Number
        },
        id: {
            type: Number
        }
    }
}
</script>
<template>
<div class="div">
    <div class="div-2">Name: {{ firstName }} {{ lastName }}<br />Email: {{ userEmail }}<br />Phone Number:{{ phoneNumber }}<br />Address:{{ addressStreet }} {{ addressCity }} {{ addressState }} {{ addressZIP }}</div>
    <div class="div-3">FIND TICKETS</div>
  </div>

</template>

