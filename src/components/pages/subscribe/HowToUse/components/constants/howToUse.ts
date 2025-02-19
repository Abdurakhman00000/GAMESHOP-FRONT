// src/constants/howToUse.ts
interface CardType {
	id: number;
	number: number;
	text: string;
}

export const CARD: CardType[] = [
	{
		id: 1,
		number: 1,
		text: 'Вы получаете логин и пароль от игрового аккаунта.'
	},
	{
		id: 2,
		number: 2,
		text: 'Добавляете его на консоль, включаете активацию аккаунта в настройках по инструкции.'
	},
	{
		id: 3,
		number: 3,
		text: 'После активации аккаунта подписка начинает работать на всех аккаунтах вашей консоли!'
	}
];

export const IMAGES = {
	DOLL: '/images/howToUse/doll-pl.svg',
	ARROW: '/images/howToUse/Arrow_2.svg',
	SONY: '/images/howToUse/ploika-nice.svg'
} as const;

export const IMAGE_SIZES = {
	LARGE: {
		width: 700,
		height: 500,
		quality: 70
	},
	ARROW: {
		width: 30,
		height: 20
	}
} as const;
