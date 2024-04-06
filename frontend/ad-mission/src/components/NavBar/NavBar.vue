<template>
  <div class="div">
    <div class="header-name" @click="goToHomepage()">
      AD-MISSION
    </div>
    <div class="contents">
      <template v-if="authStore.isAuthenticated">
        <span>{{ authStore.user.name }}</span>
      </template>
      <template v-else>
        <a href="/userAuth">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11558b15622870557d0492468da9113873d81693e3047b48768963343d78a6a6?apiKey=e7db2ab1be9c42fa88e927d21db16051&"
            class="img"
          />
        </a>
      </template>
    </div> 
  </div>
</template>
  
<script>
  import { useAuthStore } from '@/stores/auth.ts';

  export default {
    setup() {
      const authStore = useAuthStore();
      console.log(authStore.isAuthenticated);

      const goToHomepage = () => {
        // Redirect to homepage 
        window.location.href = '/'; 
      };

      return {
        authStore,
        goToHomepage
      };
    }
  }
</script>
  
<style scoped>
  .div {
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px 10px;
  }
  .header-name {
    background-color: transparent;;
    padding: 2px 10px 2px;
    color:white;
    cursor: pointer;
    font-size: 25px;
    font-style: italic;
  }
  .header-name:hover {
    transition: box-shadow 0.3s ease;
    box-shadow: 10px 5px 10px rgba(110, 26, 26, 0.5); 
  }
  .contents {
    display: flex;
    gap: 40px;
  }
  .img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 35px;
  }
</style>