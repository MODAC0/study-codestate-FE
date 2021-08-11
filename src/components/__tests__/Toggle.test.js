import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from '../BareMinimumRequirements/Toggle';

describe('Toggle 스위치 기능 테스트', () => {
  afterAll(() => {
    cleanup();
  });

  it("Toggle container를 클릭하면 'toggle--checked' class가 추가되어야 합니다.", () => {
    const { container } = render(<Toggle />);
    const toggleContainer = container.querySelector('.toggle-container');
    userEvent.click(toggleContainer);
    expect(toggleContainer.classList.contains('toggle--checked')).toBe(true);
  });

  it("Toggle switch를 클릭하면 'toggle--checked' class가 추가되어야 합니다.", () => {
    const { container } = render(<Toggle />);
    const toggleSwitch = container.querySelector('.toggle-circle');
    userEvent.click(toggleSwitch);
    expect(toggleSwitch.classList.contains('toggle--checked')).toBe(true);
  });
});
