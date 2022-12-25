import {ReactNode} from "react"

interface IIcons {
  [key: string]: ReactNode
}

const icons: IIcons = {
  'login': <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M20 12h-13l3 -3m0 6l-3 -3"></path></>,
  'home' : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="5 12 3 12 12 3 21 12 19 12"></polyline><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></>,
  'book' : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><line x1="3" y1="6" x2="3" y2="19"></line><line x1="12" y1="6" x2="12" y2="19"></line><line x1="21" y1="6" x2="21" y2="19"></line></>,
  'moon' : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path><path d="M19 11h2m-1 -1v2"></path></>,
  'sun'  : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path><path d="M6.343 17.657l-1.414 1.414"></path><path d="M6.343 6.343l-1.414 -1.414"></path><path d="M17.657 6.343l1.414 -1.414"></path><path d="M17.657 17.657l1.414 1.414"></path><path d="M4 12h-2"></path><path d="M12 4v-2"></path><path d="M20 12h2"></path><path d="M12 20v2"></path></>,
  'cancel' : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>,
  'favorites' : <><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.996"></path><path d="M14 16h6"></path><path d="M17 13v6"></path></>,
}

export default icons