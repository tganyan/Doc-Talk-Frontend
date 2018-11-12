import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
                    <div>
                        <Route path ='*' component={AuthRedirect}/>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/signup' component={Landing}/>
                        <Route exact path='/login' component={Landing}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </div>
    );
  }
}

export default App;
