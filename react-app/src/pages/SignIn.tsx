import {ChangeEvent, SyntheticEvent, useState} from "react"

import Layout from "../components/layout/Layout"
import Title from "../components/title/Title"

import '../styles/pages/SignIn.scss'
import validateEmail from "../utils/validateEmail";

const SignIn = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [state, setState] = useState({
    email: '',
    pwd: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')

    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const {error} = validateEmail(state.email)
    if (error) {
      return setError(error)
    }
    if (state.pwd.length < 6) {
      return setError('Введите пароль')
    }

    setSuccess(true)
  }

  return (
    <Layout>
      <Title text={!success ? 'Sign In' : 'Success'}/>

      {!success &&
        <form className={'form'} onSubmit={handleSubmit}>
          <label>
            <span className={'labelStyle'}>Email</span>

            <input
              type={'email'}
              name={'email'}
              className={'custom__input'}
              value={state.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <span className={'labelStyle'}>Password</span>

            <input
              type={'password'}
              name={'pwd'}
              className={'custom__input'}
              value={state.pwd}
              onChange={handleChange}
            />
          </label>


          <p>
            {error}
          </p>


          {!!state.email.length && !!state.pwd.length &&
            <input
              type={'submit'}
              value={'Apply'}
              className={'btnDefault'}
            />
          }
        </form>
      }

      {success &&
        <>
          <p className={'success'}>Вы успешно вошли в личный кабинет</p>
          <button className={'goToProfile btnDefault'}>К профилю</button>
        </>
      }
    </Layout>
  )
}

export default SignIn