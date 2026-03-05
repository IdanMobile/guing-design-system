// MultiFunctionButton.tsx
import React from 'react';

interface MultiFunctionButtonProps {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional class names for styling
   */
  className?: string;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  children,
  onClick,
  className,
}, ref) => {
  const styles = {
    base: {
      padding: '8px 16px',
      fontSize: 'var(--font-secondery-text)',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-primary-buttons)',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-white)',
    },
    size: {
      small: {
        fontSize: 'var(--font-body)',
        padding: '4px 8px',
      },
      medium: {
        fontSize: 'var(--font-secondery-text)',
        padding: '8px 16px',
      },
      large: {
        fontSize: 'var(--font-large-header)',
        padding: '12px 24px',
      },
    },
    variant: {
      default: {},
      flat: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
      },
      stroked: {
        border: `1px solid var(--color-primary-buttons)`,
        backgroundColor: 'transparent',
        color: 'var(--color-primary-buttons)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons-input)',
        color: 'var(--color-text)',
      },
    },
  };

  return (
    <button
      ref={ref}
      style={{
        ...styles.base,
        ...styles.size[size],
        ...styles.variant[variant],
      }}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };