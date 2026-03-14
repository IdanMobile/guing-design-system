// TextField.tsx
import React from 'react';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the text field.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the text field.
   */
  variant?: 'default' | 'filled' | 'outlined';
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
  size = 'md',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '4px 8px' : size === 'lg' ? '12px 16px' : '8px 12px',
    backgroundColor: variant === 'filled' ? 'var(--color-dialog-sections)' : 'var(--color-white-white)',
    border: variant === 'outlined' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    fontSize: '14px',
    color: 'var(--color-body-text)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <input
      ref={ref}
      style={styles}
      className={className}
      disabled={disabled}
      {...props}
    />
  );
});

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
