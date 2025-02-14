import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { DropZone, DropZoneAcceptedFile, DropZoneRejectedFile } from '@/components';

describe('DropZone', () => {
  test('title', () => {
    render(<DropZone dropzoneTitle="Title" />);
    expect(screen.getByText('Title')).toBeDefined();
  });
  test('button', () => {
    render(<DropZone buttonText="text" />);
    expect(screen.getByText('text')).toBeDefined();
  });
  test('accepted file children', () => {
    render(<DropZoneAcceptedFile onCancel={() => {}}>text</DropZoneAcceptedFile>);
    expect(screen.getByText('text')).toBeDefined();
  });
  test('rejected file children', () => {
    render(
      <DropZoneRejectedFile errorMsg="error" errorCode={'400'}>
        text
      </DropZoneRejectedFile>
    );
    expect(screen.getByText('text')).toBeDefined();
  });
});
