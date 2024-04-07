import { defineStore } from 'pinia'

interface User {
  id: number; 
  email: string;
  isOrganizer: boolean;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): { user: User | null; isAuthenticated: boolean } => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(): void {
      //this.user = user;
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
    },
    logout() : void {
      this.user = null;
      this.isAuthenticated = false;
    },
    loadAuthStateFromLocalStorage(): void {
      const authStateString = localStorage.getItem('isAuthenticated');
      if (authStateString) {
        this.isAuthenticated = JSON.parse(authStateString);
      }
    },
  },
});