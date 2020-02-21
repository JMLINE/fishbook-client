import React, {useState} from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Button
}from 'reactstrap';



const SiteBar = (props) => {
    const [isOpen, setIsOpen]=useState(false);
    const toggle =()=> {
      let newIsOpen=!isOpen;
      setIsOpen(newIsOpen);
}


    return (

        
        <div className = "navBar">
        <Navbar color="faded" light expand='md'>
            <NavbarBrand style = {{color: 'white'}} href="/">Fishbook</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
               
                <Button color = 'link'><a target="_blank" style ={{color: 'white'}}  href="https://howtoflyfish.orvis.com/video-lessons/chapter-one-the-basics-of-fly-fishing">Fly Fishing 101</a></Button>

                <Button color= "link"><a target="_blank"style ={{color: 'white'}} href="https://ag-happygrillmore-log.herokuapp.com">Cook Your Catch</a></Button>

               { props.token ? <Button style = {{color: 'white'}} color = "danger" onClick={props.clickLogout}>Logout</Button> : <a style = {{color: 'black', fontSize: '20px' }}>||Catch. Post. Release||</a>}
               
                
                </NavItem>  
            </Nav>
        </Collapse>
        </Navbar>        
        </div>
    )
    
}

export default SiteBar;