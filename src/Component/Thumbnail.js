import React, { Component } from 'react'

export default class Thumbnail extends Component
{
   

    render()
    {
        return(
            <div className="thumbnail">
                {/* <ul className="albums"> */}
                    
                    {this.props.pic.map((object,i) =>{
                        return( 
                            
                        <li className="thumbnailPic" > 
                            
                            <img src={object} width="100%" /> 
                        </li>
                                              
                         );
                    })}
                    
                {/* </ul> */}
            </div>
        )
    }

}