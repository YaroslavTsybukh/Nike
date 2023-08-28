import { Layout } from '../../layout/Layout.tsx'
import { BlockImages } from './BlockImages.tsx'
import { Form } from './Form.tsx'

export const Admin = () => {
    return (
        <Layout>
            <section>
                <div className='container mx-auto px-4'>
                    <div className='ml-[141px] mt-[110px] flex justify-between gap-x-10'>
                        <BlockImages />
                        <Form />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
