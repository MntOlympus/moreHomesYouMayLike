/** Used in jest.config.js */
/** Enables enzyme  */
import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

