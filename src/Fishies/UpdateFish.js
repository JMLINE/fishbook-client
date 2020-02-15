import React, { useState } from 'react'
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from '../helpers/environment';

const UpdateFish= (props)=> {
    const [editSpecies, setEditSpecies]= useState(props.fishToUpdate.species);
    const [editSize, setEditSize]= useState(props.fishToUpdate.size);
    const [editFly, setEditFly]= useState(props.fishToUpdate.fly);
    const [editLocation, setEditLocation]= useState(props.fishToUpdate.location);
    const [editPhoto, setEditPhoto]= useState(props.fishToUpdate.photo);

    const updateCurrent = (event)=> {
        event.preventDefault()
        fetch(`${APIURL}api/fished/update/${props.fishToUpdate.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token

            }),
            body: JSON.stringify({ fished: {species: editSpecies, size: editSize, fly: editFly, location: editLocation, photo: editPhoto }
            })
        }).then(res => {props.fetchFishPost(); props.updateOff() })
  
        
    }
    function cancelUpdate(event){
        event.preventDefault()
        props.updateOff()
    }
   
    return (
        <Modal isOpen={true}>
            <ModalHeader>Update Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateCurrent}>
                <FormGroup>
                        <Label htmlFor="species">Edit Species:</Label>
                        <Input type="select" name="species" value={editSpecies} onChange={(e) => setEditSpecies(e.target.value)}>
                            <option></option>
                            <option value="Bass">Bass</option>
                            <option value="Trout">Trout</option>
                            <option value="Bluegill">Bluegill</option>
                            <option value="Carp">Carp</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="size">Edit Size:</Label>
                        <Input name="size" value={editSize} onChange={(e) => setEditSize(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="fly">Edit Fly:</Label>
                        <Input name="fly" value={editFly} onChange={(e) => setEditFly(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="location">Edit Location:</Label>
                        <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="photo">Edit Photo:</Label>
                        <Input name="photo" value={editPhoto} onChange={(e) => setEditPhoto(e.target.value)} />
                    </FormGroup>

                    <div className = "cancelSubmit">
                    <Button style = {{background: "green", width: "40%"}} color = "success" type="submit">Submit</Button>
                    <Button color = "danger" type="button" onClick= {(e)=>cancelUpdate(e)}>Cancel </Button>
                    </div>
                     
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default UpdateFish

