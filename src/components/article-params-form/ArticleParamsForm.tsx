import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Spacing } from '../spacing';
import { Separator } from '../separator';


const optionsFont = fontFamilyOptions;
const optionsSize = fontSizeOptions;
const optionsColor = fontColors;
const optionsBGColor = backgroundColors;
const optionsWidth = contentWidthArr;
const spacing = 30;


export const ArticleParamsForm = ({setState} : {setState: React.Dispatch<React.SetStateAction<ArticleStateType>>}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);

	const handleBtnClick = () => {
		setIsOpen(prev => !prev);
	};

	const handleFormSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault();
		setState(formState);
	};


	return (
		<>
			<ArrowButton onClick={handleBtnClick} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Select	
						options={optionsFont}
						onChange={(selected) =>
							setFormState((prev) => ({
								...prev,
								fontFamilyOption: selected,
							}))
						}
						selected={formState.fontFamilyOption}
						title="Шрифт"
					/>
					<Spacing size={spacing} />
					<RadioGroup
						selected={formState.fontSizeOption}
						name='radio'
						onChange={(selected) =>
							setFormState((prev) => ({
								...prev,
								fontSizeOption: selected,
							}))
						}
						options={optionsSize}
						title='размер шрифта'
					/>
					<Spacing size={spacing} />
					<Select	
						options={optionsColor}
						onChange={(selected) =>
							setFormState((prev) => ({
								...prev,
								fontColor: selected,
							}))
						}
						selected={formState.fontColor}
						title="цвет шрифта"
					/>
					<Spacing size={spacing} />
					<Separator />
					<Spacing size={spacing} />
					<Select	
						options={optionsBGColor}
						onChange={(selected) =>
							setFormState((prev) => ({
								...prev,
								backgroundColor: selected,
							}))
						}
						selected={formState.backgroundColor}
						title="цвет фона"
					/>
					<Spacing size={spacing} />
					<Select	
						options={optionsWidth}
						onChange={(selected) =>
							setFormState((prev) => ({
								...prev,
								contentWidth: selected,
							}))
						}
						selected={formState.contentWidth}
						title="ширина контента"
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit'/>
					</div>
				</form>
			</aside>
		</>
	);
};
