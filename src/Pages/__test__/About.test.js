import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../../App';
import About from '../About';

describe('About.js Components', () => {
  test('About 컴포넌트의 자식 컴포넌트로 Footer 컴포넌트가 있어야 합니다.', () => {
    const aboutInstance = TestRenderer.create(<About />).root;

    expect(aboutInstance.findByType(Footer).type).toBe(Footer);
  });
});
