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
    associated_user_name: string;
    associated_event_name: string;
    seat_num: number;
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
      loadUser(): void {
        const authStateString = localStorage.getItem('user');
        if (authStateString) {
          this.user = JSON.parse(authStateString);
        }
      },
      loadCurrentUserName(): string{
        const currentUser = localStorage.getItem('user');
        if(currentUser){
        const ret = JSON.parse(currentUser);
        return ret.user;
        }
        return " ";
      },
      changeUserName(newName): void {
        const currentUserString = localStorage.getItem('user');
        if (currentUserString != null){
          const currentUser = JSON.parse(currentUserString);
          currentUser.firstName = newName;
          localStorage.setItem('user', JSON.stringify(currentUser));

        }
      }
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
    },
    
  });

  export const useSeatStore = defineStore({
    id: 'seat',
    state: (): { selectedSeat: Seat | null } => ({
      selectedSeat: null,
    }),
    actions: {
      storeSelectedSeat(seat: Seat): void {
        this.selectedSeat = seat;
        localStorage.setItem('selectedSeat', JSON.stringify(seat));
      },
      loadSelectedSeatFromLocalStorage(): Seat{
        const selectedSeatString = localStorage.getItem('selectedSeat');
        if (selectedSeatString) {
          this.selectedSeat = JSON.parse(selectedSeatString);
          if (this.selectedSeat){
            return this.selectedSeat;
          }
        }
        console.log(selectedSeatString);
      },
      clearSelectedSeat(): void {
        this.selectedSeat = null;
        localStorage.removeItem('selectedSeat');
        
      },
    },
  });