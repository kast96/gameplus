import classNames from 'classnames'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { Button } from '../ui/Button/Button'
import s from './Section.module.scss'

export type SectionPropsType = {
	title?: string
	detailLink?: string
}

export const Section: React.FC<PropsWithChildren<SectionPropsType>> = ({children, title, detailLink}) => {
	const {push} = useRouter()

	return (
		<section className={s.section}>
			<div className={classNames('container', s.container)}>
				<div className={s.header}>
					{title && 
						<h2 className={s.title}>{title}</h2>
					}
					{detailLink &&
						<Button onClick={() => push(detailLink)}>Смотреть все</Button>
					}
				</div>
				<div>
					{children}
				</div>
			</div>
		</section>
	)
}