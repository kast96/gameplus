import type { NextPage } from 'next'
import { About } from '../src/component/About/About'
import { ItemsSection } from '../src/component/ItemsSection/ItemsSection'
import { Layout } from '../src/component/Layout/Layout'
import { MainSlider } from '../src/component/MainSlider/MainSlider'
import { Section } from '../src/component/Section/Section'
import { gamesData } from '../src/data/gamesData'

const Index: NextPage = () => {
  return (
    <Layout>
      <MainSlider />
      <ItemsSection title={'Новые игры'} detailLink={'/'} items={gamesData.slice(0, 10)} />
      <Section>
        <About />
      </Section>
    </Layout>
  )
}

export default Index