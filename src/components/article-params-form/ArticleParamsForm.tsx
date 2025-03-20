import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { OnClick } from '../arrow-button/ArrowButton';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleBtnClick = () => {
		setIsOpen(prev => !prev);
	}

	return (
		<>
			<ArrowButton onClick={handleBtnClick} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
