import React, { useContext } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import { ToastContext, DataContext } from '../DataContext';
import  toastIco from '../../multimedia/icons/oven.png';

const BoughtToast = () => {
  const { show, setShow, toastMessage } = useContext(ToastContext);

  return (
    <ToastContainer className="p-3 toastContainer" position={'bottom-start'} style={{ zIndex: 1 }}>
      <Toast className='toast' onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header className='toastHeader'>
          <img
            src={toastIco}
            className="rounded me-2 toastIco"
            alt="Horno"
          />
          <strong className="me-auto">Añadido al horno</strong>
          <small>Justo ahora</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default BoughtToast;