import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FocusLock, { FocusLockProps } from './FocusLock';

const renderFocusLock = (props: FocusLockProps = {}) => {
  return render(
    <FocusLock {...props}>
      <button>First</button>
      <button>Second</button>
      <button>Third</button>
    </FocusLock>
  );
};

const renderFocusLockWithOneItem = (props: FocusLockProps = {}) => {
  return render(
    <div>
      <button>First</button>
      <FocusLock {...props}>
        <button>Second</button>
      </FocusLock>
      <button>Third</button>
    </div>
  );
};

describe('FocusLock component', () => {
  it('should render correctly with default props', () => {
    renderFocusLock();
    expect(screen.getByText('First')).toBeDefined();
    expect(screen.getByText('Second')).toBeDefined();
    expect(screen.getByText('Third')).toBeDefined();
  });

  // Doesn't work in jest, test through storybook
  // it('should lock focus within the focusable items when isLocked is true', async () => {
  //   const user = userEvent.setup();
  //   renderFocusLock({ isLocked: true });

  //   const firstButton = screen.getByText('First');
  //   const secondButton = screen.getByText('Second');
  //   const thirdButton = screen.getByText('Third');

  //   firstButton.focus();
  //   expect(document.activeElement).toBe(firstButton);

  //   await user.tab();
  //   await waitFor(() => expect(document.activeElement).toBe(secondButton));

  //   await user.tab();
  //   await waitFor(() => expect(document.activeElement).toBe(thirdButton));

  //   await user.tab();
  //   await waitFor(() => expect(document.activeElement).toBe(firstButton));
  // });

  it('should move focus back using shift + tab', async () => {
    renderFocusLock({ isLocked: true });

    const firstButton = screen.getByText('First');
    const secondButton = screen.getByText('Second');

    firstButton.focus();
    expect(document.activeElement).toBe(firstButton);

    await userEvent.tab();
    expect(document.activeElement).toBe(secondButton);

    await userEvent.tab({ shift: true });
    expect(document.activeElement).toBe(firstButton);
  });

  // Doesn't work in jest, test through storybook
  // it('should prevent focus cycling when only one focusable item is present and isLocked is true', async () => {
  //   renderFocusLockWithOneItem({ isLocked: true });

  //   const secondButton = screen.getByText('Second');

  //   secondButton.focus();
  //   expect(document.activeElement).toBe(secondButton);

  //   await userEvent.tab();
  //   expect(document.activeElement).toBe(secondButton);
  // });

  it('should not prevent focus cycling when disabled is true', async () => {
    renderFocusLockWithOneItem({ disabled: true, isLocked: true });

    const secondButton = screen.getByText('Second');
    const thirdButton = screen.getByText('Third');

    secondButton.focus();
    expect(document.activeElement).toBe(secondButton);

    await userEvent.tab();
    expect(document.activeElement).toBe(thirdButton);
  });

  it('should update focusable items when children are dynamically added or removed', async () => {
    const { rerender } = renderFocusLock({ isLocked: true });
    const firstButton = screen.getByText('First');
    const secondButton = screen.getByText('Second');

    // Initially focus the first button
    firstButton.focus();
    expect(document.activeElement).toBe(firstButton);

    // Dynamically add a third button
    rerender(
      <FocusLock isLocked={true}>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </FocusLock>
    );

    // Focus should still be on the first button
    expect(document.activeElement).toBe(firstButton);

    // Simulate Tab key press, focus should move to the second button
    await userEvent.tab();
    expect(document.activeElement).toBe(secondButton);

    // Remove the third button and re-render
    rerender(
      <FocusLock isLocked={true}>
        <button>First</button>
        <button>Second</button>
      </FocusLock>
    );

    // Focus should remain on the second button
    expect(document.activeElement).toBe(secondButton);
  });
});
