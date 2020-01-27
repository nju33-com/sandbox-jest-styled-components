import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

const Button = styled.button`
  color: orange;
`;

test('the color of the component is orange', () => {
  const renderResult = render(<Button />);

  expect(renderResult.queryByRole('button')).toHaveStyleRule('color', 'orange');
});
