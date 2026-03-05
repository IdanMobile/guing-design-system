// IconButton.tsx
import React, { forwardRef } from 'react';
import { CSSProperties } from 'react';

interface IconButtonProps {
  /**
   * The icon to display inside the button.
   */
  icon: React.ReactNode;
  /**
   * The size of the button.
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   * 'default' | 'flat' | 'stroked'
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
  /**
   * Click event handler.
   */
  onClick?: () => void;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  onClick,
}, ref) => {
  const sizeStyles: Record<string, CSSProperties> = {
    small: { padding: '4px', fontSize: '12px' },
    medium: { padding: '8px', fontSize: '16px' },
    large: { padding: '12px', fontSize: '20px' },
  };

  const variantStyles: Record<string, CSSProperties> = {
    default: { backgroundColor: 'var(--color-primary-buttons)', color: 'var(--color-white)' },
    flat: { backgroundColor: 'transparent', color: 'var(--color-primary-buttons)' },
    stroked: { border: '1px solid var(--color-primary-buttons)', color: 'var(--color-primary-buttons)' },
  };

  const styles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      ref={ref}
      style={styles}
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
});

export default IconButton;
export { IconButton };