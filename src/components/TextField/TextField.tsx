// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field, affecting its background color.
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

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'light':
        return 'var(--color-dialog-sections-master-table)';
      case 'dark':
        return 'var(--color-section)';
      default:
        return 'var(--color-white)';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: '12px', padding: '8px' };
      case 'large':
        return { fontSize: '18px', padding: '16px' };
      default:
        return { fontSize: '14px', padding: '12px' };
    }
  };

  const styles = {
    backgroundColor: getBackgroundColor(),
    color: 'var(--color-text)',
    border: `1px solid ${disabled ? 'var(--color-disabled)' : 'var(--color-divider)'}`,
    borderRadius: '4px',
    outline: 'none',
    width: '100%',
    ...getSizeStyles(),
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

export default TextField;
export { TextField };