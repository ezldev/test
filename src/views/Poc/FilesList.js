
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function handleSelect(selectedKey) {
  //alert(`selected ${selectedKey}`);
}

class FilesList extends Component {
  constructor(props) {
    super(props);
   

  }



  render() {

    return (
      <div className="animated fadeIn">
         <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default FilesList;
