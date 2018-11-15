import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';
import AuthForm from '../component/auth-form/auth-form';

configureEnzyme({ adapter: new Adapter() });

describe('#AuthForm', () => {
  test('The state should change along with the values within the form', () => {
    const testEvent = {
      target: {
        name: 'username',
        value: 'kris',
      },
    };
    const mountedForm = mount(<AuthForm/>);
    mountedForm.find('#authFormUsername').simulate('change', testEvent);
    expect(mountedForm.state().username).toEqual('kris');
  });
});
