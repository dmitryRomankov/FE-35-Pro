import {useState} from "react"

import Layout from "../components/Layout/Layout"
import Back from "../components/Back/Back"
import Title from "../components/Title/Title"
import Form from "../components/Form/Form"

import styles from "../styles/pages/signIn.module.scss"

const SignIn = () => {
	const [success, setSuccess] = useState(false)

	return (
		<Layout>
			<Back label='Back to home'/>
			<Title text={!success ? 'Sign In' : 'Success'}/>

			<div className={styles.form}>
				{!success &&
					<Form onChange={setSuccess}/>
				}

				{success &&
					<div className={styles.success}>
						<h2>
							You have successfully logged in
						</h2>

						<button type='button'>
							Go to personal account
						</button>
					</div>
				}
			</div>
		</Layout>
	)
}

export default SignIn