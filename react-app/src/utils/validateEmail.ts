const validateEmail = (email: string) => {
  const array = [...email]
  const indexDog = array.findIndex(letter => letter === '@')

  if (!indexDog) {
    return {
      error: 'Кажется не хватает имени у адреса эл. почты.',
    }
  }

  if (indexDog === -1) {
    return {
      error: 'Адрес эл. почты должен содержать символ "@".',
    }
  }

  const indexDot = array.findIndex(letter => letter === '.')

  if (indexDot === -1 || !array.at(indexDot + 2)) {
    return {
      error: 'Кажется у адреса эл. почты не указан домен почтового сервиса.',
    }
  }

  if (indexDot - indexDog < 2) {
    return {
      error: 'Введите часть адреса после символа "@".',
    }
  }

  return {
    error: null,
  }
}

export default validateEmail