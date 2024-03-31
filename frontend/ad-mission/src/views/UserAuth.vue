<template>
    <div class="user-auth">
      <component :is="currentComponent"></component>
    </div>
</template>
  
<script>
  import Login from '@/components/Login.vue'
  import Registration from '@/components/Registration.vue'
  import ResetPassword from '@/components/ResetPassword.vue'

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