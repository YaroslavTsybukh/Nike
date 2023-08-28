import { Home } from './components/screens/home/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin } from './components/screens/admin/Admin.tsx'

export const App = () => {
    return (
        <BrowserRouter>
            <div className='relative h-960 bg-home-image bg-cover bg-no-repeat'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
