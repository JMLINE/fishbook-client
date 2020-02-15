import React from 'react'
import {Table, Button } from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import APIURL from '../helpers/environment';

const FishTable = (props)=> {

const deleteFish= (fished)=>{
  fetch(`${APIURL}api/fished/delete/${fished.id}`, {
    method: 'DELETE',
    headers: new Headers ({
      'Content-Type': 'application/json',
      'Authorization': props.token
    })
  })
  .then(()=> props.fetchFishPost())

}

  const fishMapper = ()=>  {
      return props.fished.map(
        function (fished, index){
         
          return(
            
             
            <div className="cards">
              
      <Card>
        <CardImg style={{width: 750, height: 350}} img src ={fished.photo} alt="Card image cap" />
        <CardBody style = {{width: 750, height: 250, backgroundColor: "white"}}>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
         
          <CardText>
          Species: {fished.species}
          <br></br>
          Size: {fished.size} inches
          <br></br>
           Fly: {fished.fly}
           <br></br>
            Location: {fished.location}
            <br></br>
            {/* URL: {fished.photo} */}
            <br></br>
            
            {/* <div className = "updateSubmit"> */}
            <Button style= {{background: "green", width: "30%", margin: "5%"}}onClick={()=>{props.editUpdateFish(fished); props.updateOn() }}>Update</Button>
                  <Button style= {{background: "red", width: "30%", margin: "5%"}} onClick={()=> {deleteFish(fished)}}>Delete</Button>
                  {/* </div> */}
               </CardText>
         
        </CardBody>
      </Card>
      
      // <br></br>
      
     </div>
     
            
            // <tr key={index}>
            //   <th scope="row">{fished.id}</th>
              

          )
              {/* <td>{fished.species}</td>
              <td>{fished.size}</td>
              <td>{fished.fly}</td>
              <td>{fished.location}</td>
              <td>
                  <Button color="link" onClick={()=>{props.editUpdateFish(fished); props.updateOn() }}>Update</Button>
                  <Button stlye ={{backgroundColor: "black"}} color="link" onClick={()=> {deleteFish(fished)}}>Delete</Button>
              </td>
            </tr>
          ) */}
        }
      )
  }
  
  
    return (
        
        
           <div className= "title">
          {/* <hr />
         <Table striped> 
            <thead>
              <tr>
                
                <th>Species</th>
                <th>Size</th>
                <th>Fly</th>
                <th>Location</th>
              </tr>
            </thead> */}
           {/* <tb></tb> */}
             {fishMapper()}
           
          {/* </Table> */}
        </div>
      )
    }
   
export default FishTable


