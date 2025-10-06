import React from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from "@vercel/analytics/next"
import App from './App';
import './styles.css';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root element with id "root" not found');
}
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
		<Analytics />
	</React.StrictMode>
);


