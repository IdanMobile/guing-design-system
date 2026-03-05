// TextField.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   * 'small', 'medium', or 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   * 'outlined', 'filled', or 'standard'
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The state of the text field
   * 'default', 'hover', 'focused', or 'disabled'
   */
  state?: 'default' | 'hover' | 'focused' | 'disabled';
  /**
   * Additional class name for styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'outlined',
  state = 'default',
  className,
  style,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-regular-*)',
      color: 'var(--color-text)',
      backgroundColor: 'var(--color-white)',
      border: '1px solid var(--color-divider-stroke)',
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 16px' : '8px 12px',
      borderRadius: '4px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    outlined: {
      border: '1px solid var(--color-text-field)',
    },
    filled: {
      backgroundColor: 'var(--color-buttons-input)',
    },
    standard: {
      borderBottom: '1px solid var(--color-divider-stroke)',
    },
    hover: {
      borderColor: 'var(--color-hover)',
    },
    focused: {
      borderColor: 'var(--color-primary-buttons)',
    },
    disabled: {
      color: 'var(--color-disabled-text)',
      backgroundColor: 'var(--color-disabled)',
      cursor: 'not-allowed',
    },
  };

  return (
    <input
      ref={ref}
      className={className}
      style={{
        ...styles.base,
        ...(variant === 'outlined' && styles.outlined),
        ...(variant === 'filled' && styles.filled),
        ...(variant === 'standard' && styles.standard),
        ...(state === 'hover' && styles.hover),
        ...(state === 'focused' && styles.focused),
        ...(state === 'disabled' && styles.disabled),
        ...style,
      }}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export default TextField;
export { TextField };