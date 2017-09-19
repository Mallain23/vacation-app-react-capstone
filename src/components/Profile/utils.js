export const getAvatarString = (firstName, lastName) => {
    const firstLetter = firstName.split('').splice(0, 1).join('')
    const secondLetter = lastName.split('').splice(0,1).join('')

    return `${firstLetter}${secondLetter}`
}
