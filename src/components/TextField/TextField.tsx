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
  variant?: 'default' | 'flat' | 'stroked';
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
  const sizeStyles: Record<TextFieldProps['size'], React.CSSProperties> = {
    sm: { fontSize: '12px', padding: '4px 8px' },
    md: { fontSize: '14px', padding: '6px 12px' },
    lg: { fontSize: '16px', padding: '8px 16px' },
  };

  const variantStyles: Record<TextFieldProps['variant'], React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-dialog-sections)' },
    flat: { backgroundColor: 'var(--color-buttons-input)' },
    stroked: { backgroundColor: 'var(--color-section)', border: '1px solid var(--color-divider-stroke)' },
  };

  const styles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    color: 'var(--color-body-text)',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <input
      ref={ref}
      className={className}
      style={styles}
      disabled={disabled}
      {...props}
    />
  );
});

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
