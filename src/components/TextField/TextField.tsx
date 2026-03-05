// TextField.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';
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
   * The state of the text field
   */
  state?: 'normal' | 'disabled' | 'error';
  /**
   * Additional class names to apply to the text field
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  state = 'normal',
  className,
  ...props
}, ref) => {
  const baseClasses = 'px-4 py-2 border rounded';
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }[size];

  const variantClasses = {
    default: 'bg-white border-gray-300',
    flat: 'bg-transparent border-none',
    stroked: 'bg-white border border-gray-300',
  }[variant];

  const stateClasses = {
    normal: 'text-black',
    disabled: 'text-gray-500 bg-gray-200 cursor-not-allowed',
    error: 'text-red-500 border-red-500',
  }[state];

  return (
    <input
      ref={ref}
      className={classNames(baseClasses, sizeClasses, variantClasses, stateClasses, className)}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
