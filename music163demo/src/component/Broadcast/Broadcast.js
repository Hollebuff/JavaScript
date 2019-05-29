import React, { Component } from 'react';
import '../../index.css';
import './broadcast.css';
import playHead from '../../assets/playerhead.jpg';
import PropTypes from 'prop-types';


class Broadcast extends Component {
    static propTypes = {
        handleDeleteSinge: PropTypes.func
    }
    constructor(props){
        super(props)
        this.state = {
            barStatus: this.props.addStatus || false,   // 底部播发条默认隐藏
            barLockStatus: false,   // 底部播发条默认不锁定        
            showListSinge: false  // 音乐列表默认隐藏
        }
    }

    handleMouseEnter = () =>{
        const { barLockStatus } = this.state
        if(!barLockStatus){    // 没有锁定
            this.setState({
                barStatus: true
            })
        }
        else{
            return null
        }
    }

    handleMouseLeave = () =>{
        const { barLockStatus } = this.state
        if(!barLockStatus){    // 没有锁定
            this.setState({
                barStatus: false
            })
        }
        // else{
        //     if(!this.state.barStatus){
        //         this.setState({
        //             barStatus: true
        //         })
        //     }
        // }
    }
    //  锁定
    handleOnclickShow = () =>{
        this.setState({
            barLockStatus: !this.state.barLockStatus
        })
    }
    // 播放列表控制
    handlegingeList = () =>{
        this.setState({
            showListSinge : !this.state.showListSinge
        })
    }
    handleHideSinge = () => {
        this.setState({
            showListSinge : false
        })
    }
    handleDeleteList = (e) =>{
        this.props.handleDeleteList(e)
    }
    // 删除单条数据
    handleDeleteSinge = (index) => {
        if(this.props.handleDeleteSinge)
        this.props.handleDeleteSinge(index)

    }


    render() {
        const { barStatus, showStyle, hideStyle, barLockStatus, showListSinge } = this.state;
        return (
            // 控制位置
            <div className='broadcast'
             style = { barStatus ? 
             {bottom:'0px',transform: '1s'} : 
             {bottom:'-44px',transform: '1s', transitionDelay: '1.5s', transitionDuration: '1s'} }
             onMouseEnter={this.handleMouseEnter}
             onMouseLeave={this.handleMouseLeave}
            >
                { console.log(showStyle, hideStyle) }
                {/* 控制定位 */}
                <div className='broadcast-control'>
                    {/* 长背景 */}
                    <div className='broadcast-bc'>
                        <div className='broadcast-wrap'>
                            <div className='player-control'>
                                <a className='ct-pre' href="javascript:;" title="上一首(ctrl+←)">上一首</a>
                                <a className='ct-ply' href="javascript:;" title="播放/暂停">播放/暂停</a>
                                <a className='ct-next' href="javascript:;" title="下一首(ctrl+→)">下一首</a>
                            </div>
                            <div className='player-head'>
                                <a href=""><img src={playHead} alt=''/></a>
                            </div>
                            {/* 进度条 */}
                            <div className='player-info'>
                                <div className='player-info-name'>
                                    {/* {console.log('播放中', this.props.singeIng)} */}
                                    {/* 正在播放的歌曲 */}
                                    <a className='singe-name t-hide' href="">{this.props.singeIng}</a>    
                                    <span className='t-hide'>
                                        <a  href="">Ed&nbsp;Sheeran</a>
                                    </span>
                                    <a className='player-src' href="javascript:;"> </a>
                                </div>
                                {/* 时间条 */}
                                <div className='player-info-prg'>
                                    <div className='prg-long'>
                                        <span className='rdy'></span>
                                        <span className='cur btn'>
                                            <i className='selete-ply btn'></i>
                                        </span>
                                    </div>
                                    
                                    <span className='prg-time'><em>00:17</em> / 03:26</span>

                                </div>

                            </div>
                            {/* 收藏夹 */}
                            <div className='player-add'>
                                <a className='icn-list icn2' href="javascript:;" title='收藏'>收藏</a>
                                <a className='icn-share icn2' href="javascript:;" title='分享'>分享</a>
                            </div>
                            <div className='icn-player-list'>

                                {/* 音量 */}
                                <div className='m-vol'>
                                    <div className='m-vol-bc ico-ply'></div>
                                    <div className='m-vol-cur'>
                                        <div className='vol-cur ico-ply' style={{height: '100px'}}></div>
                                        <span className='vol-alpha'></span>

                                    </div>

                                </div>
                                <a className='icn2 icn-vol' href="javascript:;"> </a>
                                <a className='icn2 icn-one' href="javascript:;"> </a>
                                
                                {/* 歌曲列表 */}
                                <span className='icn-singe-item'>
                                    <a className='icn2 ico-ply icn-more' href="javascript:;"
                                     onClick = {this.handlegingeList}
                                    >
                                    {/* 歌曲数量 */}
                                    {/* 1 */}
                                    {this.props.singeListItem.length}
                                    </a>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    {/* 播放条 */}
                </div>
                <div className='show-bc'
                onClick={this.handleOnclickShow}
                >
                    {/* 锁 */}
                    <div className='show--lock-bc' style={barLockStatus ? { backgroundPosition: '-100px -380px'}: {}}></div>
                </div>

                {/* 添加音乐列表 */}
                <div className='listed'
                style = {
                   showListSinge ?{ display:'block' } : {}
                }
                >
                    <div className='listed-head'>
                        {/* 播放列表 */}
                        <div className='head-pl'>
                            <h4>播放列表&nbsp;({this.props.singeListItem.length})</h4>
                            <div className='head-do'>
                                <a className='head-add-all' href='javascript'><i className='ico3 icon-add-all'></i>收藏全部</a>
                                <span>|</span>
                                <a className='head-delete-all' href='javascript:;'
                                onClick = { this.handleDeleteList}
                                ><i className='ico3 icon-delete-all'></i>清除</a>
                            </div>
                        </div>

                        {/* 歌词 */}
                        <div className='head-details'>
                            <h4 className='t-hide'>Cross Me (feat. Chance the Rapper & PnB Rock)</h4>
                            <a className='delete-music' href="javascript:;"
                            onClick = { this.handleHideSinge}
                            >x</a>
                        </div>
                    </div>

                    {/* 播发列表 */}
                    <div className='listed-content'>
                        <div className='listed-content-main'>
                            <ul>
                            {
                                this.props.singeListItem.map((item, i) => {
                                    return(
                                        <li className='listed-item clearfix' key = { i } index={i}>
                                            <div className='list-playing'><i className='icon-playing'></i></div>
                                            <div className='list-singe'>{item.singeName}</div>
                                            <div className='list-control'>
                                                <i className='ico3 icon-add-all'></i>
                                                <i className='ico3 icn2-inline'></i>
                                                <i className='icn2 icn2-inline icon-down'></i>
                                                <i className='ico3 icon-delete-all'
                                                onClick = {this.handleDeleteSinge.bind(i)}      // 删除播发列表的歌曲
                                                ></i>
                                            </div>
                                            <div className='list-info'>
                                                <span>{item.singer}</span>
                                                <span>{item.singerTime}</span>
                                                <span className='list-info-srcou'></span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>

                        <div className='listed-content-gc'></div>

                    </div>

                </div>

                
            </div>
        );
    }
}

export default Broadcast;