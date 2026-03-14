// IconButton.tsx
import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to be displayed inside the button.
   */
  icon: React.ReactNode;
  /**
   * The size of the button.
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   * 'default' | 'primary' | 'secondary'
   */
  variant?: 'default' | 'primary' | 'secondary';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'medium', variant = 'default', disabled = false, className, ...props }, ref) => {
    const sizeStyles = {
      small: { width: '32px', height: '32px' },
      medium: { width: '40px', height: '40px' },
      large: { width: '48px', height: '48px' },
    };

    const variantStyles = {
      default: { backgroundColor: 'var(--color-buttons-input)', color: 'var(--color-body-text)' },
      primary: { backgroundColor: 'var(--color-primary-buttons)', color: 'var(--color-white-white)' },
      secondary: { backgroundColor: 'var(--color-buttons-secondary-button)', color: 'var(--color-white-white)' },
    };

    const styles = {
      ...sizeStyles[size],
      ...variantStyles[variant],
      border: 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color 0.3s',
    };

    return (
      <button
        ref={ref}
        style={styles}
        className={className}
        disabled={disabled}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

export { IconButton };
export default IconButton;
