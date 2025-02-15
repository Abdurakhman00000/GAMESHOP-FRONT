import { memo } from 'react';
import Image from 'next/image';
import scss from './PsPlusPage.module.scss';
import psImage from '../../../../../public/images/ps-plus/cool_img.svg';
import LeftContent from './Left-content/LeftContent';
import RightContent from './Right-content/RightContent';
import BottomContent from './Bottom-content/BottomContent';

const LeftBlock = memo(() => (
	<div className={scss.left_content}>
		<Image
			src={psImage}
			alt='PlayStation Plus Essential логотип'
			height={300}
			width={800}
			priority={true}
			sizes='(max-width: 1220px) 100vw, 257px'
		/>
		<p>Essential</p>
	</div>
));

LeftBlock.displayName = 'LeftBlock';

const RightBlock = memo(() => (
	<div className={scss.right_content}>
		<div className={scss.block_content}>
			<LeftContent />
			<RightContent />
		</div>
		<BottomContent />
	</div>
));

RightBlock.displayName = 'RightBlock';

const PsPlusPage = () => {
	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					<h1>PlayStation Plus</h1>
					<h3>Выберите подходящую подписку</h3>

					<div className={scss.ps_block}>
						<LeftBlock />
						<RightBlock />
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(PsPlusPage);