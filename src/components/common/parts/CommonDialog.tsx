import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  className?: string; // tailwind の max-x-* クラスなどを設定する
  children: ReactNode;
  canCloseOtherClick?: boolean;
};

const CommonDialog = (props: Props): JSX.Element => {
  const {
    isOpen,
    handleClose,
    className = 'max-w-xl',
    children,
    canCloseOtherClick = true,
  } = props;
  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex size-full items-center justify-center bg-black/30 transition-all duration-200 ${
        isOpen ? 'visible block opacity-100' : 'invisible opacity-0'
      }`}
      onClick={canCloseOtherClick ? handleClose : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative m-4 max-h-[calc(100vh-2rem)] w-full overflow-y-auto rounded-lg bg-white p-8 md:m-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CommonDialog;
