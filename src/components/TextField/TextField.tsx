// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'outlined',
  disabled = false,
  className,
  ...props
}, ref) => {
  const sizeStyles = {
    small: { fontSize: '12px', padding: '4px 8px' },
    medium: { fontSize: '14px', padding: '6px 12px' },
    large: { fontSize: '16px', padding: '8px 16px' },
  };

  const variantStyles = {
    outlined: { border: `1px solid var(--color-divider-stroke)`, backgroundColor: 'transparent' },
    filled: { border: 'none', backgroundColor: 'var(--color-buttons-input)' },
    standard: { borderBottom: `1px solid var(--color-divider-stroke)`, backgroundColor: 'transparent' },
  };

  const disabledStyles = disabled ? {
    backgroundColor: 'var(--color-disabled)',
    color: 'var(--color-disabled-text)',
    cursor: 'not-allowed',
  } : {};

  const styles = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...disabledStyles,
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  return (
    <input
      ref={ref}
      className={className}
      disabled={disabled}
      style={styles}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
