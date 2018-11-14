import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';
import faker from 'faker';
import Landing from '../component/landing/landing';

configureEnzyme({ adapter: new Adapter() })

describe('#Landing', () => {
  test('The AuthRedirect component sets destination route to routes.DASHBOARD', () => {
    const mountedLanding = mount(<Landing/>);
    const mockUser = {
      username: faker.internet.username(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    };
    console.log(Landing.props.history);
    mountedLanding.simulate(this.handleLogin(mockUser));
  });
});
