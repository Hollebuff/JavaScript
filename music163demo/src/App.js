import React, { Component } from 'react';
import Head from './component/Head/Head'
import Swiper from './component/Swiper/Swiper';
import MainContent from './component/MainConent/MainConent'



class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Swiper />
                <MainContent />
            </div>
        );
    }
}

export default App;