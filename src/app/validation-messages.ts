
export const VALIDATIONMESSAGES = {
    Date: (val?: string, val1?: string) => `Please enter a valid date. (dd/mm/yyyy)`,
    DisplayError: (val?: string, val1?: string) => `Please check the form for errors and re-submit.`,
    Email: (val?: string, val1?: string) => `Please enter a valid email address.`,
    EmailExists: (val?: string, val1?: string) => `${val} already exists, please enter a different email.`,
    MaxLength: (val?: string, val1?: string) => `Please enter no more than ${val} characters.`,
    MinLength: (val?: string, val1?: string) => `Please enter at least ${val} characters.`,
    MinValue: (val?: string, val1?: string) => `Please enter at least ${val} or higher.`,
    Integer: (val?: string, val1?: string) => `Please enter an integer only.`,
    PositiveInteger: (val?: string, val1?: string) => `Please enter a positive integer only.`,
    Number: (val?: string, val1?: string) => `Please enter numbers only.`,
    Guid: (val?: string, val1?: string) => `The value entered was not in the correct format.`,
    Boolean: (val?: string, val1?: string) => `Please enter a boolean value only.`,
    Money: (val?: string, val1?: string) => `Please enter a dollar amount only (up to 2 decimal places).`,
    Money4: (val?: string, val1?: string) => `Please enter a dollar amount only (up to 4 decimal places).`,
    Currency: (val?: string, val1?: string) => `Please enter a valid dollar amount only.`,
    PasswordConfirm: (val?: string, val1?: string) => `Your password does not match.`,
    Range: (val?: string, val1?: string) => `Please enter a value between ${val} and ${val1}.`,
    Minimum: (val?: string, val1?: string) => `A minimum of ${val} is required.`,
    Maximum: (val?: string, val1?: string) => `A maximum of ${val} is required.`,
    RequiredGeneric: (val?: string, val1?: string) => `This field is required.`,
    Required: (val?: string, val1?: string) => `The ${val} field is required.`,
    Time: (val?: string, val1?: string) => `Please enter a valid time, between 00:00 and 23:59.`,
    Time24Hour: (val?: string, val1?: string) => `Please enter a valid time, between 00:00 AM and 23:59 PM.`,
    ValueExists: (val?: string, val1?: string) => `${val} already exists, please enter a different value.`,
    FileTypeInvalid: (val?: string, val1?: string) => `Invalid file type.`,
    StringMustContain: (val?: string, val1?: string) => `This field must contain the value '${val}'.`,
    BracketCharacters: (val?: string, val1?: string) => `Please do not include [] or {} or ()`,
    ArrayInteger: (val?: string, val1?: string) => `Please enter whole numbers separated by commas only.`,
    Decimal: (val?: string, val1?: string) => `Please enter a decimal only.`,
    PositiveDecimal: (val?: string, val1?: string) => `Please enter a positive decimal only.`,
    DefaultError: (val?: string, val1?: string) => `An error occurred, please try again.`,
    CustomError: (val?: string) => `${val}`,
    NoRecordExists: (val?: string, val1?: string) => `No ${val ? val + ' has been found.' : 'record exists.'}`

}

// export const VALIDATIONMESSAGES1 = {
//     Date: `Please enter a valid date. (dd/mm/yyyy)`,
//     DisplayError: `Please check the form for errors and re-submit.`,
//     Email: `Please enter a valid email address.`,
//     EmailExists: `{0} is already taken, please enter a different address.`,
//     MaxLength: `Please enter no more than {0} characters.`,
//     MinLength: `Please enter at least {0} characters.`,
//     MinValue: `Please enter at least {0} or higher.`,
//     Integer: `Please enter an integer only.`,
//     PositiveInteger: `Please enter a positive integer only.`,
//     Number: `Please enter a number only.`,
//     Guid: `The value entered was not in the correct format.`,
//     Boolean: `Please enter a boolean value only.`,
//     Money: `Please enter a dollar amount only (up to 2 decimal places).`,
//     Money4: `Please enter a dollar amount only (up to 4 decimal places).`,
//     Currency: `Please enter a valid dollar amount only.`,
//     PasswordConfirm: `Your password does not match.`,
//     Range: `Please enter a value between {0} and {1}.`,
//     Minimum: `A minimum of {0} is required.`,
//     Maximum: `A maximum of {0} is required.`,
//     Required: `This field is required.`,
//     Time: `Please enter a valid time, between 00:00 and 23:59.`,
//     Time24Hour: `Please enter a valid time, between 00:00 AM and 23:59 PM.`,
//     ValueExists: `{0} already exists, please enter a different value.`,
//     FileTypeInvalid: `Invalid file type.`,
//     StringMustContain: `This field must contain the value '{0}'.`,
//     BracketCharacters: `Please do not include [] or {} or ()`,
//     ArrayInteger: `Please enter whole numbers separated by commas only.`,
//     Decimal: `Please enter a decimal only.`,
//     PositiveDecimal: `Please enter a positive decimal only.`
// }

// export const Date = `Please enter a valid date. (dd/mm/yyyy)`;
// export const DisplayError = `Please check the form for errors and re-submit.`;
// export const Email = `Please enter a valid email address.`;
// export const EmailExists = `{0} is already taken, please enter a different address.`;
// export const MaxLength = `Please enter no more than {0} characters.`;
// export const MinLength = `Please enter at least {0} characters.`;
// export const MinValue = `Please enter at least {0} or higher.`;
// export const Integer = `Please enter an integer only.`;
// export const PositiveInteger = `Please enter a positive integer only.`;
// export const Number = `Please enter a number only.`;
// export const Guid = `The value entered was not in the correct format.`;
// export const Boolean = `Please enter a boolean value only.`;
// export const Money = `Please enter a dollar amount only (up to 2 decimal places).`;
// export const Money4 = `Please enter a dollar amount only (up to 4 decimal places).`;
// export const Currency = `Please enter a valid dollar amount only.`;
// export const PasswordConfirm = `Your password does not match.`;
// export const Range = `Please enter a value between {0} and {1}.`;
// export const Minimum = `A minimum of {0} is required.`;
// export const Maximum = `A maximum of {0} is required.`;
// export const Required = `This field is required.`;
// export const Time = `Please enter a valid time, between 00:00 and 23:59.`;
// export const Time24Hour = `Please enter a valid time, between 00:00 AM and 23:59 PM.`;
// export const ValueExists = `{0} already exists, please enter a different value.`;
// export const FileTypeInvalid = `Invalid file type.`;
// export const StringMustContain = `This field must contain the value '{0}'.`;
// export const BracketCharacters = `Please do not include [] or {} or ()`;
// export const ArrayInteger = `Please enter whole numbers separated by commas only.`;
// export const Decimal = `Please enter a decimal only.`;
// export const PositiveDecimal = `Please enter a positive decimal only.`;