type AllowedTypes = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'date'

export type OdinValidationModel = {
  [key: string]: {
    required?: boolean
    type?: AllowedTypes
    requiredMessage?: string
    match?: RegExp
    matchMessage?: string
    minLength?: number
    maxLength?: number
    minMaxLengthMessage?: string
  }
}
