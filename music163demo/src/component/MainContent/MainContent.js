import React, { Component } from 'react';
import '../../index.css';
import './mainContent.css';
import topImg1 from '../../assets/top1.jpg';
import Side from './Side/Side';
import HotData from '../../json/data';
import newData from '../../json/newdata';
import speedTopData from '../../json/speedTop.json';
import newTopData from '../../json/newTop.json';
import originalTopData from '../../json/originalTop.json';
import PropTypes from 'prop-types';

class MainContent extends Component {
    static propTypes = {
        handlePlayItem: PropTypes.func,
        handleAddItem: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            index: 1,   // 显示第几个滚动图
            showLeft: '-655px',
            contenData: HotData,
            newData: newData,
            speedTopData: speedTopData,
            newTopData: newTopData,
            originalTopData: originalTopData
        }
    }

    handlePre = () => {  // 上一套图
        let { index } = this.state;
        console.log(index)
        if (index === 0) {
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
        if (index === 3) {
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

    handlePlay(music) {
        if(this.props.handlePlayItem)
        this.props.handlePlayItem(music)
    }

    handleAdd(music){
        if(this.props.handleAddItem)
        this.props.handleAddItem(music)
    }

    handleGood(music){
    }

    render() {
        const hotData = this.state.contenData
        const newItem = this.state.newData
        const speedTopData = this.state.speedTopData
        const newTopData = this.state.newTopData
        const originalTopData = this.state.originalTopData

        return (
            <div className='main clearfix'>
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
                                {
                                    hotData.map((item, i) => {
                                        return(
                                            <li className='hot-music-list' key={i}>
                                                <div className='list-item'>
                                                    <img src={item.imgs} alt='' />
                                                    <a href="https://music.163.com/"> </a>
                                                    <div className='list-item-info'>
                                                        <span className='icon-listen'></span>
                                                        <span className='hot-item-nub'>{item.musicId}</span>
                                                        <a className='hot-icon-play' href="javascript:;"
                                                        onClick = {this.handlePlay.bind(this, item.music)}    // 点击播发
                                                        > </a>
                                                    </div>
                                                </div>
                                                <p className='hot-dsc'>
                                                    <a href="https://music.163.com/">{item.music}</a>
                                                </p>
                                            </li>
                                        )
                                    })
                                }
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
                                        {
                                            newItem.map(function(item, index){

                                                return(
                                                    <ul className='new-items' key={index}>
                                                        {/* {console.log('点击滚动数据重新渲染，影响性能！！！！')} */}
                                                        {
                                                            item.subItem.map(function(value, i){
                                                                return(
                                                                    <li>
                                                                        <div className='item-img'>
                                                                            <img className='dt-img' src={value.img} alt='' />
                                                                            <a className='item-dt-bc' href='https://music.163.com/'> </a>
                                                                            <a className='new-icon-play' href='javascript:;'> </a>
                                                                        </div>
                                                                        <div className='item-info'>
                                                                            <p><a href='https://music.163.com/'>{value.singeName}</a></p>
                                                                            <p className='item-name'><a href='https://music.163.com/'>{value.singer}</a></p>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                )
                                            })
                                        }
                                                                     
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
                                                <h3><a href='https://music.163.com/'>云音乐飙升榜</a> </h3>
                                                <div className='type-icon'>
                                                    <a className='type-icon-play' href='javascript:;'></a>
                                                    <a className='type-icon-good' href='javascript:;'></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <ul className='top-lists'>
                                        {
                                            speedTopData.map((item, index) =>{
                                                return(
                                                    <li className='clearfix' key={index} index={index}>
                                                        <span className='top-list-nub'>{index+1}</span>
                                                        <a className='top-list-name' href='https://music.163.com/'>{item.topName}</a>
                                                        <span className='top-icon'>
                                                            <a className='icon-play' href='javascript:;'
                                                            onClick = {this.handlePlay.bind(this, item.topName)}  // 播发
                                                            > </a>
                                                            <a className='icon-add' href='javascript:;' 
                                                            onClick = {this.handleAdd.bind(this, item.topName)}   // 添加
                                                            > </a>
                                                            <a className='icon-good' href='javascript:;'
                                                            onClick = {this.handleGood.bind(this, item.topName)}  // 收藏
                                                            > </a>
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className='top-more'>
                                        <a href='https://music.163.com/'>查看更多&gt;</a>
                                    </div>
                                </div>

                                <div className='top-wrap-item'>
                                    <div className='top-item'>
                                        <div className='top-title'>
                                            <div className='top-img'><img src={topImg1} alt='d'/></div>
                                            <div className='top-type-title'>
                                                <h3><a href='https://music.163.com/'>云音乐新歌榜</a> </h3>
                                                <div className='type-icon'>
                                                    <a className='type-icon-play' href='javascript:;'> </a>
                                                    <a className='type-icon-good' href='javascript:;'> </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <ul className='top-lists'>
                                        {
                                            newTopData.map((item, index) =>{
                                                return(
                                                    <li className='clearfix' key={index} index={index}>
                                                        <span className='top-list-nub'>{index + 1}</span>
                                                        <a className='top-list-name' href='https://music.163.com/'>{item.newName}</a>
                                                        <span className='top-icon'>
                                                            <a className='icon-play' href='javascript:;'
                                                            onClick = {this.handlePlay.bind(this, item.newName)}  // 播发
                                                            > </a>
                                                            <a className='icon-add' href='javascript:;' 
                                                            onClick = {this.handleAdd.bind(this, item.newName)}   // 添加
                                                            > </a>
                                                            <a className='icon-good' href='javascript:;'
                                                            onClick = {this.handleGood.bind(this, item.newName)}  // 收藏
                                                            > </a>
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className='top-more'>
                                        <a href='https://music.163.com/'>查看更多&gt;</a>
                                    </div>
                                </div>
                                <div className='top-wrap-item top-last-w'>
                                    <div className='top-item'>
                                        <div className='top-title'>
                                            <div className='top-img'><img src={topImg1} alt=''/></div>
                                            <div className='top-type-title'>
                                                <h3><a href='https://music.163.com/'>网易原创歌曲榜</a> </h3>
                                                <div className='type-icon'>
                                                    <a className='type-icon-play' href='javascript:;'> </a>
                                                    <a className='type-icon-good' href='javascript:;'> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className='top-lists'>
                                       {
                                            originalTopData.map((item, index) =>{
                                                return(
                                                    <li className='clearfix' key={index} index={index}>
                                                        <span className='top-list-nub'>{index + 1}</span>
                                                        <a className='top-list-name' href='https://music.163.com/'>{item.originalName}</a>
                                                        <span className='top-icon'>
                                                            <a className='icon-play' href='javascript:;'
                                                            onClick = {this.handlePlay.bind(this, item.originalName)}  // 播发
                                                            > </a>
                                                            <a className='icon-add' href='javascript:;' 
                                                            onClick = {this.handleAdd.bind(this, item.originalName)}   // 添加
                                                            > </a>
                                                            <a className='icon-good' href='javascript:;'
                                                            onClick = {this.handleGood.bind(this, item.originalName)}  // 收藏
                                                            > </a>
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className='top-more'>
                                        <a href='https://music.163.com/'>查看更多&gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Side />
                {/* <div style={{ height: '400px' }}></div> */}
            </div>
        );
    }
}

export default MainContent;