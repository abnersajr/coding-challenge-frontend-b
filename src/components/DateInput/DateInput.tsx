import React from 'react'
import { useRouter } from 'next/router'
import { IntlText } from '../Intl/IntlText'
import { FormField, DateInput, DateInputProps } from 'grommet'
import { DateDomain, LanguageDomain } from '../../domain/language'

type Props = {
  value: string
  onChange: DateInputProps['onChange']
}
const Input = (props: Props) => {
  const { locale } = useRouter()
  const format = DateDomain.localeDateMask(locale as LanguageDomain.Language)

  const dateField = {
    readOnly: true,
    calendarProps: {
      size: 'small',
      bounds: [DateDomain.todayString(), '2025-01-01'],
    },
    name: 'date',
    defaultValue: DateDomain.todayString(),
  }

  return (
    <FormField width="150px" label={<IntlText id="date" />}>
      <DateInput format={format} {...dateField} onChange={props.onChange} />
    </FormField>
  )
}

export default Input