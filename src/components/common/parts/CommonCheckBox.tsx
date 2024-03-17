import { MouseEventHandler } from 'react';
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';

type CommonCheckboxProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  checked: boolean;
  size: number;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
};

const CommonCheckbox = (props: CommonCheckboxProps): JSX.Element => {
  const { onClick, checked, size, divProps } = props;
  return (
    <div {...divProps} onClick={onClick}>
      {checked ? (
        <RiCheckboxFill size={size} className="text-primary" />
      ) : (
        <RiCheckboxBlankLine size={size} className="text-theme-medium" />
      )}
    </div>
  );
};

export default CommonCheckbox;
