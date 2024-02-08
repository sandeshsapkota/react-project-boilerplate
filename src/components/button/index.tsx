import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  loading?: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'secondary';
  targetBlank?: boolean;
}

const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  /**
   * COMPONENT PROPS
   */
  const {
    children,
    onClick,
    href,
    loading,
    className,
    type = 'primary',
    buttonType,
    targetBlank,
  } = props || {};

  const classnames = classNames(
    'flex select-none items-center gap-2.5 rounded-full py-2  px-4 text-center align-middle ' +
      'font-sans text-xs font-bold capitalize transition-all ' +
      ' disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
    {
      'text-white bg-black hover:bg-black/80': type === 'primary',
      'text-gray-500 bg-gray-100 hover:bg-gray-200 ': type === 'secondary',
    },
    className,
  );

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link
        to={href}
        className={classnames}
        {...(targetBlank && { target: '_blank' })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleOnClick}
      className={classnames}
      type={buttonType || 'button'}
    >
      {children}
      {loading ? <div className="loader" /> : ''}
    </button>
  );
};

export default PrimaryButton;
