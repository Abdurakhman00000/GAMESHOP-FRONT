'use client';
import React, { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import scss from './LeftContent.module.scss';
import { useSubsServicesQuery } from '@/redux/api/subs-data';

const PLAYSTATION_PLUS_ESSENTIAL = 'PlayStation Plus Essential';
const CONSOLES = {
	PS4: 1,
	PS5: 2
} as const;

const ConsoleButton = memo(({ consoleId }: { consoleId: number }) => (
	<button>{consoleId === CONSOLES.PS4 ? 'PS4' : 'PS5'}</button>
));

ConsoleButton.displayName = 'ConsoleButton';

const SubscriptionLevels = memo(() => (
	<div className={scss.levelSub_btn}>
		<button>Essential</button>
		<button>Extra</button>
		<button>Deluxe</button>
	</div>
));

SubscriptionLevels.displayName = 'SubscriptionLevels';

const LoadingState = () => (
	<div className={scss.content}>
		<div>Загрузка...</div>
	</div>
);

const ErrorState = () => (
	<div className={scss.content}>
		<div>Произошла ошибка при загрузке данных!</div>
	</div>
);

const LeftContent = () => {
	const { data, error, isLoading } = useSubsServicesQuery();
	const [selectedService, setSelectedService] = useState<
		SUBS.GetSubsServicesResponse[number] | null
	>(null);

	useEffect(() => {
		if (data?.length) {
			const service = data.find(
				service => service.name === PLAYSTATION_PLUS_ESSENTIAL
			);
			setSelectedService(service || null);
		}
	}, [data]);

	if (isLoading) return <LoadingState />;
	if (error) return <ErrorState />;
	if (!selectedService)
		return <div className={scss.content}>Сервис не найден.</div>;

	return (
		<div className={scss.content}>
			<h2>{selectedService.name}</h2>

			<div className={scss.subGame}>
				<Image
					src='/images/ps-plus/cool_img.svg'
					alt='Игры по подписке'
					width={20}
					height={20}
					loading='lazy'
				/>
				<p>Игры по подписке</p>
			</div>

			<div className={scss.console}>
				<h4>Консоль</h4>
				<div className={scss.console_btn}>
					{selectedService.consoles.map(consoleId => (
						<ConsoleButton key={consoleId} consoleId={consoleId} />
					))}
				</div>
			</div>

			<div className={scss.level_subs}>
				<h4>Уровень подписки</h4>
				<SubscriptionLevels />
			</div>
		</div>
	);
};

export default memo(LeftContent);
