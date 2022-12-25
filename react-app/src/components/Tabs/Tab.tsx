import {ReactNode} from "react"
import "./Tab.scss"

type Props = {
	label: string
	content?: ReactNode // На будущее
}

const Tab = ({ label }: Props) => {
	return (
		<button className={'label'}>
			{label}
		</button>
	)
}

export default Tab