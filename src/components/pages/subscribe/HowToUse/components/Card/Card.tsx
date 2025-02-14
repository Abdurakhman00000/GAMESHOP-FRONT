// components/Card/Card.tsx
import React from 'react';
import Image from 'next/image';
import scss from './Card.module.scss';
import { CardData, IMAGE_SIZES, IMAGES } from '../constants/howToUse'

type CardProps = Omit<CardData, 'id'>;

const Card: React.FC<CardProps> = ({ number, text }) => (
	<div className={scss.card}>
		<h3>{text}</h3>
		<div className={scss.number}>
			<h1>{number}</h1>
			<Image
				src={IMAGES.ARROW}
				alt={`step-${number}-arrow`}
				width={IMAGE_SIZES.ARROW.width}
				height={IMAGE_SIZES.ARROW.height}
				priority
			/>
		</div>
	</div>
);

export default Card;
