import * as RS from 'react-select';
import Select from 'react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { CloseSquare } from 'iconsax-react';
import { cn } from '@/utils';

const controlStyles = {
  base: 'border rounded-lg bg-white hover:cursor-pointer',
  focus: 'border-navbar ring-1 ring-navbar',
  nonFocus: 'border-navbar hover:border-navbar/40'
};
const placeholderStyles = 'text-gray-500 pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-nav-text-active/30 rounded-lg text-navbar items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles = 'rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles = 'rounded-md';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-navbar bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
  selected: 'after:content-["✔"] after:ml-2 after:text-green-500 text-gray-500'
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

const DropdownIndicator = (props: RS.DropdownIndicatorProps) => {
  return (
    <RS.components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </RS.components.DropdownIndicator>
  );
};

const ClearIndicator = (props: RS.ClearIndicatorProps) => {
  return (
    <RS.components.ClearIndicator {...props}>
      <CloseSquare variant="Bold" color="#ed3a3a" />
    </RS.components.ClearIndicator>
  );
};

const MultiValueRemove = (props: RS.MultiValueRemoveProps) => {
  return (
    <RS.components.MultiValueRemove {...props}>
      <CloseSquare variant="Bold" color="#ed3a3a" />
    </RS.components.MultiValueRemove>
  );
};

const MultiSelect = ({ ...rest }: RS.Props) => {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      unstyled
      styles={{
        input: base => ({
          ...base,
          'input:focus': {
            boxShadow: 'none'
          }
        }),

        //Todo :
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: base => ({
          ...base,
          whiteSpace: 'normal',
          overflow: 'visible'
        }),
        control: base => ({
          ...base,
          transition: 'none'
        })
      }}
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles
      }}
      {...rest}
    />
  );
};

export { MultiSelect };
