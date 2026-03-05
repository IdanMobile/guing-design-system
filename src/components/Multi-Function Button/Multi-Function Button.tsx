// MultiFunctionButton.tsx
import React from 'react';
import classNames from 'classnames';

interface MultiFunctionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(
  ({ variant = 'default', size = 'medium', disabled = false, className, children, ...props }, ref) => {
    const buttonClass = classNames(
      'multi-function-button',
      `multi-function-button--${variant}`,
      `multi-function-button--${size}`,
      { 'multi-function-button--disabled': disabled },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: variant === 'default' ? 'var(--color-primary-buttons)' : 'transparent',
          color: 'var(--color-white)',
          border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
          padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
          fontSize: size === 'small' ? 'var(--font-inter-12-regular)' : size === 'large' ? 'var(--font-large-header)' : 'var(--font-inter-14-med-button)',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {children}
      </button>
    );
  }
);

export default MultiFunctionButton;
export { MultiFunctionButton };