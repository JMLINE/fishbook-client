import React, {useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FishPost from './FishPost'

const FishModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div className = "postButton">
      <Button color="info" onClick={toggle}>{buttonLabel}Post a Fish!</Button>
      
      <Modal isOpen={modal} toggle={toggle}  className={className}>
        
        <ModalBody>

        <FishPost fetchFishPost={props.fetchFishPost} token={props.token} toggle= {toggle} />

        </ModalBody>
    
       
      </Modal>
    </div>
  );
}

export default FishModal;