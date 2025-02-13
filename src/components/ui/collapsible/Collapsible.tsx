import { useElement } from '@/hooks/use-element';
import React from 'react';
import styles from './Collapsible.module.scss';
interface CollapsibleProps {
	disabled?: boolean;
	className?: string;
	transition?: string;
	children?: React.ReactNode;
	trigger?: React.ReactNode;
	value: boolean;
}
const Collapsible: React.FC<CollapsibleProps> = ({
	disabled,
	className,
	children,
	trigger,
	transition,
	value
}) => {
	const [contentRef, { offsetHeight: contentHeight }] = useElement({
		depends: [value]
	});

	const firstChild = React.Children.toArray(children)[0];
	return (
		<div
			suppressHydrationWarning
			className={`${className} ${styles.collapsible}`}
		>
			{trigger && trigger}

			{!disabled && (
				<>
					<div
						style={{
							height: value && !disabled ? `${contentHeight}px` : `0px`,
							transition: transition || 'height 0.3s ease'
						}}
						data-open={value}
						data-content
						className={`${styles.collapsible_content}`}
					>
						{React.isValidElement(firstChild)
							? React.cloneElement(firstChild, {
									ref: contentRef
							  } as React.HTMLAttributes<HTMLElement>)
							: children}
					</div>
				</>
			)}
		</div>
	);
};

export default Collapsible;
