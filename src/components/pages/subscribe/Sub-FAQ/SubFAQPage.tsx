'use client';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import styles from './SubFAQPage.module.scss';
import { faqData } from './constants';

const SubFAQPage: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

	const toggleAccordion = useCallback((index: number) => {
		setActiveIndex(prevIndex => (prevIndex === index ? null : index));
	}, []);

	const setItemRef = useCallback(
		(index: number) => (el: HTMLDivElement | null) => {
			itemRefs.current[index] = el;
		},
		[]
	);

	const faqItems = useMemo(
		() =>
			faqData.map((item, index) => ({
				item,
				index,
				isActive: activeIndex === index
			})),
		[activeIndex]
	);

	return (
		<div className={styles.main}>
			<div className='container'>
				<h1 className={styles.title}>Часто задаваемые вопросы</h1>
				<div className={styles.faqGridWrapper}>
					<div className={styles.faqGrid}>
						{faqItems.map(({ item, index, isActive }) => {
							const itemRef = useRef<HTMLDivElement>(null);

							return (
								<div key={index} className={styles.faqItemWrapper}>
									<div
										ref={el => {
											itemRef.current = el;
											setItemRef(index)(el);
										}}
										className={`${styles.faqItem} ${
											isActive ? styles.active : ''
										}`}
										onClick={() => toggleAccordion(index)}
									>
										{item.title}
										<button
											className={`${styles.plusBtn} ${
												isActive ? styles.activeBtn : ''
											}`}
										>
											+
										</button>
									</div>
									{isActive && (
										<div
											className={styles.accordionContent}
											style={{
												width: itemRef.current
													? `${itemRef.current.offsetWidth}px`
													: 'auto'
											}}
										>
											{item.content}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubFAQPage;
