import {ChangeEvent, FormEvent, useState} from "react"

import {IForm} from "../../interfaces"
import {MIN_VALUE_LOGIN, MIN_VALUE_PWD} from "../../variables"

import styles from "./Form.module.scss"

const Form = ({ onChange }: IForm) => {
	const [error, setError] = useState('')

	const [state, setState] = useState({
		login: '',
		pwd: '',
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setError('')

		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault()

		if (state.login.length < MIN_VALUE_LOGIN) {
			return setError(`Login must have at least ${MIN_VALUE_LOGIN} characters`)
		}

		if (state.pwd.length < MIN_VALUE_PWD) {
			return setError(`Password must have at least ${MIN_VALUE_PWD} characters`)
		}

		onChange(true)
	}

	return (
		<form action='signIn' method='get' className={styles.container}>
			<label className={styles.label}>
				<span>Login</span>

				<input
					type='text'
					value={state.login}
					name='login'
					className={styles.inputControl}
					onChange={handleChange}
				/>
			</label>

			<label className={styles.label}>
				<span>Password</span>

				<input
					type='password'
					value={state.pwd}
					name='pwd'
					className={styles.inputControl}
					onChange={handleChange}
				/>
			</label>

			<span className={styles.forgotPwd}>Forgot password <a href='/forgot'>here</a></span>

			{Boolean(error) &&
				<span className={styles.error}>{error}</span>
			}

			<input type='submit' value='Sign In' className={styles.submit} onClick={handleSubmit}/>

			<span className={styles.signUp}>
				Not registered? <a href='/signUp'>Sign Up</a>
			</span>
		</form>
	)
}

export default Form