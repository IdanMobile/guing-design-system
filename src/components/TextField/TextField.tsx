// TextField.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'default' | 'outlined' | 'filled';
  /**
   * Whether the text field is disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid',
      outline: 'none',
      fontFamily: 'var(--font-inter-regular)',
      fontSize: '14px',
      lineHeight: '20px',
      backgroundColor: variant === 'filled' ? 'var(--color-buttons-input)' : 'var(--color-white)',
      borderColor: variant === 'outlined' ? 'var(--color-divider-stroke)' : 'transparent',
      color: 'var(--color-text)',
      width: size === 'small' ? '150px' : size === 'large' ? '300px' : '200px',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.5 : 1,
    },
  };

  return (
    <input
      ref={ref}
      type="text"
      disabled={disabled}
      className={className}
      style={styles.base}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
