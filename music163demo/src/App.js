import React, { Component } from 'react';
import Head from './component/Head/Head'
import Swiper from './component/Swiper/Swiper';
import MainContent from './component/MainContent/MainContent';
import Footer from './component/Footer/Footer'
import Broadcast from './component/Broadcast/Broadcast'

import './index.css';
// import './test.scss'
import PropTypes from 'prop-types'


class App extends Component {
    static propTypes = {
        handlePlayItem: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            listSinge: [],         // 歌曲列表
            volNub: '',          // 音量
            showTopStatus : false,   // 滚动条默认隐藏
            singeListItem: [            // 添加音乐列表
                {
                    singeName: '你要的全拿走',
                    singer: '花粥',
                    singerTime: '05:12'
                },
                {
                    singeName: '不要的全部留下',
                    singer: '周周',
                    singerTime: '03:12'
                },
                {
                    singeName: '你要的全拿走',
                    singer: '花粥',
                    singerTime: '02:12'
                }
            ],
            singeIng: '房东的猫',   // 正在播放的歌
            addStatus: false
        }
    }

    componentDidMount() {
        // console.log('APP', Object.prototype.toString.call(this.state.singeListItem))
        // console.log(this.state.singeListItem.length)
        window.addEventListener('scroll', this.handleShowTop.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleShowTop.bind(this));
    }
    handleShowTop (e){
        const topHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (topHeight > 400){
            setTimeout(() => {
                    this.setState({
                    showTopStatus : true
                })
            }, 500)
        }
        else if(topHeight < 400){
            setTimeout(() => {
                this.setState({
                showTopStatus : false
                })
            }, 500)
        }
    }

    //  实现 全屏点击播发
    handlePlay(music) {
        const arr = {
            singeName: music,
            singer: '周周',
            singerTime: '03:12'
        }
        const singeItemList = this.state.singeListItem
        // singeItemList.push(arr)
        console.log(singeItemList)

        this.setState({
            singeIng: music,
            singeListItem: [...singeItemList, arr],    // 播发同时新增播发歌曲列表
            addStatus: true
        })
    }

    handleAdd(music){
         const arr = {
            singeName: music,
            singer: '周周',
            singerTime: '03:12'
        }
        const singeItemList = this.state.singeListItem
        this.setState({
            singeListItem: [...singeItemList, arr],    // 播发同时新增播发歌曲列表
            addStatus: true
        })
    }
    //  清空歌曲
    handleDeleteList(){
        this.setState({
            singeListItem: []
        })
    }
    // 单条删除
    handleDeleteSinge(index){
        const singeListItem = this.state.singeListItem
        singeListItem.splice(index, 1)
        this.setState({
            singeListItem
        })
    }

    render() {
        return (
            <div>
                <Head />
                <Swiper />
                <MainContent 
                 handlePlayItem = { this.handlePlay.bind(this)}   // 点击播放
                 handleAddItem = { this.handleAdd.bind(this)}     // 添加到列表
                />

                <Footer 
                 showTopStatus = { this.state.showTopStatus }   // 返回顶部
                />

                <Broadcast 
                 singeListItem = {this.state.singeListItem}      // 传递组件，渲染正在播放的列表
                 singeIng = { this.state.singeIng }          // 播发条播放的歌曲
                 addStatus = { this.state.addStatus}
                 handleDeleteList = { this.handleDeleteList.bind(this)}
                 handleDeleteSinge = { this.handleDeleteSinge.bind(this)}
                />
            </div>
        )
    }
}

export default App;