import React, { Component } from 'react';
import '../../../index.css';
import './side.css'
import singerImg from '../../../assets/side.jpg'


class Side extends Component {
    render() {
        return (
            <div className='side'>
                <div className='side-login'>
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a href='https://music.163.com/'>用户登录</a>
                </div>
                <div className='side-info'>
                    <div className='side-subtitle clearfix'>
                        <span>入驻歌手</span>
                        <a href='https://music.163.com/'>查看全部&gt;</a>
                    </div>
                    <div className='side-singer clearfix'>
                    <ul className='clearfix'>
                        <li className='singer-list clearfix'>
                            <a className='singer-item' href='https://music.163.com/'>
                                <div><img src={singerImg}/></div>
                                <div className='singer-name'>
                                    <h4>张惠妹aMEI</h4>
                                    <p>台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>
                        <li className='singer-list clearfix'>
                            <a className='singer-item' href='https://music.163.com/'>
                                <div><img src={singerImg}/></div>
                                <div className='singer-name'>
                                    <h4>张惠妹aMEI</h4>
                                    <p>台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>
                        <li className='singer-list clearfix'>
                            <a className='singer-item' href='https://music.163.com/'>
                                <div><img src={singerImg}/></div>
                                <div className='singer-name'>
                                    <h4>张惠妹aMEI</h4>
                                    <p>台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>
                        <li className='singer-list clearfix'>
                            <a className='singer-item' href='https://music.163.com/'>
                                <div><img src={singerImg}/></div>
                                <div className='singer-name'>
                                    <h4>张惠妹aMEI</h4>
                                    <p>台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>
                        <li className='singer-list clearfix'>
                            <a className='singer-item' href='https://music.163.com/'>
                                <div><img src={singerImg}/></div>
                                <div className='singer-name'>
                                    <h4>张惠妹aMEI</h4>
                                    <p>台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div className='to-singer'>
                        <a href='https://music.163.com/'>申请成为网易音乐人</a>
                    </div>
                    </div>
                    
                    <div className='anchor'>
                        <span>入驻歌手</span>
                    </div>

                    <div className='anchor-wrap'>
                        <ul>
                            <li className='anchor-lists'>
                                <div className='anchor-head'><a href='https://music.163.com/'></a> </div>
                                <div className='anchor-name'>
                                    <p><a href='https://music.163.com/'>陈立</a></p>
                                    <p>心理学家、美食家陈立教授</p>
                                </div>
                                
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Side;