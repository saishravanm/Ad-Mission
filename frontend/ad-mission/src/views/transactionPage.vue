<template>
  <div class="ticket-container">
    <header class="ticket-header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/79072968352b1ea183e28304d155034abe34d5a032b948dd6fb37b7f0a73512f?apiKey=1ad0d0045c2e41ae9efd2b7342e0a4be&" alt="AD-MISSION logo" class="logo" />
        <h1 class="company-name">AD-MISSION</h1>
      </div>
      <nav class="icon-nav">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffd6ebdd91359f2ea9eb967668538ca6eb9e11f861b41859caf80cd72b2fd3b7?apiKey=1ad0d0045c2e41ae9efd2b7342e0a4be&" alt="Icon 1" class="icon" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c5823a81a2007fc8b4de36eb9b8e2fdea54907a2b57f0cc6e033ebca75b05ab?apiKey=1ad0d0045c2e41ae9efd2b7342e0a4be&" alt="Icon 2" class="icon" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/11558b15622870557d0492468da9113873d81693e3047b48768963343d78a6a6?apiKey=1ad0d0045c2e41ae9efd2b7342e0a4be&" alt="Icon 3" class="icon" />
      </nav>
    </header>
    <h2 class="section-title">TRANSACTION HISTORY</h2>
    <section class="transaction-details">
      <p>User Email:</p>
      <p>Event Name:</p>
      <p>Event Location:</p>
      <p>Event Date:</p>
      <p>Seat Number:</p>
      <p>Amount Paid:</p>
    </section>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'TicketComponent',
});
</script>


<style scoped>
.ticket-container {
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 52px 59px 80px;
  min-height: 100vh;
  width: 100%s;
  box-sizing: border-box;
  margin: 0;
}


.ticket-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: left;
}


.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


.logo {
  width: 90px;
  height: auto;
}


.company-name {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: 200;
}


.icon-nav {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}


.icon {
  width: auto;
  height: auto;
}


.icon:nth-child(1) {
  width: 16px;
}


.icon:nth-child(2) {
  width: 15px;
}


.icon:nth-child(3) {
  width: 24px;
}


.section-title {
  background-color: transparent;
  color: #fff;
  font-family: 'Post No Bills Jaffna Light', sans-serif;
  font-size: 40px;
  font-weight: 300;
  border: 1px solid #fff;
  padding: 20px;
  width: 80%;
  text-align: left;
  margin-top: 31px;
}


.transaction-details {
  background-color: transparent;
  color: #d9d9d9;
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
  font-weight: 200;
  border: 1px solid #d9d9d9;
  padding: 35px;
  width: 1100px;
  max-width: 100%;
  margin-top: 72px;
}
</style>
