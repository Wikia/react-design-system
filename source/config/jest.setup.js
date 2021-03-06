import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line import/no-extraneous-dependencies
import Enzyme from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

Enzyme.configure({ adapter: new Adapter() });

global.mockComponent = name => props => <mocked-component name={name} {...props} />;
