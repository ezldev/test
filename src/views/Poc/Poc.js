import React, { Component } from 'react';

import { Container,Row,Col} from 'reactstrap';
import FilesList from './FilesList';
import FileUploader from './FileUploader';
import FileViewer from './FileViewer';

import axios from 'axios';

class Poc extends Component {
  constructor(props) {
    super(props);


  }
  fileListAvailable(filesToBeSent){
    this.setState({ files: filesToBeSent });
    
  }
  fileSelected(){
    //this.setState({ fileSelected: nextProps.fileSelected });
  }


  render() {

    return (
      <div className="animated fadeIn">

        <Container>
          <Row className="show-grid">
            <Col md="4">
              <FilesList ref="fileList" fileSelected={this.fileSelected} fileList={this.state.files}></FilesList>
              <FileUploader ref="fileUploader" fileListAvailable = {this.fileListAvailable} ></FileUploader>
            </Col>
            <Col md="8">
              <FileViewer></FileViewer>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Poc;
