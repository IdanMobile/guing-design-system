// MultiFunctionButton.tsx
import React from 'react';

interface MultiFunctionButtonProps {
  /**
   * The size of the button
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * 'default' | 'flat' | 'stroked' | 'basic'
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * The state of the button
   * 'normal' | 'pressed' | 'disabled'
   */
  state?: 'normal' | 'pressed' | 'disabled';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional class names for custom styling
   */
  className?: string;
}

const MultiFunctionButton = React.forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  state = 'normal',
  onClick,
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-secondery-text)',
      borderRadius: '4px',
      padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      opacity: state === 'disabled' ? 0.5 : 1,
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      backgroundColor: variant === 'flat' ? 'transparent' : 'var(--color-primary-buttons)',
      color: variant === 'flat' ? 'var(--color-text)' : 'var(--color-white)',
      transition: 'background-color 0.3s, color 0.3s',
    },
    pressed: {
      backgroundColor: 'var(--color-hover)',
    },
  };

  return (
    <button
      ref={ref}
      onClick={state !== 'disabled' ? onClick : undefined}
      className={className}
      style={{
        ...styles.base,
        ...(state === 'pressed' && styles.pressed),
      }}
      {...props}
    >
      MultiFunction Button
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };