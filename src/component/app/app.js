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
              <header>
                <span className='logoHeader'>Doc</span>
                <span className='logoHeaderSecondary'>Talk</span>
              </header>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Diagnosis</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
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
              <Route exact path='/diagnosislist' component={DiagnosisList}/>
            </div>
            <footer>
              <p>copyright &copy; 2018 <span className='teamName'>!teamtom</span></p>
            </footer>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
