import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

const Button = styled(({ className }) => {
  return <button className={className} />;
})`
  @media (max-width: 767px) {
    button {
      color: blue;
    }
  }

  @media (min-width: 768px) {
    button {
      color: orange;
    }
  }
`;

test('the color of the component is orange', () => {
  const renderResult = render(<Button />);
  const button = renderResult.queryByRole('button')

  expect(button).toHaveStyleRule(
    'color',
    'blue',
    {
      media: '(max-width: 767px)',
      modifier: 'button',
    },
  );

  expect(button).toHaveStyleRule(
    'color',
    'orange',
    {
      media: '(min-width: 768px)',
      modifier: 'button',
    },
  );
});
