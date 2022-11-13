import React from 'react';
import './tabs.css';




export function Tabs(props: any) {
    return (
        <div className="tabs_root">
            <div className='tabs'>{props.children}</div>    
        </div>
        
    );
  }