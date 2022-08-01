import s from './Header.module.scss';
import { Logo } from '../ui/Logo/Logo';
import { Menu } from './Menu/Menu';
import { Search } from './Search/Search';
import Link from 'next/link';

export const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.container}>
					<div className={s.left}>
						<Menu />
						<Logo />
					</div>
					<div className={s.search}>
						<Search />
					</div>
					<div className={s.right}>
						<Link href={'/login'}>
							<a className={s.link}>Войти</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}