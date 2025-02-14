import { memo } from 'react';
import Image from 'next/image';
import scss from './PsPlusEssPage.module.scss';
import psImage from '../../../../../public/images/playstationLogo2/playstationPlus.svg';
import Left2Content from './Left2-content/Left2Content';
import Right2Content from './Right2-content/Right2Content';
import Bottom2Content from './Bottom2-content/Bottom2Content';

const PageHeader = memo(() => (
	<>
		<h1>PlayStation Plus</h1>
		<h3>Выберите подходящую подписку</h3>
	</>
));

PageHeader.displayName = 'PageHeader';

const LeftBlock = memo(() => (
	<div className={scss.left_content}>
		<Image
			src={psImage}
			alt='PlayStation Plus логотип'
			height={300}
			width={800}
			priority
			quality={70}
			sizes='(max-width: 1220px) 100vw, 380px'
		/>
	</div>
));

LeftBlock.displayName = 'LeftBlock';

const RightBlock = memo(() => (
	<div className={scss.right_content}>
		<div className={scss.block_content}>
			<Left2Content />
			<Right2Content />
		</div>
		<Bottom2Content />
	</div>
));

RightBlock.displayName = 'RightBlock';

const PsPlusEssPage = () => {
	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					<PageHeader />
					<div className={scss.ps_block}>
						<LeftBlock />
						<RightBlock />
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(PsPlusEssPage);
