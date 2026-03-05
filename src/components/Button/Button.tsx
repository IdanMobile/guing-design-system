// Button.tsx
import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be in a pressed state.
   */
  pressed?: boolean;
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', pressed = false, disabled = false, className, children, ...props }, ref) => {
    const buttonClass = classNames(
      'button',
      `button--${variant}`,
      {
        'button--pressed': pressed,
        'button--disabled': disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-primary-buttons)',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-large-header)',
        }}
      >
        {children}
      </button>
    );
  }
);

export { Button };
export default Button;
