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
    },
    logout() : void {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});