// TextField.tsx
import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field.
   * Can be 'default', 'flat', or 'stroked'.
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * The size of the text field.
   * Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the text field will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling.
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
  const baseClasses = 'text-field';
  const variantClasses = {
    default: 'bg-var(--color-dialog-sections-master-table)',
    flat: 'bg-var(--color-buttons-input)',
    stroked: 'border border-var(--color-divider-stroke)',
  };
  const sizeClasses = {
    small: 'p-2 text-var(--font-body-*)',
    medium: 'p-3 text-var(--font-text-body-*)',
    large: 'p-4 text-var(--font-large-header-*)',
  };

  return (
    <input
      ref={ref}
      className={classNames(baseClasses, variantClasses[variant], sizeClasses[size], className, {
        'cursor-not-allowed opacity-50': disabled,
      })}
      disabled={disabled}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
