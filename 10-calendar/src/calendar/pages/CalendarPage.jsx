import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { getMessagesES, localizer } from '../../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';

const eventStyleGetter = () => {
  const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
  };

  return {
    style,
  };
};

export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const onDoubleClick = () => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event);
  };
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 80px' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
