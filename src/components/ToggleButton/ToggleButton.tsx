// ToggleButton.tsx
import React from 'react';
import classNames from 'classnames';

interface ToggleButtonProps {
  /**
   * The current state of the toggle button.
   */
  isActive: boolean;
  /**
   * Callback function called when the button is clicked.
   */
  onClick: () => void;
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(({
  isActive,
  onClick,
  size = 'medium',
  variant = 'default',
  className,
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classNames('toggle-button', className, {
        'toggle-button--active': isActive,
        'toggle-button--small': size === 'small',
        'toggle-button--medium': size === 'medium',
        'toggle-button--large': size === 'large',
        'toggle-button--default': variant === 'default',
        'toggle-button--flat': variant === 'flat',
        'toggle-button--stroked': variant === 'stroked',
      })}
      style={{
        backgroundColor: isActive ? 'var(--color-selected)' : 'var(--color-section)',
        color: isActive ? 'var(--color-icons-1)' : 'var(--color-text)',
        fontFamily: 'var(--font-large-header-*)',
      }}
    >
      {isActive ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
});

export default ToggleButton;
export { ToggleButton };