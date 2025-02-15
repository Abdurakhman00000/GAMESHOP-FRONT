import { memo } from 'react';
import Image from 'next/image';
import scss from './Left2Content.module.scss';
import plusGameImg from '../../../../../../public/images/ps-plus/cool_img.svg';

const ConsoleButton = memo(({ type }: { type: 'PS4' | 'PS5' }) => (
	<button type='button'>{type}</button>
));

ConsoleButton.displayName = 'ConsoleButton';

const ConsoleButtons = memo(() => (
	<div className={scss.console_btn}>
		<ConsoleButton type='PS4' />
		<ConsoleButton type='PS5' />
	</div>
));

ConsoleButtons.displayName = 'ConsoleButtons';

const Left2Content = () => {
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
				<ConsoleButtons />
			</div>
		</div>
	);
};

export default memo(Left2Content);
