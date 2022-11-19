import React from 'react';
import  './title.css';  

export function Title (props) {
  return (
	  <h1	className='title'  >
		  {props.text}
	  </h1>	
  );
}

