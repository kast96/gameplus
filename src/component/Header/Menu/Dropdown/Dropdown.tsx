import s from './Dropdown.module.scss';
import { getStateIsOpenedMenu } from '../../../../store/selectors';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { FaAddressBook, FaFolder, FaHome } from "react-icons/fa";
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Dropdown: React.FC = () => {
	const items = [
		[
        	{href: '/', title: 'Главная', icon: <FaHome />},
        	{href: '/contacts/', title: 'Контакты', icon: <FaAddressBook />},
		],
		[
			{title: 'По категриям', icon: <FaFolder />, childs: [
				{href: '/categories/actions/', title: 'Actions'},
				{href: '/categories/rpg/', title: 'RPG'},
				{href: '/categories/shooters/', title: 'Shooters'},
			]},
		],
	] as Array<Array<MenuItemType>>

	let isOpened = useSelector(getStateIsOpenedMenu)
	const {pathname, events} = useRouter()

	return (
		<div className={classNames(s.container, isOpened && s.container_opened)}>
			<ul className={s.list}>
				{items.map((category, key) => {
					return (
						<li key={key} className={s.category}>
							<ul>
								{category.map(item => {
									const isActive = pathname === item.href;
									return (
										<li key={item.title} className={s.item}>
											{item.href &&
												<>
													<Link href={item.href}>
														<a className={classNames(s.link, isActive && s.link_active)}>
															{item.icon}
															{item.title}
														</a>
													</Link>
													{item.childs &&
														<DropdownSubmenu childs={item.childs} />
													}
												</>
											}
											{!item.href &&
												<>
													<span className={classNames(s.link, s.link_static, isActive && s.link_active)}>
														{item.icon}
														{item.title}
													</span>
													{item.childs &&
														<DropdownSubmenu childs={item.childs} />
													}
												</>
											}
										</li>
									)
								})}
							</ul>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const DropdownSubmenu: React.FC<{childs: Array<MenuItemType>}> = ({childs}) => {
	const {pathname, events} = useRouter()

	return (
		<>
			{childs &&
				<ul className={s.childs}>
					{childs.map(item => {
						const isActive = pathname === item.href
						return (
							<li key={item.title} className={s.item}>
								{item.href &&
									<Link href={item.href}>
										<a className={classNames(s.link, isActive && s.link_active)}>
											{item.icon}
											{item.title}
										</a>
									</Link>
								}
							</li>
						)
					})}
				</ul>
			}
		</>
	)
}

type MenuItemType = {
	title: string
	href?: string
	icon?: JSX.Element
	childs?: Array<MenuItemType>
}