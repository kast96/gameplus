import { TextField } from '../../ui/TextField/TextField';
import s from './Search.module.scss';

export const Search: React.FC = () => {
	const submitHandler = () => {
		console.log('submit');
	}

	return (
		<div className={s.container}>
			<form onSubmit={submitHandler} action="#">
				<TextField type="search" placeholder='Поиск' />
			</form>
		</div>
	)
}