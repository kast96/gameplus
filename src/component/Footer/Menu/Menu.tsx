import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import s from "./Menu.module.scss"

export const Menu: React.FC = () => {
	const items = [
		{href: '/', title: 'Главная'},
		{href: '/contacts', title: 'Контакты'},
	] as Array<MenuItemType>

	const {pathname, events} = useRouter()

  return (
		<ul className={s.container}>
			{items.map(item => {
				const isActive = pathname === item.href;
				return (
					<li className={s.item} key={item.title}>
						<Link href={item.href}>
							<a className={classNames(s.link, isActive && s.link_active)}>{item.title}</a>
						</Link>
					</li>
				)
			})}
		</ul>
  )
}

type MenuItemType = {
	href: string
	title: string
}