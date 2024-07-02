import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveNote, onAddNewEvent, onUpdateEvent, onDeleteEvent, setActiveEventNull } from '../store';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveNote(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = async () => {
    dispatch(onDeleteEvent());
  };

  const startSettingActiveEventNull = () => {
    dispatch(setActiveEventNull());
  };

  return {
    events,
    setActiveEvent,
    hasEventSelected: !!activeEvent,
    activeEvent,
    startSavingEvent,
    startDeletingEvent,
    startSettingActiveEventNull,
  };
};
