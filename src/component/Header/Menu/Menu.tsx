import { Burger } from './Burger/Burger';
import { Dropdown } from './Dropdown/Dropdown';
import s from './Menu.module.scss';

export const Menu: React.FC = () => {
	return (
		<div className={s.container}>
			<Burger />
			<Dropdown />
		</div>
	)
}