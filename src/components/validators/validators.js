export const required = value => (value ? undefined : 'Required');

export const isNumber = value => (parseInt(value)  !== NaN ? undefined : 'Must be a number');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';


export const validValue = value => {
    if (value > 10 ) {
      return 'Value is too high, must be a number between 1 and 10'
    }

    if (value < 1) {
      return 'Value is too low, must be a number between 1 and 10'
    }
};

export const isTrimmed = value =>
        value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const length = length => value => {

  let valueArray =  value ? value.split('') : ['']

    if (length.min && valueArray.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && valueArray.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';
