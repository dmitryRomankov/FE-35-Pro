import React from 'react';
import { Title } from './components/Title'
import './App.css'


function App() {
	return (
		<>
			<Title text='Sign In'>
			</Title>
			
		<div	className='wrapper'>
			<input type="checkbox" id='checkbox' />
			<label htmlFor="checkbox"></label>
			<div	className='burger-line	first'></div>
			<div	className='burger-line	second'></div>
			<div	className='burger-line	third'></div>
			<div	className='burger-line	fourth'></div>
			<nav	className='menu'>
					<a href="#">Menu</a>
					<a href="#">Menu</a>
			</nav>
			</div>
		</>
  );
}

export default App;
