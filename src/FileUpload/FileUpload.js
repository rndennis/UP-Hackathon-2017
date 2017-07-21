import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './FileUpload.css';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    this.setState({
      selectedFileName: file.name
    });
    reader.onload = (event) => {
      this.props.onSelectFile(event);
    };
    reader.readAsText(file);
  }
  render() {
    return (
      <div className="FileUpload">
        <div className="FileField">
          <TextField
            disabled
            hintText="No file selected"
            value={this.state.selectedFileName}>
          </TextField>
        </div> 
        <div className="RaisedButton"> 
          <RaisedButton
            containerElement="label"
            label="Select File">
            <input type="file" onChange={this.handleChange}/>
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default FileUpload;