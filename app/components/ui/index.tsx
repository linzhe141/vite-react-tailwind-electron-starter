import React, { useState, type ChangeEvent, type MouseEvent } from 'react'

// ========================================
// Types & Interfaces
// ========================================

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'
type AlertVariant = 'info' | 'success' | 'warning' | 'danger'
type DividerOrientation = 'horizontal' | 'vertical'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

interface CardSectionProps {
  children: React.ReactNode
  className?: string
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

interface InputProps {
  label?: string
  error?: string
  helperText?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  className?: string
}

interface TextareaProps {
  label?: string
  error?: string
  helperText?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  disabled?: boolean
  className?: string
}

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  error?: string
  helperText?: string
  options?: SelectOption[]
  value?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

interface SwitchProps {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  disabled?: boolean
}

interface CheckboxProps {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  disabled?: boolean
}

interface RadioProps {
  checked: boolean
  onChange: () => void
  label?: string
  disabled?: boolean
  name?: string
}

interface AlertProps {
  children: React.ReactNode
  variant?: AlertVariant
  onClose?: () => void
  className?: string
}

interface DividerProps {
  orientation?: DividerOrientation
  className?: string
}

// ========================================
// Components
// ========================================

// Button Component
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#00d367] hover:bg-[#00b759] text-[#0a0a0a] focus:ring-[#00d367] shadow-[0_0_20px_rgba(0,211,103,0.3)] hover:shadow-[0_0_40px_rgba(0,211,103,0.4)]',
    secondary:
      'bg-[#1a1a1a] hover:bg-[#242424] text-[#f5f5f5] border border-[#333333] focus:ring-[#00d367]',
    ghost:
      'bg-transparent hover:bg-[#1a1a1a] text-[#f5f5f5] focus:ring-[#00d367]',
    danger:
      'bg-[#ef4444] hover:bg-[#dc2626] text-[#f5f5f5] focus:ring-[#ef4444]',
    outline:
      'bg-transparent hover:bg-[#00d367]/10 text-[#00d367] border border-[#00d367] focus:ring-[#00d367]',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Card Components
const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
}) => {
  const hoverStyles = hover
    ? 'hover:bg-[#242424] hover:border-[#404040] transition-all duration-200'
    : ''

  return (
    <div
      className={`rounded-xl border border-[#333333] bg-[#1a1a1a] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardSectionProps> = ({
  children,
  className = '',
}) => (
  <div className={`border-b border-[#262626] px-6 py-4 ${className}`}>
    {children}
  </div>
)

const CardBody: React.FC<CardSectionProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
)

const CardFooter: React.FC<CardSectionProps> = ({
  children,
  className = '',
}) => (
  <div className={`border-t border-[#262626] px-6 py-4 ${className}`}>
    {children}
  </div>
)

// Badge Component
const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variants: Record<BadgeVariant, string> = {
    default: 'bg-[#262626] text-[#a3a3a3]',
    primary: 'bg-[#00d367]/20 text-[#00d367] border border-[#00d367]/30',
    success: 'bg-[#00d367]/20 text-[#00d367]',
    warning: 'bg-[#f59e0b]/20 text-[#f59e0b]',
    danger: 'bg-[#ef4444]/20 text-[#ef4444]',
    info: 'bg-[#3b82f6]/20 text-[#3b82f6]',
  }

  const sizes: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}

// Input Component
const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
}) => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <div className='w-full'>
      {label && (
        <label className='mb-2 block text-sm font-medium text-[#f5f5f5]'>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full border bg-[#121212] px-4 py-2.5 ${
          error
            ? 'border-[#ef4444]'
            : focused
              ? 'border-[#00d367]'
              : 'border-[#262626]'
        } rounded-lg text-[#f5f5f5] placeholder-[#525252] focus:ring-2 focus:outline-none ${
          error ? 'focus:ring-[#ef4444]/50' : 'focus:ring-[#00d367]/50'
        } transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      />
      {error && <p className='mt-1.5 text-sm text-[#ef4444]'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1.5 text-sm text-[#737373]'>{helperText}</p>
      )}
    </div>
  )
}

// Textarea Component
const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  placeholder,
  value,
  onChange,
  rows = 4,
  disabled = false,
  className = '',
}) => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <div className='w-full'>
      {label && (
        <label className='mb-2 block text-sm font-medium text-[#f5f5f5]'>
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full border bg-[#121212] px-4 py-2.5 ${
          error
            ? 'border-[#ef4444]'
            : focused
              ? 'border-[#00d367]'
              : 'border-[#262626]'
        } rounded-lg text-[#f5f5f5] placeholder-[#525252] focus:ring-2 focus:outline-none ${
          error ? 'focus:ring-[#ef4444]/50' : 'focus:ring-[#00d367]/50'
        } resize-none transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      />
      {error && <p className='mt-1.5 text-sm text-[#ef4444]'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1.5 text-sm text-[#737373]'>{helperText}</p>
      )}
    </div>
  )
}

// Select Component
const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
}) => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <div className='w-full'>
      {label && (
        <label className='mb-2 block text-sm font-medium text-[#f5f5f5]'>
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full border bg-[#121212] px-4 py-2.5 ${
          error
            ? 'border-[#ef4444]'
            : focused
              ? 'border-[#00d367]'
              : 'border-[#262626]'
        } rounded-lg text-[#f5f5f5] focus:ring-2 focus:outline-none ${
          error ? 'focus:ring-[#ef4444]/50' : 'focus:ring-[#00d367]/50'
        } transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='mt-1.5 text-sm text-[#ef4444]'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1.5 text-sm text-[#737373]'>{helperText}</p>
      )}
    </div>
  )
}

// Switch Component
const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <label className='flex cursor-pointer items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className='sr-only'
        />
        <div
          className={`h-6 w-11 rounded-full transition-colors duration-200 ${
            checked ? 'bg-[#00d367]' : 'bg-[#333333]'
          } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <div
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
              checked ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </div>
      {label && <span className='ml-3 text-sm text-[#f5f5f5]'>{label}</span>}
    </label>
  )
}

// Checkbox Component
const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <label className='flex cursor-pointer items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className='sr-only'
        />
        <div
          className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200 ${
            checked
              ? 'border-[#00d367] bg-[#00d367]'
              : 'border-[#333333] bg-[#121212]'
          } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {checked && (
            <svg
              className='h-3 w-3 text-[#0a0a0a]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M5 13l4 4L19 7'
              />
            </svg>
          )}
        </div>
      </div>
      {label && <span className='ml-3 text-sm text-[#f5f5f5]'>{label}</span>}
    </label>
  )
}

// Radio Component
const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  name,
}) => {
  return (
    <label className='flex cursor-pointer items-center'>
      <div className='relative'>
        <input
          type='radio'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          className='sr-only'
        />
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            checked ? 'border-[#00d367]' : 'border-[#333333]'
          } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {checked && <div className='h-2.5 w-2.5 rounded-full bg-[#00d367]' />}
        </div>
      </div>
      {label && <span className='ml-3 text-sm text-[#f5f5f5]'>{label}</span>}
    </label>
  )
}

// Alert Component
const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  onClose,
  className = '',
}) => {
  const variants: Record<AlertVariant, string> = {
    info: 'bg-[#3b82f6]/10 border-[#3b82f6]/30 text-[#3b82f6]',
    success: 'bg-[#00d367]/10 border-[#00d367]/30 text-[#00d367]',
    warning: 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]',
    danger: 'bg-[#ef4444]/10 border-[#ef4444]/30 text-[#ef4444]',
  }

  return (
    <div
      className={`rounded-lg border px-4 py-3 ${variants[variant]} ${className} flex items-start justify-between`}
    >
      <div className='flex-1'>{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className='ml-4 transition-opacity hover:opacity-70'
        >
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

// Divider Component
const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  return orientation === 'horizontal' ? (
    <hr className={`border-t border-[#262626] ${className}`} />
  ) : (
    <div className={`w-px bg-[#262626] ${className}`} />
  )
}

// ========================================
// Export All Components
// ========================================

export {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Input,
  Textarea,
  Select,
  Switch,
  Checkbox,
  Radio,
  Alert,
  Divider,
}

export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  CardProps,
  CardSectionProps,
  BadgeProps,
  BadgeVariant,
  BadgeSize,
  InputProps,
  TextareaProps,
  SelectProps,
  SelectOption,
  SwitchProps,
  CheckboxProps,
  RadioProps,
  AlertProps,
  AlertVariant,
  DividerProps,
  DividerOrientation,
}
