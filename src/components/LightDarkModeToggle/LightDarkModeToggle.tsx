// LightDarkModeToggle.tsx
import React from 'react';

export interface LightDarkModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling
   */
  className?: string;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'md',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '4px 8px' : size === 'lg' ? '12px 24px' : '8px 16px',
    backgroundColor: variant === 'flat' ? 'transparent' : variant === 'stroked' ? 'transparent' : 'var(--color-dialog-sections)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-inter-medium-*)',
    fontSize: '14px',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.3s',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
      disabled={disabled}
      {...props}
    >
      Toggle Mode
    </button>
  );
});

export { LightDarkModeToggle };
export default LightDarkModeToggle;
