import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage, LoginPage, SignupPage } from '../pages';
import { Header } from '../components';

export const Router = () => {
    return(
        <BrowserRouter>
         <Header/>
            <Routes>
              <Route path="/feed" element={<FeedPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}