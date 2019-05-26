import React, { Component } from 'react';
import '../../index.css';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-wrap'>
                    <div className='copy'>
                        <p className='copy-items'>
                            <a href="">关于网易</a>
                            <span>|</span>
                            <a href="">客户服务</a>
                            <span>|</span>
                            <a href="">服务条款</a>
                            <span>|</span>
                            <a href="">隐私政策</a>
                            <span>|</span>
                            <a href="">版权投诉指引</a>
                            <span>|</span>
                            <a href="">意见反馈</a>
                            <span>|</span>
                        </p>
                        <p>网易公司版权所有©1997-2019&nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
                        <p>违法和不良信息举报电话：0571-89853516&nbsp;&nbsp;举报邮箱：ncm5990@163.com</p>
                    </div>
                    <div className='footer-img'>
                        <a href=""><p className='footer-1'></p><p>用户认证</p></a>
                        <a href=""><p className='footer-2'></p><p>独立音乐人</p></a>
                        <a href=""><p className='footer-3'></p><p>赞赏</p></a>
                        <a href=""><p className='footer-4'></p><p>视频奖励</p></a>
                    </div>
                </div>

                <div className='totop'>
                    <a id="g_backtop" href="#">回到顶部</a>
                </div>
                
            </div>
        );
    }
}

export default Footer;