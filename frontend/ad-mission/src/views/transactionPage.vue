<template>

  <!--Insert Navbar-->
  <div class="ticket-container">
    <h2 class="section-title">TRANSACTION HISTORY</h2>
    <section class="transaction-details" v-if="transactions && transactions.length">
      <div v-for="transaction in transactions" :key="transaction._id" class="transaction-entry">
        <p>User Email: {{ user?.email }}</p>
        <p>Event Name: {{ transaction}}</p>
        <p>Event Location: {{ transaction.eventLocation }}</p>
        <p>Event Date: {{ new Date(transaction.eventDate).toLocaleDateString() }}</p>
        <p>Seat Number: {{ transaction.seatNumber }}</p>
        <p>Amount Paid: ${{ transaction.amount.toFixed(2) }}</p>
      </div>
    </section>
    <p v-else class="no-transactions">No transactions found.</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export default defineComponent({
  name: 'TicketComponent',
  computed: {
    user() {
      const currentUser = useAuthStore();
      return currentUser.user;
    }
  },
  data() {
    return {
      transactions: []
    };
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    async fetchTransactions() {
      try {
        const currentUser = useAuthStore();
        if(currentUser.user != null && currentUser.user.email != null){
          const response = await axios.get('http://localhost:8000/api/get_transactions/'+currentUser.user.email);
        this.transactions = response.data;
        console.log(this.transactions);
      }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        // Handle errors, possibly with a user notification
      }
    }
  }
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
  width: 1200px;
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

.no-transactions {
  color: #d9d9d9;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  margin-top: 20px;
}

.transaction-entry {
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.transaction-entry:last-child {
  border-bottom: none;
}

</style>
