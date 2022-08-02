import s from "./Copyright.module.scss"

export const Copyright: React.FC = () => {
	let date = new Date();

  return (
		<span className={s.copyright}>© {date.getFullYear()} - GamePlus</span>
  )
}