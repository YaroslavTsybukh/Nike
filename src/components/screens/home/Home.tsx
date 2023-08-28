import { Layout } from '../../layout/Layout.tsx'
import { InfoBlock } from './InfoBlock.tsx'
import { Carousel } from './carousel/Carousel.tsx'

export const Home = () => {
    return (
        <Layout>
            <section>
                <div className='container mx-auto px-4'>
                    <div className='ml-[141px] mt-[110px]'>
                        <InfoBlock />
                        <Carousel />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
