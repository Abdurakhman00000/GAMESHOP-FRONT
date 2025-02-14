import { memo } from 'react';
import scss from './Right2Content.module.scss';

interface SubscriptionOption {
	id: number;
	months: number;
	price: string;
}

const subscriptionOptions: SubscriptionOption[] = [
	{ id: 1, months: 1, price: '740Р' },
	{ id: 2, months: 3, price: '1690Р' }
];

const SubscriptionChoice = memo(
	({ option }: { option: SubscriptionOption }) => (
		<div
			className={scss.choice}
			tabIndex={0}
			role='button'
			aria-label={`Подписка на ${option.months} ${
				option.months === 1 ? 'месяц' : 'месяца'
			} за ${option.price}`}
		>
			<div className={scss.boxes}>
				<div className={scss.box}>
					<p>{option.id}</p>
				</div>
				<p>{option.months} месяц</p>
			</div>
			<h6>{option.price}</h6>
		</div>
	)
);

SubscriptionChoice.displayName = 'SubscriptionChoice';

const Right2Content = () => {
	const handlePurchase = () => {
		console.log('Покупка инициирована');
		// Здесь может быть логика покупки
	};

	return (
		<div className={scss.content}>
			<h2>Длительность подписки</h2>

			<div className={scss.choices}>
				{subscriptionOptions.map(option => (
					<SubscriptionChoice key={option.id} option={option} />
				))}

				<button onClick={handlePurchase} type='button'>
					Купить
				</button>
			</div>
		</div>
	);
};

export default memo(Right2Content);
