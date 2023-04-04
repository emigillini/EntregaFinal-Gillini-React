import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { Route, Routes, Navigate } from 'react-router';
import { Footer } from '../components/Footer/Footer';
import { Banner } from '../components/Banner/Banner';

export const PublicRoutes=()=>{

    return(

    <div className="App">
    
    <Banner discountAmount={20} couponCode={"Cupon1234"}/>

    <Routes>
        <Route path='/login' element={ <LoginScreen /> }/>
        <Route path='*' element={ <Navigate to={"/login"}/> }/>
    
    </Routes>
    <Footer/>
    
    </div>
    )
}