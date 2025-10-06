import React, { useState } from 'react';
import CodeGenerator from './components/CodeGenerator';
import LanguageGuide from './components/LanguageGuide';

const Collapsible: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div className="collapsible">
			<button className="collapsible-header" onClick={() => setOpen(!open)}>
				<span>{title}</span>
				<span>{open ? '−' : '+'}</span>
			</button>
			{open && (
				<div className="collapsible-content">
					{children}
				</div>
			)}
		</div>
	);
};

const App: React.FC = () => {
	return (
		<div className="container">
			<h1>Deepal S07 помощник</h1>
			<Collapsible title="Генерация кода инженерного меню для Deepal S07 (работает на прошивке до 3.0)">
				<CodeGenerator />
			</Collapsible>
			<Collapsible title="Как сменить язык на Deepal S07">
				<LanguageGuide />
			</Collapsible>
		</div>
	);
};

export default App;


