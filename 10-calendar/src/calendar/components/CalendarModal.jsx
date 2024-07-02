import { addHours, differenceInSeconds } from 'date-fns';
import { useState, useMemo, useEffect } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { es } from 'date-fns/locale/es';
import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import { useCalendarStore, useUiStore } from '../../hooks';

registerLocale('es', es);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const { activeEvent, startSavingEvent, startSettingActiveEventNull } = useCalendarStore();
  const { isDateModalOpen, closeDateModal } = useUiStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if (!formSubmitted) return '';
    return formValues.title.length > 0 ? '' : 'is-invalid';
  }, [formValues.title, formSubmitted]);

  useEffect(() => {
    if (activeEvent) {
      setFormValues({
        ...activeEvent,
      });
    }
  }, [activeEvent]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onDateChange = (event, changing) => {
    setFormValues({ ...formValues, [changing]: event });
  };
  const onCloseModal = () => {
    closeDateModal();
    startSettingActiveEventNull();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fechas seleccionadas', 'error');
      return;
    }
    if (formValues.title.length <= 0) return;
    await startSavingEvent(formValues);
    closeDateModal();
    setFormSubmitted(false);
  };

  return (
    <Modal
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      {' '}
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSubmit} className='container'>
        <div className='form-group mb-2 d-flex flex-column'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            locale='es'
            className='form-control'
            onChange={(event) => onDateChange(event, 'start')}
            selected={formValues.start}
            showTimeSelect
            timeCaption='Hora'
            dateFormat='Pp'
          />
        </div>

        <div className='form-group mb-2 d-flex flex-column'>
          <label>Fecha y hora fin</label>
          <DatePicker
            locale='es'
            className='form-control'
            onChange={(event) => onDateChange(event, 'end')}
            selected={formValues.end}
            minDate={formValues.start}
            showTimeSelect
            timeCaption='hora'
            dateFormat='Pp'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            value={formValues.title}
            onChange={onInputChange}
            className={`form-control ${titleClass}`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            value={formValues.notes}
            onChange={onInputChange}
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
