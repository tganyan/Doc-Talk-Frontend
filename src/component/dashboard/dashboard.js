import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
  render() {
    console.log('Dashboard');
    return (
            <section>
                <Link to='/'><h2>DocTalk</h2></Link>
                <p>Hello! You are logged in</p>
            </section>
    );
  }
}

export default Dashboard;
