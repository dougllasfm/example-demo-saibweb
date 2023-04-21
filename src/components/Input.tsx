import { type InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import clsx from 'clsx'

import { getParseMessageError } from '~/utils/functions'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  className?: string
}

export function Input({ label, className, name, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const fieldError = getParseMessageError(errors, name)

  return (
    <div className="flex flex-col items-start justify-start gap-0.5 w-full">
      <label
        htmlFor={name}
        className="text-base font-medium text-black w-full -mb-0.5"
      >
        {label}
      </label>
      <div
        className="bg-white select-none flex items-center gap-3 rounded-md transition-all duration-75 w-full border border-border-form
          focus-within:border-primary focus-within:border-2 h-9"
      >
        <input
          className={clsx(
            'bg-transparent appearance-none w-full border-none text-base leading-4 placeholder:font-normal font-medium p-2 rounded-[5px] outline-none h-full',
            className,
          )}
          id={name}
          {...register(name)}
          {...props}
        />
      </div>
      {fieldError && (
        <span className="text-red font-semibold text-sm">
          {fieldError.message?.toString()}
        </span>
      )}
    </div>
  )
}
