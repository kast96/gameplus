import s from './Logo.module.scss'
import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
    return (
        <Link href='/'>
            <a className={s.logo}>
                <Image layout="fill" src='/logo.svg' alt="Game Plus" />
            </a>
        </Link>
    )
}