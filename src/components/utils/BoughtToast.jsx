import React, { useContext } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import { ToastContext } from '../DataContext';

const BoughtToast = () => {
  const { show, setShow } = useContext(ToastContext);

  return (
    <ToastContainer className="p-3" position={'bottom-start'} style={{ zIndex: 1 }}>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Añadido al carrito</strong>
          <small>Justo ahora</small>
        </Toast.Header>
        <Toast.Body>Woohoo</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default BoughtToast;