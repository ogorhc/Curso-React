import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   id: '123',
//   title: 'Cumpleaños',
//   notes: 'Comprar el pastel',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     id: '123',
//     name: 'Igor',
//   },
// };

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: false,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onLoadEvents: (state, { payload }) => {
      state.isLoadingEvents = true;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
    onSetActiveNote: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events = [...state.events, payload];
      state.activeEvent = null;
    },
    setActiveEventNull: (state) => {
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => event.id !== state.activeEvent.id);
        state.activeEvent = null;
      }
    },
    onLogoutCalendar: (state) => {
      state.events = [];
      state.isLoadingEvents = true;
      state.activeEvent = null;
    },
  },
});
export const {
  onSetActiveNote,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  setActiveEventNull,
  onLoadEvents,
  onLogoutCalendar,
} = calendarSlice.actions;
