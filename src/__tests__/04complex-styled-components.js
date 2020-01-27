import React from 'react';
import styled, { css } from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

const Span = styled.span`
`

const Button = styled(({ className }) => {
  return <button className={className}><Span /></button>;
})`
  ${Span} {
    color: orange;
  }
`;

test('the color of the component is orange', () => {
  const renderResult = render(<Button />);
  const button = renderResult.queryByRole('button')

  expect(button).toHaveStyleRule(
    'color',
    expect.any(String),
    {
      modifier: css`${Span}`,
    },
  );

  expect(button).toHaveStyleRule(
    'color',
    'orange',
    {
      modifier: css`${Span}`,
    },
  );
});
