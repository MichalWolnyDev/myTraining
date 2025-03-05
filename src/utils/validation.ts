export const validateEmail = (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')

export const validatePassword = (value: string) => {
  if (value.length < 8) return 'Password must be at least 8 characters'
  if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter'
  if (!/[0-9]/.test(value)) return 'Password must contain at least one number'
  return null
}

export const validateConfirmPassword = (value: string, values: { password: string }) =>
  value !== values.password ? 'Passwords do not match' : null
