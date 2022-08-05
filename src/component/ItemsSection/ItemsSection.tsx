import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { GameType } from '../../data/gamesData'
import { Section, SectionPropsType } from '../Section/Section'
import s from './ItemsSection.module.scss'

type PropsType = {
  items: Array<GameType>
}

const ratingBreakpoints = {
  green: 80,
  orange: 50,
  gray: 0,
}

export const ItemsSection: React.FC<SectionPropsType & PropsType> = ({title, detailLink, items}) => {
  return (
    <Section title={title} detailLink={detailLink}>
      <div className={s.list}>
        {items.map(item => (
          <div className={s.item} key={item.name}>
            <div className={s.item_top}>
              <Link href={'/'}>
                <a className={s.item_imageContainer}>
                  <Image className={s.item_image} src={item.image} alt={item.name} layout='fill' />
                </a>
              </Link>
              <div 
                className={classNames(
                  s.item_rating,
                  item.rating >= ratingBreakpoints.green && s.item_rating_green,
                  item.rating < ratingBreakpoints.green && item.rating >= ratingBreakpoints.orange && s.item_rating_orange,
                  item.rating < ratingBreakpoints.orange && item.rating >= ratingBreakpoints.gray && s.item_rating_red,
                  item.rating < ratingBreakpoints.gray && s.item_rating_gray,
                )}
              >{item.rating >= ratingBreakpoints.gray ? item.rating : 'TBD'}</div>
            </div>
            <div>
              <Link href={'/'}>
                <a className={s.item_title}>{item.name}</a>
              </Link>
              <span className={s.item_info}>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}