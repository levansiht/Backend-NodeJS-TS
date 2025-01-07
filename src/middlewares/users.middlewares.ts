import { Request, Response, NextFunction } from 'express'
import { check, checkSchema } from 'express-validator'
import { validate } from '~/utils/validation'
import userService from '~/services/users.services'
import { USER_MESSAGES } from '~/constants/messages'
import databaseservice from '~/services/database.services'

export const loginValidator = validate(
  checkSchema({
    email: {
      isEmail: {
        errorMessage: USER_MESSAGES.EMAIL_IS_EMAIL
      },
      trim: true,
      custom: {
        options: async (value, { req }) => {
          const user = await databaseservice.users.findOne({ email: value })
          if (user === null) {
            throw new Error(USER_MESSAGES.EMAIL_ALREADY_EXISTS)
          }
          req.user = user
          return true
        }
      }
    },
    password: {
      notEmpty: {
        errorMessage: USER_MESSAGES.PASSWORD_IS_REQUIRED
      },
      isString: {
        errorMessage: USER_MESSAGES.PASSWORD_IS_STRING
      },
      isLength: {
        options: {
          min: 6,
          max: 50
        },
        errorMessage: USER_MESSAGES.PASSWORD_LENGTH
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: USER_MESSAGES.PASSWORD_STRONG
      }
    }
  })
)

export const registerValidator = validate(
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: USER_MESSAGES.NAME_IS_REQUIRED
      },
      isString: {
        errorMessage: USER_MESSAGES.NAME_IS_STRING
      },
      isLength: {
        options: {
          min: 3,
          max: 100
        },
        errorMessage: USER_MESSAGES.NAME_LENGTH
      },
      trim: true
    },
    email: {
      notEmpty: {
        errorMessage: USER_MESSAGES.EMAIL_IS_REQUIRED
      },
      isEmail: {
        errorMessage: USER_MESSAGES.EMAIL_IS_EMAIL
      },
      trim: true,
      custom: {
        options: async (value) => {
          const isExistEmail = await userService.checkEmailExists(value)
          if (isExistEmail) {
            throw new Error(USER_MESSAGES.EMAIL_ALREADY_EXISTS)
          }
        }
      }
    },
    password: {
      notEmpty: {
        errorMessage: USER_MESSAGES.PASSWORD_IS_REQUIRED
      },
      isString: {
        errorMessage: USER_MESSAGES.PASSWORD_IS_STRING
      },
      isLength: {
        options: {
          min: 6,
          max: 50
        },
        errorMessage: USER_MESSAGES.PASSWORD_LENGTH
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: USER_MESSAGES.PASSWORD_STRONG
      },
      errorMessage:
        'Password must be at least 6 characters long, and contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    },
    confirm_password: {
      notEmpty: {
        errorMessage: USER_MESSAGES.CONFIRM_PASSWORD_IS_REQUIRED
      },
      isString: {
        errorMessage: USER_MESSAGES.CONFIRM_PASSWORD_IS_STRING
      },
      isLength: {
        options: {
          min: 6,
          max: 50
        },
        errorMessage: USER_MESSAGES.CONFIRM_PASSWORD_LENGTH
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: USER_MESSAGES.CONFIRM_PASSWORD_STRONG
      },
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password')
          } else {
            return value
          }
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        },
        errorMessage: USER_MESSAGES.DATE_OF_BIRTH_MUST_BE_ISO8601
      }
    }
  })
)
