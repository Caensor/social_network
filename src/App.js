import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";



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


            <Route path="/profile" render={() => <Profile />} />


            <Route path="/dialogs" render={() => <DialogsContainer />} />

            <Route path="/friends" render={() => <Friends />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/setings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
