import { defineStore } from 'pinia';

interface User {
  id: number; 
  email: string;
  name: string;
  isOrganizer: boolean;
}

interface Event{
  associated_user: User
  name: string; 
  user_registered_seat: Seat
  isRegistered: boolean;
}

interface Seat{
  associated_user: User;
  seat_num: number;
  isFilled: boolean; 
  seatPrice: number;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): { user: User | null; isAuthenticated: boolean } => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(user): void {
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
    
    
  },

});
export const useEventStore = defineStore({
  id: "auth",
  state: ():{event: Event | null; isRegistered: boolean; associated_user: null;  user_registered_seat: null} => ({
    event:null,
    isRegistered:false,
    associated_user: null, 
    user_registered_seat: null,
  }),
  actions:{
    register(user, event,seat): void{
      this.event = event; 
      event.associated_user = user;
      event.user_registered_seat = seat;
      localStorage.setItem('associatedUser',JSON.stringify(event.associated_user))
      localStorage.setItem('seat', JSON.stringify(event.user_registered_seat))
      localStorage.setItem('event',JSON.stringify(event))

    },
    
  }

});