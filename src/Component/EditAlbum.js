import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class EditAlbum extends React.Component {
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
      this.editAlbum=this.editAlbum.bind(this);
    }
    componentWillMount(){
        this.state.title=this.props.values.title;
        this.state.description=this.props.values.description;
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    editAlbum()
    {
        let data={
            title:this.state.title,
            description:this.state.description,
            index:this.props.index,
            photos:this.props.values.photos,
            thumbnail:this.props.values.thumbnail
        }
        // data.thumbnail.push(this.props.thumbnail);
        // console.log(data);
        this.props.editAlbum(data,this.props.index);
        this.setState({
          modal: !this.state.modal
        });
    }
    render() {
      return (
        <div>
            <svg aria-hidden="true" onClick={this.toggle} data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Edit Details</ModalHeader>
            <ModalBody>
              <Form >
                  <FormGroup>
                      <Label for="title">Title</Label>
                      <Input type="text" name="title" onChange={this.titleChange} value={this.state.title}  id="title" placeholder="Title of an Album" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="description">Description</Label>
                      <Input type="text" name="description" onChange={this.descriptionChange} value={this.state.description}  id="description" placeholder="Description of an album" />
                  </FormGroup>
                  <Button color="success" onClick={this.editAlbum}>Submit</Button>
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
  