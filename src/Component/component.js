import React, { Component } from 'react';
import CreateAlbum from './CreateAlbum'
import Album from './Album';
import { Link } from "react-router-dom";

export default class MainWindow extends Component {
    constructor(props){
        super(props);
        this.state={
            album:[]
        };
    }

    render(){
        return(
            <div>
                <p>Want to create an Album?</p>
                {/* <Album data={this.props.album} index={this.removeAlbum} total={this.lengthOf} thumbnail={this.thumbnail} editDetail={this.edited}/> */}
                <CreateAlbum createAlbum={this.submitData}  />
                
               {/* <Link to ="/add">  */}
            
                {/* </Link> */}
            </div>
        )
    }
  
    lengthOf = (data) =>
    {
        let {album} = this.state;
        album[data.index].photos=data.length;
        this.setState({album:album})

    }
    thumbnail = (data) =>
    {     
        let {album}=this.state;
        // let {thumbnail}=this.state.album;
        album[data.index].thumbnail=data.thumbnail;
        this.setState({album:album[data.index].thumbnail})
        console.log(this.state.album)
        // thumbnail.push(data);
        // this.setState({thumbnail:thumbnail}) 
        
    }

    edited = (data) =>
    {
        let title=data.title;
        let description=data.description;
        let photos=data.photos;
        let {album}=this.state;

        let detail={
            title:title,
            description:description,
            photos:photos,
            thumbnail:[]
        }
        detail.thumbnail=data.thumbnail;
        console.log(detail.thumbnail);
        console.log(data.thumbnail);
        album[data.index]=detail;
        this.setState({album:album})
        console.log(this.state.album)
    }
     
    submitData = (data) =>
    {
        let {album} =this.state;
        album.push(data);
        this.setState({album:album});
        console.log(this.state.album)
        this.props.album(data);
    } 

    removeAlbum = (i) =>
    {
        var imageArray=[...this.state.album];
        imageArray.splice(i,1);
        this.setState({album:imageArray});
    }
}
