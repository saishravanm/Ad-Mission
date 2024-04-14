import { defineStore } from 'pinia';

interface User {
  id: number; 
  email: string;
  name: string;
  isOrganizer: boolean;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): { user: User | null; isAuthenticated: boolean } => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(user: User): void {
        this.user = user;
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
        localStorage.setItem('user', JSON.stringify(this.user));
    },
    logout() : void {
        this.user = null;
        this.isAuthenticated = false;
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    },
    loadAuthStateFromLocalStorage(): void {
      const authStateString = localStorage.getItem('isAuthenticated');
      if (authStateString) {
        this.isAuthenticated = JSON.parse(authStateString);
      }
    },
    loadUser(): void {
      const authStateString = localStorage.getItem('user');
      if (authStateString) {
        this.user = JSON.parse(authStateString);
      }
    }
  },
});