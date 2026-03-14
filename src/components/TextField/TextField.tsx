import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field, determining its background color.
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
   * Additional class name for custom styling.
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const backgroundColors = {
    default: 'var(--color-dialog-sections)',
    light: 'var(--color-white-white)',
    dark: 'var(--color-section)',
  };

  const sizes = {
    small: '8px 12px',
    medium: '10px 14px',
    large: '12px 16px',
  };

  const styles = {
    backgroundColor: backgroundColors[variant],
    padding: sizes[size],
    border: '1px solid var(--color-divider-stroke)',
    borderRadius: '4px',
    fontSize: 'var(--font-body-*)',
    color: 'var(--color-body-text)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  return (
    <input
      ref={ref}
      type="text"
      disabled={disabled}
      className={className}
      style={styles}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
