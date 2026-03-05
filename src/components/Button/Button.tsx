// Button.tsx
import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  pressed = false,
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const buttonClass = classNames(
    'button',
    `button--${variant}`,
    `button--${size}`,
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
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;

// Button.css
.button {
  font-family: var(--font-inter-medium-*);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
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
  border: 2px solid var(--color-primary-buttons);
}

.button--basic {
  background-color: var(--color-buttons-input);
  color: var(--color-buttons-text-field);
}

.button--small {
  padding: 8px 16px;
  font-size: var(--font-inter-12-regular-*);
}

.button--medium {
  padding: 12px 24px;
  font-size: var(--font-inter-14-med-button-*);
}

.button--large {
  padding: 16px 32px;
  font-size: var(--font-large-header-*);
}

.button--pressed {
  background-color: var(--color-hover);
}

.button--disabled {
  background-color: var(--color-disabled);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}
