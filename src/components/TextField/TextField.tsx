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
   * The state of the text field
   */
  state?: 'normal' | 'disabled' | 'error';
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  state = 'normal',
  className,
  ...props
}, ref) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'outlined':
        return 'transparent';
      case 'filled':
        return 'var(--color-dialog-sections-master-table)';
      default:
        return 'var(--color-white)';
    }
  };

  const getBorderColor = () => {
    if (state === 'error') return 'var(--color-error)';
    return variant === 'outlined' ? 'var(--color-divider-stroke)' : 'transparent';
  };

  const getFontSize = () => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '18px';
      default:
        return '14px';
    }
  };

  const styles = {
    input: {
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      borderWidth: variant === 'outlined' ? '1px' : '0',
      borderStyle: 'solid',
      padding: '8px 12px',
      fontSize: getFontSize(),
      color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-text-field)',
      cursor: state === 'disabled' ? 'not-allowed' : 'text',
      width: '100%',
      boxSizing: 'border-box' as const,
      outline: 'none',
    },
  };

  return (
    <input
      ref={ref}
      style={styles.input}
      className={className}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
