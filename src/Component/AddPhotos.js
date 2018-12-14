import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import Image from './Images';
import {connect} from "react-redux";
import Example from './Example'
import { read } from 'fs';
import { UncontrolledCarousel } from 'reactstrap';
import { ALBUM_ACTIONS } from '../redux/action';

class AddPhotos extends React.Component {


    constructor()
    {
      super();

      this.state={
        modal: false,
        selectedFile:[]
      }
    }
    
    componentWillMount(){

      this.setState({selectedFile:this.props.data[this.props.index].thumbnail})
      console.log(this.props)
      console.log(this.props.data[this.props.index])
      
    }
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    fileChangedHandler = (event) => {
    
        var file =event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        let tempData = this.state.selectedFile;
        reader.onloadend = function(e){
            tempData.push(reader.result);
            this.setState({selectedFile: tempData})
        }.bind(this);
        console.log(this.state.selectedFile)
        let data={
          title:this.props.data[this.props.index].title,
          description:this.props.data[this.props.index].description,
          photos:this.state.selectedFile.length+1,
          thumbnail:this.state.selectedFile,
          index:this.props.index
        }
        console.log(this.state.selectedFile)
        console.log(data)
        console.log(this.props.data[this.props.index].thumbnail)
        this.props.dispatch({type:ALBUM_ACTIONS.ADD_PHOTO,payload:data})
        console.log(data);
      }

    render() {
      return (
        <div>
          
            <h2>{this.props.data[this.props.index].title}</h2>
            
              <Input type="file" name="file" id="exampleFile" onChange={this.fileChangedHandler} value=''/>
              {(this.state.selectedFile.length>0)?<Image index={this.removeImage} totalNo={this.state.selectedFile} />:""}
              
    
          
        </div>
      );
    }
  
    removeImage = (i) =>{

        var imageArray=[...this.state.selectedFile];
        imageArray.splice(i,1);
        this.setState({selectedFile:imageArray});
        let data={
          index:this.props.index,
          title:this.props.data[this.props.index].title,
          photos:this.props.data[this.props.index].photos,
          description:this.props.data[this.props.index].description,
          thumbnail:imageArray
      }

      console.log(data);
      this.props.dispatch({type:ALBUM_ACTIONS.REMOVE_PHOTO,payload:data})
      let details = {index:this.props.index,length:this.state.selectedFile.length-1}

        // this.props.photos(details)
        
    }
  }
  function mapStateToProps(state) {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps)(AddPhotos)
  