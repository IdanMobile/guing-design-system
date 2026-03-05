// Button.tsx
import React from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: ButtonVariant;
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
    'button--multi': variant === 'multi',
    'button--pressed': variant === 'pressed',
    'button--disabled': disabled || variant === 'disabled',
    'button--icon': variant === 'icon',
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

Button.displayName = 'Button';

export default Button;
export { Button };