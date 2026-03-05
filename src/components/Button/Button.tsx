// Button.tsx
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'pressed' | 'disabled' | 'icon';
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'button',
        `button--${variant}`,
        `button--${size}`,
        { 'button--disabled': disabled },
        className
      )}
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
  padding: 8px 16px;
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
  border: 1px solid var(--color-primary-buttons);
  background-color: transparent;
  color: var(--color-primary-buttons);
}

.button--basic {
  background-color: var(--color-buttons-input);
  color: var(--color-text);
}

.button--toggle {
  background-color: var(--color-section);
  color: var(--color-white);
}

.button--multi-function {
  background-color: var(--color-green-success);
  color: var(--color-white);
}

.button--pressed {
  background-color: var(--color-hover);
  color: var(--color-white);
}

.button--disabled {
  background-color: var(--color-disabled);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}

.button--icon {
  background-color: transparent;
  color: var(--color-icons-1);
}

.button--small {
  font-size: var(--font-inter-12-regular-*);
  padding: 4px 8px;
}

.button--medium {
  font-size: var(--font-inter-14-med-button-*);
  padding: 8px 16px;
}

.button--large {
  font-size: var(--font-large-header-*);
  padding: 12px 24px;
}
