// TextField.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field, affecting its background color.
   * - 'default': Uses the default background color.
   * - 'light': Uses a lighter background color.
   * - 'dark': Uses a darker background color.
   */
  variant?: 'default' | 'light' | 'dark';
  /**
   * The size of the text field.
   * - 'small': A smaller text field.
   * - 'medium': A medium-sized text field.
   * - 'large': A larger text field.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  className,
  style,
  ...props
}, ref) => {
  const backgroundColors = {
    default: 'var(--color-dialog-sections-master-table)',
    light: 'var(--color-white)',
    dark: 'var(--color-section)',
  };

  const sizes = {
    small: { fontSize: '12px', padding: '8px' },
    medium: { fontSize: '14px', padding: '10px' },
    large: { fontSize: '16px', padding: '12px' },
  };

  const styles = {
    input: {
      backgroundColor: backgroundColors[variant],
      border: '1px solid var(--color-divider-stroke)',
      borderRadius: '4px',
      outline: 'none',
      width: '100%',
      ...sizes[size],
      ...style,
    },
  };

  return (
    <input
      ref={ref}
      className={className}
      style={styles.input}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
