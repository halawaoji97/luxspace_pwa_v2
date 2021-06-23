import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Aside from './components/Aside';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
	const [items, setItems] = useState([]);

	useEffect(function () {
		(async function () {
			const response = await fetch(
				'https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc',
				{
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json',
						'X-Api-Key': process.env.REACT_APP_APIKEY,
					},
				},
			);
			const { nodes } = await response.json();
			setItems(nodes);
		})();
	}, []);

	return (
		<>
			<Header />
			<Hero />
			<Browse />
			<Arrived items={items} />
			<Clients />
			<Aside />
			<Footer />
		</>
	);
}

export default App;
