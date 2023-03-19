import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.js';
import { CollectionWordsContextProvider } from './components/CollectionWordsContext/CollectionWordsContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<CollectionWordsContextProvider>
		<Router>
			<App />
		</Router>
	</CollectionWordsContextProvider>
);
