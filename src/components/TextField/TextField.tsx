// TextField.tsx
import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the text field
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the text field
   */
  variant?: 'default' | 'filled' | 'outlined';
  /**
   * The state of the text field
   */
  state?: 'normal' | 'error' | 'disabled';
  /**
   * Additional class name for styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'md',
  variant = 'default',
  state = 'normal',
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: size === 'sm' ? '4px 8px' : size === 'lg' ? '12px 16px' : '8px 12px',
      borderRadius: '4px',
      border: variant === 'outlined' ? '1px solid var(--color-divider-stroke)' : 'none',
      backgroundColor: variant === 'filled' ? 'var(--color-buttons-input)' : 'var(--color-white-white)',
      color: 'var(--color-body-text)',
      fontSize: '14px',
      fontFamily: 'var(--font-inter-regular-*)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    error: {
      borderColor: 'var(--color-error)',
      color: 'var(--color-red-error-text-field)',
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    }
  };

  const combinedStyles = {
    ...styles.base,
    ...(state === 'error' && styles.error),
    ...(state === 'disabled' && styles.disabled),
  };

  return (
    <input
      ref={ref}
      className={className}
      style={combinedStyles}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
