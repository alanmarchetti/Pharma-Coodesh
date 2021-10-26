import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import './styles.css';

function ModalInfo(obj) {
  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    window.history.pushState({}, null,`#${obj.body.id.value}` );
    setShow(true);   
  }

  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="btn btn-table" onClick={handleShow}>
        Visualizar
      </Button>
      
      <Modal show={show}>
        <Modal.Header className="modal_header">
          <Modal.Title className="modal_title">
            <div>
              <img className="img-fetch" src={obj.body.picture.large} alt={"img-user"} />
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container d-flex flex-column justify-content-evenly modal_body">
          <h4 className="name">
            {`${obj.body.name.first} ${obj.body.name.last}`}
          </h4>

          <label htmlFor="email">
            <span className="modal_span">Email: </span>
            {obj.body.email}
          </label>

          <label htmlFor="gender">
          <span className="modal_span">Gênero: </span>
            {obj.body.gender}
          </label>

          <label htmlFor="date">
          <span className="modal_span">Data de nascimento: </span>
            {new Date(obj.body.dob.date).toLocaleDateString()}
          </label>

          <label htmlFor="phone">
          <span className="modal_span">Telefone: </span>
            {obj.body.phone}
          </label>

          <label htmlFor="nat">
          <span className="modal_span">Nacionalidade: </span>
            {obj.body.nat || 'n/a'}
          </label>

          <label htmlFor="street">
          <span className="modal_span">Endereço: </span>
            {obj.body.location.street.name || 'n/a'} -
            {` Numero: ${obj.body.location.street.number || 'n/a'}`}
          </label>

          <label htmlFor="">
          <span className="modal_span">ID: </span>
            {obj.body.id.value || 'n/a'}
          </label>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="btn btn-table"
            onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export { ModalInfo }