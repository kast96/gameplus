import type { NextPage } from 'next'
import { Layout } from '../src/component/Layout/Layout'
import { MainSlider } from '../src/component/MainSlider/MainSlider'

const Index: NextPage = () => {
  return (
    <Layout>
      <MainSlider />
    </Layout>
  )
}

export default Index