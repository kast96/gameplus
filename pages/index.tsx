import type { NextPage } from 'next'
import { ItemsSection } from '../src/component/ItemsSection/ItemsSection'
import { Layout } from '../src/component/Layout/Layout'
import { MainSlider } from '../src/component/MainSlider/MainSlider'

const Index: NextPage = () => {
  const itemsNew = [
    {
      name: 'Бэтмен',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 79,
    },
    {
      name: 'Бэтмен 2',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 19,
    },
    {
      name: 'Бэтмен 3',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 89,
    },
    {
      name: 'Бэтмен 4',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 89,
    },
    {
      name: 'Бэтмен 5',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 89,
    },
    {
      name: 'Бэтмен 6',
      year: 2022,
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/360',
      rating: 89,
    },
  ]

  return (
    <Layout>
      <MainSlider />
      <ItemsSection title={'Новые игры'} detailLink={'/'} items={itemsNew} />
    </Layout>
  )
}

export default Index