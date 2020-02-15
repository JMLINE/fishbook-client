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
               { props.token ? <Button style = {{color: 'white'}} color = "link" onClick={props.clickLogout}>Logout</Button> : null}
                    
                
                </NavItem>  
            </Nav>
        </Collapse>
        </Navbar>        
        </div>
    )
    
}

export default SiteBar;