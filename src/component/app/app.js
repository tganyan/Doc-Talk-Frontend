import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AboutUs from '../aboutus/aboutus';
import Account from '../user-account/user-account';
import AuthRedirect from '../auth-redirect/auth-redirect';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Link to='/'><h2>DocTalk</h2></Link>
            <nav>
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/chatroomlist'><li>Chatrooms</li></Link>
                <Link to='/account'><li>Account</li></Link>
                <Link to='/aboutus'><li>About Us</li></Link>
              </ul>
            </nav>
            <div>
              <Route path ='*' component={AuthRedirect}/>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/signup' component={Landing}/>
              <Route exact path='/login' component={Landing}/>
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route exact path='/account' component={Dashboard}/>
              <Route exact path='/aboutus' component={AboutUs}/>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
