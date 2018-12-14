import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { readdirSync } from 'fs';
import Album from './Component/Album'
import AddPhotos from './Component/AddPhotos'


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
        album:[],
        index:0
    };
  }

  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path ="/"  component={() => <Album albumIndex={this.sendIndex} />}/>
            <Route exact path="/add"  component={() => <AddPhotos  index={this.state.index}/>} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

  sendIndex = index =>
  {
    this.setState({index:index});
  }
  

}

export default App;
