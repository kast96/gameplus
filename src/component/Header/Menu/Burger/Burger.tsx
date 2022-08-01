import s from './Burger.module.scss';
import { FaTimes, FaBars } from "react-icons/fa";
import { ButtonBase } from '../../../ui/ButtonBase/ButtonBase';
import { getStateIsOpenedMenu } from '../../../../store/selectors';
import { useSelector } from 'react-redux';
import { useActions } from '../../../../hocs/useActions';

export const Burger: React.FC = () => {
	let isOpened = useSelector(getStateIsOpenedMenu)
	const {toggleMenu} = useActions()

	const handleOpen = () => {
		toggleMenu(!isOpened)
	}

	return (
		<ButtonBase className={s.burger} onClick={handleOpen}>
      {isOpened ? <FaTimes /> : <FaBars />}
    </ButtonBase>
	)
}