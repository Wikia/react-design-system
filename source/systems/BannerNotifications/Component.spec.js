import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mountWithStore } from 'enzyme-redux';

import StoreModel from './StoreModel';
import BannerNotifications from './Component';

jest.mock('../../components/BannerNotifications', () => mockComponent('BannerNotifications'));

test('BannerNotifications renders component', () => {
    const component = mountWithStore(<BannerNotifications />, createMockStore({
        BannerNotificationsStore: StoreModel.empty(),
    }));
    expect(component.render()).toMatchSnapshot();
});