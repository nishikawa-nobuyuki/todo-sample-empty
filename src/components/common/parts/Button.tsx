import { IconType } from 'react-icons';
import { ImSpinner7 } from 'react-icons/im';

/**
 * Props:
 *   variant : ボタンのスタイルのタイプ
 *   label   : ボタンのテキスト
 *   Icon    : React Icon のアイコン [optional]
 *   loading : ローディング状態
 */

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'error' | 'error-secondary' | 'text';
  label: string;
  Icon?: IconType;
  loading?: boolean;
};

// ボタン本体
const Button = (props: ButtonProps): JSX.Element => {
  const { variant, label, Icon, loading, className = '', ...buttonHTMLAttributes } = props;

  // variant でボタンの色を分岐
  const btnColor =
    variant === 'primary'
      ? 'border-primary bg-primary text-white disabled:border-theme-medium disabled:bg-theme-medium'
      : variant === 'secondary'
        ? 'border-primary bg-white text-primary disabled:border-theme-medium disabled:text-theme-medium'
        : variant === 'error'
          ? 'border-error bg-error text-white disabled:border-theme-medium disabled:bg-theme-medium'
          : variant === 'error-secondary'
            ? 'border-error bg-white text-error disabled:border-theme-medium disabled:text-theme-medium'
            : variant === 'text'
              ? `border-transparent bg-transparent text-primary hover:border-theme-light hover:bg-theme-light disabled:border-transparent disabled:bg-transparent disabled:text-theme-medium ${
                  loading ? '!bg-theme-light' : ''
                }`
              : '';

  // Component
  return (
    <>
      <button
        {...buttonHTMLAttributes}
        className={`relative flex items-center justify-center gap-1 rounded-md border px-4 py-2 text-center text-btn transition-all duration-200 ease-linear hover:opacity-70 disabled:opacity-100 ${
          loading ? 'opacity-70 [&>span]:!text-transparent' : ''
        } ${btnColor} ${className}`}
      >
        {Icon && (
          <span>
            <Icon size={18} />
          </span>
        )}
        <span>{label}</span>

        {loading && <ButtonLoading />}
      </button>

      {loading && <LoadingLayer />}
    </>
  );
};

export default Button;

// ボタンのローディングアイコン
const ButtonLoading = () => {
  return (
    <div className="absolute text-center align-middle">
      <ImSpinner7 size="18px" className="animate-spin" />
    </div>
  );
};

// ローディング中に画面をクリックできないようにする
const LoadingLayer = () => {
  return <div className="fixed left-0 top-0 z-[999] h-screen w-screen bg-transparent" />;
};
