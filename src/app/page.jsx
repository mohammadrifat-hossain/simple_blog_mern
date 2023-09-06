import Image from 'next/image'
import HomeMain from './components/homemain'
import ContentPage from './components/contentpage'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <HomeMain />
      <ContentPage />
    </div>
  )
}
