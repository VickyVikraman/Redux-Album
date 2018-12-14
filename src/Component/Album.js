import React, { Component } from 'react';
import CreateAlbum from './CreateAlbum'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { ALBUM_ACTIONS } from '../redux/action';
import EditAlbum from './EditAlbum'
import Thumbnail from './Thumbnail'

class Album extends Component{
    
 

    componentWillMount(){
        console.log(this.props);
        
    }


    render(){
        return(
                <ul className="albums1">   
                    {this.props.data.map((object,i) => {
                        return(
                        <li className="albumDetails" >
                            <div className="trash" onClick={()=>this.removeAlbum(i)}>
                                <svg aria-hidden="true" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path></svg>
                            </div>
                            <div className="edit" >
                            <EditAlbum editAlbum={this.editAlbum} photos={object.thumbnail.length} thumbnail={object.thumbnail} values={object} index={i} />
                            </div>
                            <Link to = {"add"} onClick={() => this.getIndex(i)} className="linking">
                                <div className="app">
                                    <header title={this.props.header}>{object.title}</header>
                                    <main title={this.props.main}>
                                     <Thumbnail pic={object.thumbnail} /> 
                                    </main>
                                    {object.thumbnail.length} Photos
                                    <footer title={this.props.footer}> 
                                        <div>
                                            {object.description}
                                        </div>
                                    </footer>
                                </div>
                            </Link>
                        </li>               
                         );
                         
                    })}
                    <CreateAlbum createAlbum={this.submitData}  />   
                </ul>
        )
    }

    getIndex = index =>
    {
        this.props.albumIndex(index);
        
    }

    editAlbum = (data,index) =>
    {
        let title=data.title;
        let description=data.description;
        let photos=data.photos;  
        let detail={
            title:title,
            description:description,
            photos:photos,
            thumbnail:[]
        }
        detail.thumbnail=data.thumbnail;
        const payload={
            value:detail,
            index:index
        }
        
        this.props.dispatch({type:ALBUM_ACTIONS.UPDATE,payload:payload})
    }

    removeAlbum = (index) =>
    {
        this.props.dispatch({type:ALBUM_ACTIONS.REMOVE,payload:index})

    }
    submitData = (data) =>
    {
        this.props.dispatch({type:ALBUM_ACTIONS.ADD,payload:data})
    } 

}
function mapStateToProps(state) {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps)(Album)