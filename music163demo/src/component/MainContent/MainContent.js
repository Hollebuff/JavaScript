import React, { Component } from 'react';
import '../../index.css';
import './mainContent.css';
import hotImg from '../../assets/hot1.jpg';
import newImg1 from '../../assets/new1.jpg';
import newImg2 from '../../assets/new2.jpg';
import newImg3 from '../../assets/new3.jpg';
import topImg1 from '../../assets/top1.jpg';

import Side from './Side/Side';


class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            index: 1,   // 显示第几个滚动图
            showLeft: '-655px'
        }
        // [
        //     {
        //         imgs: require('../../assets/hot1.jpg'),
        //         musicId: 300,
        //         music: '有过的心动，为何不像电影里从一而终'
        //     },
        //     {
        //     }
        // ]
    }

    handlePre = () => {  // 上一套图
        let { index } = this.state;
        console.log(index)
        if (index == 0) {
            index = 2
        }
        else {
            index -= 1;
        }
        this.setState({
            index,
            showLeft: '-' + index * 665 + 'px'
        })
    }

    handleNext = () => {     // 下一张
        let { index } = this.state;
        if (index == 3) {
            index = 0;
        }
        else {
            index++;
        }
        this.setState({
            index: index,
            showLeft: '-' + index * 665 + 'px'
        })
    }

    render() {
        return (
            <div className='main'>
                    <div className='content-wrap'>
                        {/* 主要内容 */}
                        <div className='main-content'>

                            <div className='content-title clearfix'>
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

                            <div className='hot-music clearfix'>
                                <ul className='hot-music-item'>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                        </p>
                                    </li>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                        </p>
                                    </li>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                        </p>
                                    </li>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                        </p>
                                    </li>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">有过的心动，为何不像电影里从一而终</a>
                                        </p>
                                    </li>
                                    <li className='hot-music-list'>

                                        <div className='list-item'>
                                            <img src={hotImg} alt='' />
                                            <a href="https://music.163.com/"> </a>

                                            <div className='list-item-info'>
                                                <span className='icon-listen'></span>
                                                <span className='hot-item-nub'>300万</span>
                                                <a className='hot-icon-play' href="https://music.163.com/0"> </a>
                                            </div>
                                        </div>

                                        <p className='hot-dsc'>
                                            <a href="https://music.163.com/">【旧日时光】你的久叶舟9叶舟9别重逢后-NJ叶舟99万</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* 新碟上架 */}
                            <div className='content-title'>
                                <a className='hot-title' href="https://music.163.com/">新碟上架</a>
                                <span className='fr'>
                                    <a href="https://music.163.com/">更多</a>
                                    <i className='more-tt'></i>
                                </span>
                            </div>

                            <div className='new'>
                                <div className='new-wrap clearfix'>
                                    <a className='new-pre' onClick={(e) => this.handlePre(e)} href='javascript:;'>&lt;</a>
                                    <div className='new-items-wra'>
                                        <div className='new-side-wrap clearfix'
                                            style={{
                                                marginLeft: this.state.showLeft,
                                                transform: '2s',
                                                transitionDuration: '1s',
                                                transitionTimingFunction: 'ease-out'
                                            }}
                                        >
                                            {/* 
                                        style={{
                                            marginLeft: this.state.showLeft,
                                            transform: '2s',
                                            transitionDuration: '1s',
                                            transitionTimingFunction: 'ease-out'
                                            }}
                                        > */}
                                            <ul className='new-items'>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>过渡1</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>过渡1</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>

                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='new-items'>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>AAAAA</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>AAAAA</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>

                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='new-items'>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg2} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg2} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg2} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>

                                                        <img className='dt-img' src={newImg2} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg2} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='new-items'>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>BBBB</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>BB</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>

                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg3} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='new-items'>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>过渡2</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>过渡2</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>

                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='item-img'>
                                                        <img className='dt-img' src={newImg1} alt='' />
                                                        <a className='item-dt-bc' href='https://music.163.com/'></a>
                                                        <a className='new-icon-play' href='javascript:;'></a>
                                                    </div>

                                                    <div className='item-info'>
                                                        <p><a href='https://music.163.com/'>路过人间</a></p>
                                                        <p className='item-name'><a href='https://music.163.com/'>郁可唯</a></p>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <a className='new-next' onClick={(e) => this.handleNext(e)} href='javascript:;'>&gt;</a>

                                </div>

                            </div>

                            {/* 榜单 */}
                            <div className='content-title'>
                                <a className='hot-title' href="https://music.163.com/">榜单</a>
                                <span className='fr'>
                                    <a href="https://music.163.com/">更多</a>
                                    <i className='more-tt'></i>
                                </span>
                            </div>

                            <div className='top'>
                                <div className='top-wrap'>
                                    <div className='top-wrap-item'>
                                        <div className='top-item'>
                                            <div className='top-title'>

                                                <div className='top-img'><img src={topImg1} /></div>

                                                <div className='top-type-title'>
                                                    <h3><a href=''>云音乐飙升榜</a> </h3>
                                                    <div className='type-icon'>
                                                        <a className='type-icon-play' href='javascript:;'></a>
                                                        <a className='type-icon-good' href='javascript:;'></a>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <ul className='top-lists'>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>情深深雨蒙蒙</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>Cross Me (feat. Chance the Rapper & PnB Rock)</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>

                                        </ul>
                                        <div className='top-more'>
                                            <a href=''>查看更多&gt;</a>
                                        </div>
                                    </div>
                                    <div className='top-wrap-item'>
                                        <div className='top-item'>
                                            <div className='top-title'>

                                                <div className='top-img'><img src={topImg1} /></div>

                                                <div className='top-type-title'>
                                                    <h3><a href=''>云音乐飙升榜</a> </h3>
                                                    <div className='type-icon'>
                                                        <a className='type-icon-play' href='javascript:;'></a>
                                                        <a className='type-icon-good' href='javascript:;'></a>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <ul className='top-lists'>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>情深深雨蒙蒙</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>Cross Me (feat. Chance the Rapper & PnB Rock)</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>

                                        </ul>
                                        <div className='top-more'>
                                            <a href=''>查看更多&gt;</a>
                                        </div>
                                    </div>
                                    <div className='top-wrap-item top-last-w'>
                                        <div className='top-item'>
                                            <div className='top-title'>

                                                <div className='top-img'><img src={topImg1} /></div>

                                                <div className='top-type-title'>
                                                    <h3><a href=''>云音乐飙升榜</a> </h3>
                                                    <div className='type-icon'>
                                                        <a className='type-icon-play' href='javascript:;'></a>
                                                        <a className='type-icon-good' href='javascript:;'></a>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <ul className='top-lists'>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>情深深雨蒙蒙</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>
                                            <li className='clearfix'>
                                                <span className='top-list-nub'>1</span>
                                                <a className='top-list-name' href=''>Cross Me (feat. Chance the Rapper & PnB Rock)</a>
                                                <span className='top-icon'>
                                                    <a className='icon-play' href=''></a>
                                                    <a className='icon-add' href=''></a>
                                                    <a className='icon-good' href=''></a>
                                                </span>
                                            </li>

                                        </ul>
                                        <div className='top-more'>
                                            <a href=''>查看更多&gt;</a>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                <Side />
                <div style={{ height: '400px' }}></div>
            </div>
        );
    }
}

export default MainContent;