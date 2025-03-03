import React from 'react';
import scss from './Footer.module.scss';
import Image from 'next/image';
import Logo from '../../../../public/images/logo/Logo.svg';

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className='container'>
				<div className={scss.content}>
					<Image
						src={Logo}
						alt='Logo'
						width={700}
						height={500}
						quality={70}
						priority
						className={scss.logo}
					/>
					<div className={scss.footer_end}>
						<p>О нас</p>
						{/* <p>Контакты</p>
						<p>Политика конфиденциальности</p> */}

						<div className={scss.main_info}>
							<h6>ИП Евсютин Иван Алексеевич</h6>
							<h6>ИНН: 773389267379</h6>
							<h6>ОГРН/ОГРНИП: 316774600498753</h6>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
