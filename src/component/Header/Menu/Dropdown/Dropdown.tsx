import s from './Dropdown.module.scss';
import { getStateIsOpenedMenu } from '../../../../store/selectors';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

export const Dropdown: React.FC = () => {
	let isOpened = useSelector(getStateIsOpenedMenu)

	return (
		<div className={classNames(s.container, isOpened && s.container_opened)}>

		</div>
	)
}