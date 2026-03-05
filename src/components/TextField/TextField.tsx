// TextField.tsx
import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the text field
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ size = 'medium', variant = 'default', disabled = false, className, ...props }, ref) => {
    const baseClasses = 'border rounded-md focus:outline-none';
    const sizeClasses = {
      small: 'p-2 text-sm',
      medium: 'p-3 text-base',
      large: 'p-4 text-lg',
    };
    const variantClasses = {
      default: 'bg-white border-gray-300',
      flat: 'bg-gray-100 border-transparent',
      stroked: 'bg-white border-2 border-gray-300',
    };
    const disabledClasses = disabled ? 'bg-gray-200 cursor-not-allowed' : '';

    const classes = classNames(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabledClasses,
      className
    );

    return (
      <input
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      />
    );
  }
);

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
