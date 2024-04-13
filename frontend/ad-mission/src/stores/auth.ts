  import { defineStore } from 'pinia';

  interface User {
    id: number; 
    email: string;
    name: string;
    isOrganizer: boolean;
  }

  interface Event{
    name: string; 
  }

  interface Seat{
    associated_user: User;
    associated_event: Event;
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
    id: "event",
    state: ():{event: Event | null} => ({
      event:null
    }),
    actions:{
      setCurrentEventName(eventName): void{
        console.log(eventName)
        localStorage.setItem('selectedEvent',JSON.stringify(eventName))
      },
      loadCurrentEventName(): string{
        const currentEventName = localStorage.getItem('selectedEvent');
        if(currentEventName){
        const ret = JSON.parse(currentEventName);
        return ret.x;
        }
        return " ";
      }
    }

  });