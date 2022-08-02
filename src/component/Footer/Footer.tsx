import { Logo } from "../ui/Logo/Logo"
import { Copyright } from "./Copyright/Copyright"
import s from "./Footer.module.scss"
import { Menu } from "./Menu/Menu"

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
				<div className={s.container}>
					<div className={s.left}>
						<Logo />
					</div>
					<div className={s.menu}>
						<Menu />
					</div>
					<div className={s.right}>
						<Copyright />
					</div>
				</div>
			</div>
    </footer>
  )
}