import './popup.scss'
import Icon from "../icon/Icon";

type Props = {
  title: string
  img?: string
  onClick: () => void
}

const Popup = ({title, img, onClick}: Props) => {
  return(
    <div className={'popup__container'}>
      <button type={'button'} onClick={onClick} className={'button__cancel'}><Icon name={'cancel'}/></button>
      <h1>{title}</h1>
      <img src={img} alt={title}/>
    </div>
  )
}
export default Popup