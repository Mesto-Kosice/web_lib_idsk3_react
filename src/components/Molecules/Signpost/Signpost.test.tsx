import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Signpost from './Signpost';

describe('Signpost', () => {
  test('layout', () => {
    render(<Signpost heading="Test Heading" layout="vertical" />);
    expect(screen.getByTestId('anchor-card')).toHaveClass('idsk-anchor-card--vertical');
  });

  test('external icon', () => {
    render(<Signpost heading="Test Heading" layout="vertical" target="_blank" />);
    expect(screen.getByTestId('external-icon')).toBeInTheDocument();
  });

  test('disabled external icon', () => {
    render(<Signpost heading="Test Heading" layout="vertical" target="_blank" withoutTargetIcon />);
    expect(screen.queryByTestId('external-icon')).toBeNull();
  });
});
