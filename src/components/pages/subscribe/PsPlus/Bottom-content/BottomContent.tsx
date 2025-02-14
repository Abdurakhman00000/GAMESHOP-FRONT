import { memo } from 'react';
import Image from 'next/image';
import scss from './BottomContent.module.scss';
import logo1 from '../../../../../../public/images/playstationLogo/log1.svg';
import logo2 from '../../../../../../public/images/playstationLogo/log2.svg';
import logo3 from '../../../../../../public/images/playstationLogo/log3.svg';
import logo4 from '../../../../../../public/images/playstationLogo/log4.svg';
import logo5 from '../../../../../../public/images/playstationLogo/log5.svg';
import logo6 from '../../../../../../public/images/playstationLogo/log6.svg';
import logo7 from '../../../../../../public/images/playstationLogo/log7.svg';
import logo8 from '../../../../../../public/images/playstationLogo/log8.svg';

interface SubscriptionFeature {
	icon: string;
	text: string;
	alt: string;
}

const SUBSCRIPTION_FEATURES: SubscriptionFeature[][] = [
	[
		{
			icon: logo1,
			text: 'Коллекция PlayStation Plus',
			alt: 'Коллекция PS Plus'
		},
		{ icon: logo2, text: 'Эксклюзивные материалы', alt: 'Эксклюзивы' },
		{ icon: logo3, text: 'Сетевые режимы игр', alt: 'Сетевые режимы' },
		{ icon: logo4, text: 'Share Play', alt: 'Share Play' }
	],
	[
		{ icon: logo5, text: 'Новые игры каждый месяц', alt: 'Новые игры' },
		{ icon: logo6, text: 'Эксклюзивные скидки', alt: 'Скидки' },
		{ icon: logo7, text: 'Облачное хранилище', alt: 'Облако' },
		{ icon: logo8, text: 'Справка по игре', alt: 'Справка' }
	]
];

const FeatureButton = memo(({ feature }: { feature: SubscriptionFeature }) => (
	<button type='button'>
		<Image
			src={feature.icon}
			alt={feature.alt}
			width={17}
			height={17}
			loading='lazy'
		/>
		{feature.text}
	</button>
));

FeatureButton.displayName = 'FeatureButton';

const FeatureRow = memo(({ features }: { features: SubscriptionFeature[] }) => (
	<div className={scss.boxes}>
		{features.map((feature, index) => (
			<FeatureButton key={index} feature={feature} />
		))}
	</div>
));

FeatureRow.displayName = 'FeatureRow';

const BottomContent = () => {
	return (
		<div className={scss.content}>
			<h2>Что входит в подписку?</h2>
			{SUBSCRIPTION_FEATURES.map((features, index) => (
				<FeatureRow key={index} features={features} />
			))}
		</div>
	);
};

export default memo(BottomContent);
