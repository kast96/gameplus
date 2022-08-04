import classNames from "classnames"
import { FaArrowRight } from "react-icons/fa"
import Slider from "react-slick"
import { Button } from "../ui/Button/Button"
import s from './MainSlider.module.scss'

export const MainSlider: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	const items = [
		{
			image: '/images/hogwarts-legacy.webp',
			title: 'Hogwarts Legacy',
			description: 'это захватывающая ролевая игра с открытым миром, который известен вам по книгам о Гарри Поттере. Станьте участником событий, которые разворачиваются на территории Хогвартса в конце XIX века.',
			link: '/',
		},
		{
			image: '/images/hogwarts-legacy.webp',
			title: 'Hogwarts Legacy 2',
			description: 'это захватывающая ролевая игра с открытым миром, который известен вам по книгам о Гарри Поттере. Станьте участником событий, которые разворачиваются на территории Хогвартса в конце XIX века.',
			link: '/',
		},
	] as Array<SliderType>

	return (
		<Slider className={s.slider} {...settings}>
			{items.map((item, key) => (
				<div key={key}>
					<div className={s.item} style={{backgroundImage: `url("${item.image}")`}}>
						<div className={classNames(s.container, 'container')}>
							<div className={s.inner}>
								{item.title &&
									<div className={s.title}>{item.title}</div>
								}
								{item.description &&
									<div className={s.description}>{item.description}</div>
								}
								{item.link &&
									<Button endIcon={<FaArrowRight />}>
										Подробнее
									</Button>
								}
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
}

type SliderType = {
	image: string
	title?: string
	description?: string
	link?: string
}