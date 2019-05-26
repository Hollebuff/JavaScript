import React, { Component } from 'react';
import '../../index.css';
import './broadcast.css'
import playHead from '../../assets/playerhead.jpg'

class Broadcast extends Component {
    render() {
        return (
            // 控制位置
            <div className='broadcast'>
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
                                <a href=""><img src={playHead} /></a>
                            </div>
                            {/* 进度条 */}
                            <div className='player-info'>
                                <div className='player-info-name'>
                                    <a className='singe-name t-hide' href="">Cross Me (feat. Chance the Rapper & PnB Rock)</a>
                                    <span className='t-hide'>
                                        <a  href="">Ed&nbsp;Sheeran</a>
                                    </span>
                                    <a  className='player-src' href=""></a>
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


                                <a className='icn2 icn-vol' href="javascript:;"></a>
                                <a className='icn2 icn-one' href="javascript:;"></a>
                                
                                {/* 歌曲列表 */}
                                <span className='icn-singe-item'>
                                    <a className='icn2 ico-ply icn-more' href="javascript:;"></a>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    {/* 播放条 */}
                </div>
                <div className='show-bc'>
                    {/* 锁 */}
                    <div className='show--lock-bc'></div>
                </div>



                {/* 添加音乐列表 */}
                <div className='listed'>
                    <div className='listed-head'>
                        {/* 播放列表 */}
                        <div className='head-pl'>
                            <h4>播放列表{0}</h4>
                            <div className='head-do'>
                                <a className='head-add-all' href='javascript'><i className='ico3 icon-add-all'></i>收藏全部</a>
                                <span>|</span>
                                <a className='head-delete-all' href='javascript'><i className='ico3 icon-delete-all'></i>清除</a>
                            </div>
                        </div>

                        {/* 歌词 */}
                        <div className='head-details'>
                            <h4 className='t-hide'>Cross Me (feat. Chance the Rapper & PnB Rock)</h4>
                            <a className='delete-music' href="javascript:;">x</a>
                        </div>
                    </div>


                    <div className='listed-content'>
                        <div className='listed-content-main'></div>
                        <div className='listed-content-gc'></div>

                    </div>

                </div>

                
            </div>
        );
    }
}

export default Broadcast;