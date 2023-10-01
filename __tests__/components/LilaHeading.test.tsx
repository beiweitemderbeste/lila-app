import React from 'react';
import { render } from '@testing-library/react';

import LilaHeading from '../../app/components/LilaHeading';

describe('LilaHeading', () => {
  it('renders without errors', () => {
    render(<LilaHeading />);
  });

  it('renders the heading with the text "lila"', () => {
    const { getByText } = render(<LilaHeading />);
    const heading = getByText('lila');
    expect(heading).toBeInTheDocument();
  });
});
