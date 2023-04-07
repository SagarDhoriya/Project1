import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllAuction from './components/AllAuction';
import Auction from './components/Auction';
import CreateAuction from './components/CreateAuction';
import AdminPanel from './components/AdminPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' index element={<Home/>} />
                <Route path='contactus/' element={<ContactUs/>} />
                <Route path='auctions' element={<AllAuction/>} />
                <Route path='auction/:id' element={<Auction/>} />
                <Route path='createAuction' element={<CreateAuction/>}/>
                <Route path='addproduct/:id' element={<CreateAuction/>}/>
                <Route path='admin/auctions' element={<AdminPanel/>}/>

                

            </Route>
            <Route path='Login/' element={<Login/>} />
            <Route path='Signin/' element={<RegistrationForm/>} />
        </Routes>
    </BrowserRouter>
    </>
);

