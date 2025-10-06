import React, { useState } from 'react';
import CodeGenerator from './components/CodeGenerator';
import LanguageGuide from './components/LanguageGuide';

const Collapsible: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
	const [open, setOpen] = useState<boolean>(true);
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
            <h1>Русификация Deepal S07</h1>
            <Collapsible title="Генерация кода инженерного меню для Deepal S07 (работает на прошивке до 3.0 включительно)">
                <CodeGenerator />
            </Collapsible>
            <Collapsible title="Как сменить язык на Deepal S07">
                <LanguageGuide />
            </Collapsible>
            <footer className="footer">Website developed by Vlad Popov</footer>
        </div>
	);
};

export default App;


