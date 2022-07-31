import s from './Burger.module.scss';
import {FiMenu, FiX} from "react-icons/fi";
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
      {isOpened ? <FiX /> : <FiMenu />}
    </ButtonBase>
	)
}