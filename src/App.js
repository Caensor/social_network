import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = props => {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main_container">
          <div className="head">
            <Header />
          </div>
          <div className="navl"><Navbar /></div>
          <div className="content">
            <Route path="/profile" render={()=><Profile posts={props.store.profilePage.posts}/>}/>
            <Route path="/dialogs" render={()=><Dialogs dialogsPage={props.store.dialogsPage}/>}/>
            <Route path="/friends" render={()=><Friends/>}/>
            <Route path="/news" render={()=><News/>}/>
            <Route path="/music" render={()=><Music/>}/>
            <Route path="/setings" render={()=><Settings/>}/>
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
