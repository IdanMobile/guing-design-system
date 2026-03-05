// Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi-function' | 'icon';
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  pressed = false,
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const buttonClass = classNames('button', className, {
    'button--default': variant === 'default',
    'button--flat': variant === 'flat',
    'button--stroked': variant === 'stroked',
    'button--basic': variant === 'basic',
    'button--toggle': variant === 'toggle',
    'button--multi-function': variant === 'multi-function',
    'button--icon': variant === 'icon',
    'button--small': size === 'small',
    'button--medium': size === 'medium',
    'button--large': size === 'large',
    'button--pressed': pressed,
    'button--disabled': disabled,
  });

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

export default Button;
export { Button };