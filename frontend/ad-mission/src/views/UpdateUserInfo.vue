<!-- Vinay Verma -->

<template>
  <div class="update-user-info">
    <component :is="currentComponent"></component>
  </div>
</template>
  
<script>
  import UserInfo from '@/components/UpdateUserInfo/UserInfo.vue'

  //This page loads all the components for the user login, registration and reset password page
  //The default component loaded is login.vue, all three pages can be toggled
  export default {
    name: 'UpdateUserInfo',
    components: {
        UserInfo,
    },
    data() {
        return {
        currentComponent: 'UserInfo'
        }
    },
    methods: {
        toggleComponent(component) {
        this.currentComponent = component
        }
    }
  }
    
</script>