import React, { Component } from 'react';


class MainConent extends Component {
    render() {
        return (

            <div className='main'>
                <div className='main-content'>

                    <div className='content-title'>
                        <a className='hot-title' href="https://music.163.com/">热门推荐</a>
                        <div>
                            <a href="https://music.163.com/">华语</a><span>|</span>
                            
                            {/* 热门推荐 | 流行 | 摇滚 | 民谣 | 电子 */}
                        </div>
                        <span><a href="https://music.163.com/">更多</a></span>
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