
import React, { Component ,ReactDOM} from 'react';
// import { Receiver, UploadManager } from 'react-file-uploader';
import Dropzone from 'react-dropzone';
class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state={
          filesToBeSent:[],
    }

  }
  onDrop(acceptedFiles, rejectedFiles) {
    // console.log('Accepted files: ', acceptedFiles[0].name);
    var filesToBeSent=this.state.filesToBeSent;
    filesToBeSent.push(acceptedFiles);
    this.setState({filesToBeSent}); 
   
    this.props.fileListAvailable({filesToBeSent:filesToBeSent})
}



  render() {

    return (
      <div className="animated fadeIn">
        <div className="App">
      <Dropzone onDrop={(files) => this.onDrop(files)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
     </div>
      </div>
    );
  }
}


export default FileUploader;
