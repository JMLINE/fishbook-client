import React, { useState } from 'react';
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';
import Signup from './Signup'

const Test = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}New User?</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
       
        <ModalBody>
        <Signup updateToken={props.updateToken} />
        </ModalBody>
        <ModalFooter>
        <Button style={{backgroundColor: "red"}} onClick={toggle}>Cancel</Button>
        </ModalFooter>
        
      </Modal>
    </div>
  );
}

export default Test;