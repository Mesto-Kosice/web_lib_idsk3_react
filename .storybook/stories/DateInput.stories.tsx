import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DateInput } from '../../src/components';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { sk } from 'date-fns/locale/sk';
import '../../src/styles/idsk3_theme.css';

registerLocale('sk', sk);
setDefaultLocale('sk');

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DateInput',
  component: DateInput
} as Meta<typeof DateInput>;

export const Default = {
  args: {
    id: 'date-input',
    placeholder: 'Placeholder',
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    datePickerProps: {
      nextMonthAriaLabel: 'Nasledujúci mesiac',
      previousMonthAriaLabel: 'Predchádzajúci mesiac'
    },
    datePickerTooltip: 'Vybrať dátum',
    onValueUpdate: (value: string) => console.log('date update', value),
    onRevalidation: (hasError: boolean) => console.log(`Has internal error: ${hasError}`)
  }
};

export const WithLabel = {
  args: {
    id: 'date-input',
    label: 'This is label',
    inputLabelsSrOnly: true,
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    datePickerProps: {
      nextMonthAriaLabel: 'Nasledujúci mesiac',
      previousMonthAriaLabel: 'Predchádzajúci mesiac'
    },
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const WithCaption = {
  args: {
    id: 'date-input',
    label: 'This is label',
    caption: 'This is caption',
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const Optional = {
  args: {
    id: 'date-input',
    label: 'This is label',
    optionalText: '(Optional)',
    caption: 'This is caption',
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const WithSubtitle = {
  args: {
    id: 'date-input',
    label: 'This is label',
    caption: 'This is caption',
    subtitle: 'This is very long subtitle',
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const Disabled = {
  args: {
    id: 'date-input',
    disabled: true,
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const WithoutYear = {
  args: {
    id: 'date-input',
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    hideYear: true,
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};

export const ErrorFormat = {
  args: {
    id: 'date-input',
    label: 'This is label',
    error: true,
    errorMsg: 'Bad format of date',
    dayLabel: 'Deň',
    monthLabel: 'Mesiac',
    yearLabel: 'Rok',
    dayPlaceholder: 'DD',
    monthPlaceholder: 'MM',
    yearPlaceholder: 'RRRR',
    datePickerLabel: 'Otvoriť kalendár',
    onValueUpdate: (value: string) => console.log('date update', value)
  }
};
