<!-- Raj Thapa -->

<template>
    <div class="user-auth">
      <component :is="currentComponent"></component>
    </div>
</template>
  
<script>
  import Login from '@/components/UserAuth/Login.vue'
  import Registration from '@/components/UserAuth/Registration.vue'
  import ResetPassword from '@/components/UserAuth/ResetPassword.vue'

  //This page loads all the components for the user login, registration and reset password page
  //The default component loaded is login.vue, all three pages can be toggled
  export default {
    name: 'UserAuth',
    components: {
        Login,
        Registration,
        ResetPassword
    },
    data() {
        return {
        currentComponent: 'Login'
        }
    },
    methods: {
        toggleComponent(component) {
        this.currentComponent = component
        }
    }
  }
    
</script>