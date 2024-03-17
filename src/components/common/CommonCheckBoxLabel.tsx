import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import CommonCheckbox from '@/components/common/parts/CommonCheckBox';

type CommonCheckboxLabelProps = {
  label: string;
};

type CheckBoxProps<T extends FieldValues> = UseControllerProps<T> & CommonCheckboxLabelProps;

const CommonCheckboxLabel = <T extends FieldValues>(props: CheckBoxProps<T>): JSX.Element => {
  const { name, control, label } = props;

  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <label
      onClick={() => onChange(!value)}
      className="flex cursor-pointer items-center gap-x-1 duration-200 hover:opacity-70"
    >
      <span role="input">
        <CommonCheckbox checked={value} size={20} />
      </span>
      <span className="text-left text-btn">{label}</span>
    </label>
  );
};

export default CommonCheckboxLabel;
