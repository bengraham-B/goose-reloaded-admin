import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./styles/styles.css"

//^ Importing Componets
import Navbar from './components/Navbar/Navbar'
//^ Importing Pages
import HomePage from './pages/HomePage'

export default function App() {
	return (
		<div id="App">

			<BrowserRouter>
			<Navbar/>
				
			
				<section className="pages">

					<Routes>

						<Route path="/" element={<HomePage/>} />

					</Routes>

				</section>
			</BrowserRouter>
		
		</div>
	)
}
