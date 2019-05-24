import React, { Component } from 'react';
import '../../index.css';
import './head.css'

class Head extends Component {
    constructor(){
        super()
        this.state = {
            loginshow: false
        }
    }

    handleEnter = () =>{
        this.setState({
            loginshow: true
        })
    }
    handleLeave = () =>{
        this.setState({
            loginshow: false
        })
    }

    render() {
        let styleshow = {
            display: (this.state.loginshow)? 'block':'none'
        }
        return (
            <div className='head'>
                <div className='head-top clearfix'>
                    <div className='headnav'>
                        <h1 className='logo bg'><a href="https://music.163.com/"> </a></h1>
                        <ul className='nav'>
                            <li className='z-slt'><a href="https://music.163.com/">发现音乐</a></li>
                            <li><a href="https://music.163.com/">我的音乐</a></li>
                            <li><a href="https://music.163.com/">朋友</a></li>
                            <li><a href="https://music.163.com/">商城</a></li>
                            <li><a href="https://music.163.com/">音乐人</a></li>
                            <li><a href="https://music.163.com/">下载客户端</a></li>
                        </ul>

                        <div className='nav-input'>
                            <input placeholder='音乐/视频/电台/用户'/>
                        </div>

                        <div className='head-other'>
                            <a className='other' href="https://music.163.com/">创作者中心</a>
                        </div>

                        <div className='head-login' onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                            <a className='login' href="https://music.163.com/">登录</a>
                            {/* <ul className='head-login-item' style={styleshow}> */}
                            <ul className='head-login-item'>
                                <li><a href="https://music.163.com/"><i className='icn icn-mb'></i> <em>手机号登录</em></a></li>
                                <li><a href="https://music.163.com/"><i className='icn icn-wx'></i><em>微信登录</em></a></li>
                                <li><a href="https://music.163.com/"><i className='icn icn-qq'></i><em>QQ登录</em></a></li>
                                <li><a href="https://music.163.com/"><i className='icn icn-sn'></i><em>新浪微博登录</em></a></li>
                                <li><a href="https://music.163.com/"><i className='icn icn-wy'></i><em>网易邮箱帐号登录</em></a></li>
                            </ul>
                            <i className='arr' style={styleshow}></i>
                        </div>
                    </div>
                </div>
                <div className='subnav'>
                    <div className='subnav-wrap'>
                        <ul className='subnav-item'>
                            <li><a href="https://music.163.com/">推荐</a></li>
                            <li><a href="https://music.163.com/">排行榜</a></li>
                            <li><a href="https://music.163.com/">歌单</a></li>
                            <li><a href="https://music.163.com/">主播</a></li>
                            <li><a href="https://music.163.com/">电台</a></li>
                            <li><a href="https://music.163.com/">歌手</a></li>
                            <li><a href="https://music.163.com/">新碟上架</a></li>                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;