// MultiFunctionButton.tsx
import React from 'react';

interface MultiFunctionButtonProps {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be in a disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the button will toggle between light and dark mode
   * @default false
   */
  toggleMode?: boolean;
  /**
   * Optional icon to display within the button
   */
  icon?: React.ReactNode;
  /**
   * Additional className for styling overrides
   */
  className?: string;
  /**
   * Click event handler
   */
  onClick?: () => void;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  toggleMode = false,
  icon,
  className,
  onClick,
}, ref) => {
  const styles = {
    button: {
      padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 18px',
      backgroundColor: variant === 'flat' ? 'transparent' : variant === 'stroked' ? 'transparent' : 'var(--color-primary-buttons)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-white)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-large-header-*)',
      fontSize: 'var(--font-large-header-*)',
      fontWeight: 600,
      opacity: disabled ? 0.6 : 1,
      transition: 'background-color 0.3s',
      ...(toggleMode && { backgroundColor: 'var(--color-section)' }),
    },
  };

  return (
    <button
      ref={ref}
      style={styles.button}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <span>MultiFunction Button</span>
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };