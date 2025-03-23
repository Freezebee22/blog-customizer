import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Spacing } from '../spacing';
import { Separator } from '../separator';


const optionsFont = fontFamilyOptions;
const optionsSize = fontSizeOptions;
const optionsColor = fontColors;
const optionsBGColor = backgroundColors;
const optionsWidth = contentWidthArr;
const spacing = 30;

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFont, setSelectedFont] = useState(optionsFont[0]);
	const [selectedSize, setSelectedSize] = useState(optionsSize[0]);
	const [selectedColor, setSelectedColor] = useState(optionsColor[0]);
	const [selectedBGColor, setSelectedBGColor] = useState(optionsBGColor[0]);
	const [selectedWidth, setSelectedWidth] = useState(optionsWidth[0]);

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
					<Select	
						options={optionsFont}
						onChange={setSelectedFont}
						selected={selectedFont}
						title="Шрифт"
					/>
					<Spacing size={spacing} />
					<RadioGroup
						selected={selectedSize}
						name='radio'
						onChange={setSelectedSize}
						options={optionsSize}
						title='размер шрифта'
					/>
					<Spacing size={spacing} />
					<Select	
						options={optionsColor}
						onChange={setSelectedColor}
						selected={selectedColor}
						title="цвет шрифта"
					/>
					<Spacing size={spacing} />
					<Separator />
					<Spacing size={spacing} />
					<Select	
						options={optionsBGColor}
						onChange={setSelectedBGColor}
						selected={selectedBGColor}
						title="цвет фона"
					/>
					<Spacing size={spacing} />
					<Select	
						options={optionsWidth}
						onChange={setSelectedWidth}
						selected={selectedWidth}
						title="ширина контента"
					/>

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
