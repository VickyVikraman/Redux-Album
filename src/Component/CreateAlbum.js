import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class CreateAlbum extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        title:"",
        description:""
      };

      this.toggle = this.toggle.bind(this);
      this.titleChange=this.titleChange.bind(this);
      this.descriptionChange=this.descriptionChange.bind(this);
      this.createAlbum=this.createAlbum.bind(this);
    }
    componentWillMount(){
        // console.log(this.props)
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    createAlbum()
    {
        let data={
            title:this.state.title,
            description:this.state.description,
            photos:0,
            thumbnail:[],
        }
        this.props.createAlbum(data);
        this.setState({
          modal: !this.state.modal
        });
    }
  
    render() {
      return (
        <div>
          {/* <Button color="danger"  size="sm">Create</Button> */}
          <div className="details"    onClick={this.toggle}>
                <i class="fa fa-plus" ></i>
           </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}  >
            <ModalHeader toggle={this.toggle}>Album Details</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.createAlbum}>
                  <FormGroup>
                      <Label for="title">Title</Label>
                      <Input type="text" name="title" onChange={this.titleChange} value={this.state.title}  id="title" placeholder="Title of an Album" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="description">Description</Label>
                      <Input type="text" name="description" onChange={this.descriptionChange} value={this.state.description}  id="description" placeholder="Description of an album" />
                  </FormGroup>
                  <Button color="success" onClick={this.createAlbum}>Create</Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    titleChange(e)
    {
        this.setState({title:e.target.value});
    }
    descriptionChange(e)
    {
        this.setState({description:e.target.value});
    }
  }
  