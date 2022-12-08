import styles from "./Title.module.scss"

type Props = {
	text: string | undefined
}

const Title = ({ text }: Props) => (
	<h1 className={styles.title}>{text}</h1>
)

export default Title