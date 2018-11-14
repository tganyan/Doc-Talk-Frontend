import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AboutUs from '../aboutus/aboutus';
import AuthRedirect from '../auth-redirect/auth-redirect';
import DiagnosisList from '../diagnoses-list/diagnosis-list';

class App extends React.Component {
  render() {
    return (
      <div className='bigWhiteBox'>
        <BrowserRouter>
          <React.Fragment>
            <nav className='navStyle'>
              <ul>
                  <Link to='/'><header>DocTalk</header></Link>
                <Link to='/'><li>Home</li></Link>
                <Link to='/account'><li>Account</li></Link>
                <Link to='/aboutus'><li>About Us</li></Link>
              </ul>
            </nav>
            <div style={{ padding: '20px' }}>
              <Route path ='*' component={AuthRedirect}/>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/signup' component={Landing}/>
              <Route exact path='/login' component={Landing}/>
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route exact path='/account' component={Dashboard}/>
              <Route exact path='/aboutus' component={AboutUs}/>
              <Route exact path='/diagnosislist' component={DiagnosisList}/>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
