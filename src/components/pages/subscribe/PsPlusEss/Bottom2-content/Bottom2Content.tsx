import { memo } from 'react';
import scss from './Bottom2Content.module.scss';

interface FeatureBox {
	title: string;
	description: string;
}

const FEATURE_BOXES: FeatureBox[] = [
	{
		title: 'Больше игр',
		description:
			'В коллекцию The Play List входят более 50 игр из ваших любимых франшиз вроде Need for Speed, Madden и Battlefield.'
	},
	{
		title: 'Пробные версии игр',
		description: 'Играйте в избранные новинки от EA в течение 10 часов.'
	},
	{
		title: 'Больше наград',
		description:
			'Подписчики получают эксклюзивные награды, которые расширят границы игры и помогут выделиться.'
	},
	{
		title: 'Экономьте',
		description:
			'Получите скидку 10% на цифровые материалы EA, включая игры, внутри игровую валюту и многое другое.'
	}
];

const FeatureBox = memo(({ feature }: { feature: FeatureBox }) => (
	<div className={scss.box}>
		<h4>{feature.title}</h4>
		<p>{feature.description}</p>
	</div>
));

FeatureBox.displayName = 'FeatureBox';

const Bottom2Content = () => {
	return (
		<div className={scss.content}>
			<h2>Преимущества EA Play</h2>

			<div className={scss.boxes}>
				{FEATURE_BOXES.map((feature, index) => (
					<FeatureBox key={index} feature={feature} />
				))}
			</div>
		</div>
	);
};

export default memo(Bottom2Content);
