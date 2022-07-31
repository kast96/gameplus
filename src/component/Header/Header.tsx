import { Logo } from '../ui/Logo/Logo';
import s from './Header.module.scss';
import { Menu } from './Menu/Menu';

export const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.container}>
					<div className={s.left}>
						<Menu />
						<Logo />
					</div>
				</div>
			</div>
		</header>
	)
}