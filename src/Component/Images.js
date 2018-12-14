import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Example from './Example'
export default class Image extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle=this.toggle.bind(this);
    }

    toggle(i) {
        // console.log(i);
        
        this.setState({
          modal: !this.state.modal
        });
      }

    render()
    {
        return(
            <ul className="albums" >
                    {this.props.totalNo.map((object,i) =>{
                        return( 
                        <li className="images">
                        <div id="mdiv" onClick={() => this.removeImage(i)}>
                            <div class="mdiv">
                                <div class="md" >
                                                               
                                </div>
                            </div>
                        </div>
                        <img src={object} onClick={()=>this.toggle(i)} className="viewImage" />
                        
                        </li>
                                              
                         );
                    })}
                    <Modal  isOpen={this.state.modal} toggle={this.toggle} className="modal-content-custom">
                            <ModalHeader toggle={this.toggle}>Slide Show</ModalHeader>   
                            <ModalBody>
                                <Example images={this.props.totalNo} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>Cancel Slide Show</Button>
                            </ModalFooter>
                        </Modal> 
                </ul>
        )
    }
    removeImage = (i) =>{
        this.props.index(i);
    }
}