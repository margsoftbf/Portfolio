import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Wrapper from './components/Wrapper/Wrapper';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import PortfolioDetails from './components/Portfolio/PortfolioDetails';
import { useState } from 'react';

function App() {
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	return (
		<Router>
			<Navbar />
			<Hero />
			<Wrapper />
			<Portfolio openModal={openModal} setOpenModal={setOpenModal} />
			<Contact />
			{openModal.state && (
				<PortfolioDetails openModal={openModal} setOpenModal={setOpenModal} />
			)}
		</Router>
	);
}

export default App;
