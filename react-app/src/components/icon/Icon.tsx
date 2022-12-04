import {IIcon} from "../../interfaces"
import icons from "../../variables/icons"

const Icon = ({ name, className = '', strokeWidth = 1, onClick }: IIcon) => {
  // @ts-ignore
  const icon = icons[name]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      {icon}
    </svg>
  )
}

export default Icon