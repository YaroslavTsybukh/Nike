import { Layout } from '../../layout/Layout.tsx'
import { InfoBlock } from './InfoBlock.tsx'

export const Home = () => {
    return (
        <div className='h-960 relative bg-home-image bg-cover bg-no-repeat'>
            <Layout>
                <section>
                    <div className='container mx-auto px-4'>
                        <InfoBlock />
                    </div>
                </section>
            </Layout>
        </div>
    )
}
