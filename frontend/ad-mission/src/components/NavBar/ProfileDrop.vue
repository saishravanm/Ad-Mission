<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      {{ user.firstName }}
    </button>
    <div v-show="isOpen" class="dropdown-menu">
      <a href="#" class="dropdown-item" @click="updateProfile">
        <i class="fas fa-user"></i>
        Update Profile
      </a>
      <a href="#" class="dropdown-item">
        <i class="fas fa-edit"></i>
        Transactions
      </a>
      <a href="#" class="dropdown-item " @click="signOut">
        <i class="fas fa-sign-out-alt"></i>
        Sign Out
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import router from "@/router/index";
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    computed: {
      user() {
        return useAuthStore().user; // Load user data from the authStore
      }
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      updateProfile() {
        router.push({ name: 'updateUserInfo' });
      },
      signOut() {
        //Sign Out the user
          const authStore = useAuthStore();
          authStore.logout(); 
      }
    },
  };
</script>

<style scoped>
.dropdown {
  padding-right: 25px;
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #000;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 25px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  background-color: #0c0b0b;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(116, 14, 14, 0.2);
  padding: 8px 0;
}

.dropdown-item {
  color: #333;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.fas {
  margin-right: 8px;
}
</style>