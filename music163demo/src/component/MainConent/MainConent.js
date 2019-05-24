import React, { Component } from 'react';
import '../../index.css';
import './maincontent.css';
import hotImg from '../../assets/hot1.jpg'


class MainConent extends Component {
    constructor(){
        super()
        this.state = [
            {
                imgs: require('../../assets/hot1.jpg'),
                musicId: 300,
                music: '有过的心动，为何不像电影里从一而终'
            }
        ]
    }

    render() {
        return (
            <div className='main'>
                <div className='content-wrap'>
                    <div className='main-content'>

                        <div className='content-title'>
                            <a className='hot-title' href="https://music.163.com/">热门推荐</a>
                            <div className='hot-nav'>
                                <a href="https://music.163.com/">华语</a>
                                <span className='line'>|</span>
                                <a href="https://music.163.com/">流行</a>
                                <span className='line'>|</span>
                                <a href="https://music.163.com/">摇滚</a>
                                <span className='line'>|</span>
                                <a href="https://music.163.com/">民谣</a>
                                <span className='line'>|</span>
                                <a href="https://music.163.com/">电子</a>
                                <span className='line'>|</span>                            
                            </div>
                            <span className='fr'>
                                <a href="https://music.163.com/">更多</a>
                                <i className='more-tt'></i>
                            </span>
                        </div>

                        <div className='hot-music'>
                            <ul className='hot-music-item'>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                    </p>
                                </li>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                    </p>
                                </li>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                    </p>
                                </li>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                    </p>
                                </li>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                    </p>
                                </li>
                                <li className='hot-music-list'>

                                    <div className='list-item'>
                                        <img src={hotImg} alt=''/>
                                        <a href="https://music.163.com/"> </a>

                                        <div className='list-item-info'>
                                            <span className='icon-listen'></span>
                                            <span className='hot-item-nub'>300万</span>
                                            <a className='icon-play' href="https://music.163.com/0"> </a>
                                        </div>
                                    </div>

                                    <p className='hot-dsc'>
                                        <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                    </p>
                                </li>

                                
                            </ul>


                        </div>

                    </div>


                </div>

                <div className='main-side'>
                    {/* 右边 */}
                </div>
            </div>
        );
    }
}

export default MainConent;