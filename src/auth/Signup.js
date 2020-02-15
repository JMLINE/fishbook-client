import React, {useState} from 'react';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap';

const Signup = (props)=> {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [newEmail, setNewEmail]=useState('');
const handleSubmit =(event)=>{
event.preventDefault();
fetch("http://localhost:4000/api/user/createuser", {
    method: 'POST',
    body: JSON.stringify({user:{username: username, password: password, newEmail: newEmail}}),
    headers: new Headers ({
        'Content-Type': 'application/json'
    })
}).then(
    (response) => response.json()
).then ((data)=> {
    props.updateToken(data.sessionToken)
})


}
    return (
        <div>
            <h1 class="join">Join Us</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e)=> setUsername(e.target.value)} name="username" value={username} required />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="newEmail">Email</Label>
                    <Input onChange={(e)=>setNewEmail(e.target.value)} type= "email" name="email" value={newEmail}/>
                </FormGroup>  

                <FormGroup>
                <Label htmlFor="password">Password</Label>
                    <Input onChange={(e)=> setPassword(e.target.value)} name="password" type="password" minlength="8" value={password}/>
                </FormGroup>
                <Button color = "success" type="submit">Signup</Button>
            </Form>
            
        </div>
    )
}
export default Signup;