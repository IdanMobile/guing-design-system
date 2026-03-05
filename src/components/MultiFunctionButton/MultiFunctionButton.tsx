// MultiFunctionButton.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface MultiFunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
   * If true, the button will be in a pressed state.
   */
  pressed?: boolean;
  /**
   * Optional icon to display in the button.
   */
  icon?: React.ReactNode;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  pressed = false,
  icon,
  className,
  children,
  ...props
}, ref) => {
  const buttonClass = classNames(
    'multi-function-button',
    `multi-function-button--${variant}`,
    `multi-function-button--${size}`,
    {
      'multi-function-button--disabled': disabled,
      'multi-function-button--pressed': pressed,
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
      {icon && <span className="multi-function-button__icon">{icon}</span>}
      <span className="multi-function-button__label">{children}</span>
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };