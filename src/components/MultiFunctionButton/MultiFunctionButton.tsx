// MultiFunctionButton.tsx
import React, { forwardRef } from 'react';
import { CSSProperties } from 'react';

interface MultiFunctionButtonProps {
  /**
   * The content of the button, typically a string or an icon.
   */
  children: React.ReactNode;
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
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * Additional class names for custom styling.
   */
  className?: string;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  children,
  size = 'medium',
  variant = 'default',
  disabled = false,
  onClick,
  className,
}, ref) => {
  const getSizeStyles = (): CSSProperties => {
    switch (size) {
      case 'small':
        return { fontSize: '12px', padding: '6px 12px' };
      case 'large':
        return { fontSize: '18px', padding: '12px 24px' };
      default:
        return { fontSize: '14px', padding: '8px 16px' };
    }
  };

  const getVariantStyles = (): CSSProperties => {
    switch (variant) {
      case 'flat':
        return { backgroundColor: 'transparent', border: 'none' };
      case 'stroked':
        return { backgroundColor: 'transparent', border: `1px solid var(--color-divider-stroke)` };
      default:
        return { backgroundColor: 'var(--color-primary-buttons)', border: 'none' };
    }
  };

  const styles: CSSProperties = {
    ...getSizeStyles(),
    ...getVariantStyles(),
    color: disabled ? 'var(--color-disabled-text)' : 'var(--color-white)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      ref={ref}
      style={styles}
      onClick={disabled ? undefined : onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export { MultiFunctionButton };
export default MultiFunctionButton;
