"use client"

import { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import scss from './Left2Content.module.scss';
import plusGameImg from '../../../../../../public/images/ps-plus/cool_img.svg';

const ConsoleButton = memo(({ type, selected, onClick }: { type: 'PS4' | 'PS5'; selected: boolean; onClick: () => void }) => (
	<button
		type='button'
		className={selected ? scss.active : ''}
		onClick={onClick}
	>
		{type}
	</button>
));

ConsoleButton.displayName = 'ConsoleButton';

const ConsoleButtons = memo(({ selectedConsole, onConsoleSelect }: { selectedConsole: 'PS4' | 'PS5' | null; onConsoleSelect: (console: 'PS4' | 'PS5') => void }) => (
	<div className={scss.console_btn}>
		<ConsoleButton type='PS4' selected={selectedConsole === 'PS4'} onClick={() => onConsoleSelect('PS4')} />
		<ConsoleButton type='PS5' selected={selectedConsole === 'PS5'} onClick={() => onConsoleSelect('PS5')} />
	</div>
));

ConsoleButtons.displayName = 'ConsoleButtons';

const Left2Content = () => {
	const [selectedConsole, setSelectedConsole] = useState<'PS4' | 'PS5' | null>(null);

	// Initialize from localStorage if available
	useEffect(() => {
		const storedConsole = localStorage.getItem('selectedConsole');
		if (storedConsole === 'PS4' || storedConsole === 'PS5') {
			setSelectedConsole(storedConsole);
		} else {
			// Default to PS5 if nothing is selected
			setSelectedConsole('PS5');
			localStorage.setItem('selectedConsole', 'PS5');
		}
	}, []);

	const handleConsoleSelect = (console: 'PS4' | 'PS5') => {
		setSelectedConsole(console);
		localStorage.setItem('selectedConsole', console);
		
		// Dispatch a storage event for other components to detect the change
		window.dispatchEvent(new StorageEvent('storage', {
			key: 'selectedConsole',
			newValue: console
		}));
	};

	return (
		<div className={scss.content}>
			<h2>
				PlayStation Plus <br /> Essential
			</h2>

			<div className={scss.subGame}>
				<Image
					src={plusGameImg}
					alt='PlayStation Plus иконка'
					width={20}
					height={20}
					quality={70}
					loading='lazy'
				/>
				<p>Игры по подписке</p>
			</div>

			<div className={scss.console}>
				<h4>Консоль</h4>
				<ConsoleButtons selectedConsole={selectedConsole} onConsoleSelect={handleConsoleSelect} />
			</div>
		</div>
	);
};

export default memo(Left2Content);
