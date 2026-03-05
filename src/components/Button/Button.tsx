// Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be in a disabled state.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const buttonClass = classNames(
    'button',
    `button--${variant}`,
    `button--${size}`,
    { 'button--disabled': disabled },
    className
  );

  return (
    <button
      ref={ref}
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;

// Button.module.css
.button {
  font-family: var(--font-inter-medium-*);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button--default {
  background-color: var(--color-primary-buttons);
  color: var(--color-white);
}

.button--flat {
  background-color: transparent;
  color: var(--color-primary-buttons);
}

.button--stroked {
  background-color: transparent;
  color: var(--color-primary-buttons);
  border: 1px solid var(--color-primary-buttons);
}

.button--basic {
  background-color: var(--color-buttons-input);
  color: var(--color-buttons-text-field);
}

.button--small {
  padding: 8px 16px;
  font-size: var(--font-inter-12-regular);
}

.button--medium {
  padding: 12px 24px;
  font-size: var(--font-inter-14-med-button);
}

.button--large {
  padding: 16px 32px;
  font-size: var(--font-large-header);
}

.button--disabled {
  background-color: var(--color-disabled);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}
