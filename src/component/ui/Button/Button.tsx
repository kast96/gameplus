import { ButtonHTMLAttributes, memo, PropsWithChildren, ReactNode } from 'react';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import classNames from 'classnames';
import s from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	animationDuration?: number;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(({ children, startIcon = null, endIcon = null, className, animationDuration, ...props }) => {

	return (
		<ButtonBase
			data-testid='button'
			ripple
			startIcon={startIcon}
			endIcon={endIcon}
			animationDuration={animationDuration}
			className={classNames(s.btn, s.regular, className)}
			{...props}
		>
			{children}
		</ButtonBase>
	)
})