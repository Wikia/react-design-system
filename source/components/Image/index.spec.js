import React from 'react';
import renderer from 'react-test-renderer';

import Image from './index';

/* eslint-disable no-alert */

test('Image renders correctly', () => {
    const component = renderer.create(
        <Image src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205" alt="Fandom" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

//
// test('FloatingButtonGroup renders correctly with a child (horizontal)', () => {
//     const component = renderer.create(
//         <FloatingButtonGroup>
//             <FloatingButton>A</FloatingButton>
//         </FloatingButtonGroup>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();
// });
//
// test('FloatingButtonGroup renders correctly with a child (vertical)', () => {
//     const component = renderer.create(
//         <FloatingButtonGroup vertical>
//             <FloatingButton>A</FloatingButton>
//         </FloatingButtonGroup>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();
// });
