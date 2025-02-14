// src/components/pages/subscribe/HowToUse/HowToUsePage.tsx
import React from 'react';
import Image from 'next/image';
import scss from './HowToUsePage.module.scss';
import { CARDS_DATA, IMAGE_SIZES, IMAGES } from './components/constants/howToUse'

const HowToUsePage: React.FC = () => {
	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					<h1>Как пользоваться?</h1>
					<div className={scss.how_to_use}>
						<div className={scss.Doll_div}>
							<Image
								className={scss.Doll}
								src={IMAGES.DOLL}
								alt='instruction-doll'
								width={IMAGE_SIZES.LARGE.width}
								height={IMAGE_SIZES.LARGE.height}
								quality={IMAGE_SIZES.LARGE.quality}
								priority
							/>
						</div>

						{CARDS_DATA.map(({ id, number, text }) => (
							<div key={id} className={scss[`card_${number}`]}>
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
						))}

						<Image
							className={scss.Sony}
							src={IMAGES.SONY}
							alt='sony-console'
							width={IMAGE_SIZES.LARGE.width}
							height={IMAGE_SIZES.LARGE.height}
							quality={IMAGE_SIZES.LARGE.quality}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowToUsePage;
