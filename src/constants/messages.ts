export const USER_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_IS_STRING: 'Name must be a string',
  NAME_LENGTH: 'Name must be between 1 and 100 characters',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_EMAIL: 'Email must be a valid email',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_IS_STRING: 'Password must be a string',
  PASSWORD_LENGTH: 'Password must be between 6 and 50 characters',
  PASSWORD_STRONG:
    'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_IS_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH: 'Confirm password must be between 6 and 50 characters',
  CONFIRM_PASSWORD_STRONG:
    'Confirm password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be in ISO8601 format',
  LOGIN_SUCCESSFULLY: 'Login Successfully',
  REGISTER_SUCCESSFULLY: 'Register Successfully'
} as const
