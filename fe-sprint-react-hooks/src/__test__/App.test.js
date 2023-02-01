import { render } from '@testing-library/react';
import Home from '../Home';

test('renders learn react link', () => {
  const {container} = render(<Home/>);
  const AppElement = container.querySelector(".home");
  expect(AppElement).toBeTruthy();
});