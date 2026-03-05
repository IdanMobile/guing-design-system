// TextField.tsx
import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field, which affects its background color.
   */
  variant?: 'default' | 'light' | 'dark';
  /**
   * The size of the text field.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the text field will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the text field.
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const variantClasses = {
    default: 'bg-var(--color-dialog-sections-master-table)',
    light: 'bg-var(--color-white)',
    dark: 'bg-var(--color-section)',
  };

  const sizeClasses = {
    small: 'text-sm p-2',
    medium: 'text-base p-3',
    large: 'text-lg p-4',
  };

  return (
    <input
      ref={ref}
      className={classNames(
        'border border-var(--color-divider-stroke) rounded',
        variantClasses[variant],
        sizeClasses[size],
        { 'cursor-not-allowed opacity-50': disabled },
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
});

export default TextField;
export { TextField };