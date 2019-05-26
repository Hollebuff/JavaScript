import React, { Component } from 'react';
import Head from './component/Head/Head'
import Swiper from './component/Swiper/Swiper';
import MainContent from './component/MainContent/MainContent';
import Footer from './component/Footer/Footer'
import Broadcast from './component/Broadcast/Broadcast'

import './index.css'



class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Swiper />
                <MainContent />
                <Footer />
                <Broadcast />
            </div>
        );
    }
}

export default App;