// TextField.tsx
import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * The state of the text field
   */
  state?: 'default' | 'error' | 'disabled';
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
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-regular)',
      border: '1px solid',
      borderRadius: '4px',
      padding: '8px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    size: {
      small: {
        fontSize: '12px',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '14px',
        padding: '6px 12px',
      },
      large: {
        fontSize: '16px',
        padding: '8px 16px',
      },
    },
    variant: {
      filled: {
        backgroundColor: 'var(--color-buttons-input)',
        borderColor: 'transparent',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: 'var(--color-divider-stroke)',
      },
      standard: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderBottom: '1px solid var(--color-divider-stroke)',
      },
    },
    state: {
      default: {
        borderColor: 'var(--color-divider-stroke)',
        color: 'var(--color-text)',
      },
      error: {
        borderColor: 'var(--color-error)',
        color: 'var(--color-error)',
      },
      disabled: {
        borderColor: 'var(--color-disabled)',
        color: 'var(--color-disabled-text)',
        backgroundColor: 'var(--color-buttons-input)',
        cursor: 'not-allowed',
      },
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.size[size],
    ...styles.variant[variant],
    ...styles.state[state],
  };

  return (
    <input
      ref={ref}
      style={combinedStyles}
      className={className}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export default TextField;
export { TextField };