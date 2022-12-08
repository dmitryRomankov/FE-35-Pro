import styles from "./Avatar.module.scss"

type Props = {
	src: string
}

const Avatar = ({ src }: Props) => {
	return (
		<div className={styles.container}>
			{src}
		</div>
	)
}

export default Avatar