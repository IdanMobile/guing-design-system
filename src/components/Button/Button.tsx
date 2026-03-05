// Button.tsx
import React from 'react';
import classNames from 'classnames';

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
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  className,
  ...props
}, ref) => {
  const buttonClass = classNames(
    'button',
    `button--${variant}`,
    `button--${size}`,
    className
  );

  return (
    <button
      ref={ref}
      className={buttonClass}
      {...props}
    />
  );
});

export default Button;
export { Button };