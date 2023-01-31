import { useState } from 'react'
import {IPost} from '../models'
import './styles.css'

interface PostProps {
    posts: IPost
}



export function Post(props:PostProps) {
    
    const [details, setDetails]= useState(false)
    const buttonStylesClass = details ? 'bg-red-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', buttonStylesClass ]
    return (
     
        <div className="container">
            <img src={props.posts.image}/>
           <p>{props.posts.title}</p>

        <button className = {btnClasses.join( ' ')}
        onClick={()=> setDetails(prev => !prev)}
        >
            
            {details ? 'Hide details' : 'Show details'}
            
        </button>

        

        {details && <div>{props.posts.text}</div>}

        

        

        </div>
        
    )
}
