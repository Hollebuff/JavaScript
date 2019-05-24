import React, { Component } from 'react';
import '../../index.css';
import './swiper.css'

class Swiper extends Component {
    constructor(){
        super()
        this.state = {
            imgPath: [
                require('../../assets/bannar1.jpg'),
                require('../../assets/bannar2.jpg'),
                require('../../assets/bannar3.jpg'),
                require('../../assets/bannar4.jpg'),
            ],
            showIndex: 0,  //显示第几个图片
            timer: null,   // 定时器
            show: false    // 前后按钮显示
        }
    }
        componentDidMount(){ //一开始自动播放
        this.start();
    }
    componentWillUnmount() { //销毁前清除定时器
        this.stop();
    }
    stop = () => { //暂停
        let {timer} = this.state;
        clearInterval(timer);
    }
    start = () => { //开始
        let {timer} = this.state;
        timer = setInterval(() => {
            this.next();
        }, 2000);
        this.setState({
            timer
        })
    }
    change = (index) => {   //点击下面的按钮切换当前显示的图片
        let {showIndex} = this.state;
        showIndex = index;
        this.setState({
            showIndex
        })
    }
    previous = (e) => {   //上一张
        // let ev = e || window.event;
        let {showIndex, imgPath} = this.state;
        if(showIndex <= 0){
            showIndex = imgPath.length - 1;
        }else{
            showIndex --;
        }
        this.setState({
            showIndex
        })
    }
    next = (e) => {   //下一张
        // let ev = e || window.event;
        let {showIndex, imgPath} = this.state;
        if(showIndex >= imgPath.length - 1){
            showIndex = 0;
        }else{
            showIndex ++;
        }
        this.setState({
            showIndex
        })
    }

    render(){
        return (
            <div className="ReactCarousel bannar">
                <div className="contain" 
                    onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
                    onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
                >
                    <ul className="ul">
                        {
                            this.state.imgPath.map((value, index) => {
                                return (
                                    <li className={index === this.state.showIndex ? 'show' : ''}
                                        key={index} 
                                    > 
                                        <img src={value} alt="轮播图" />
                                        {/* <img src={require(value)} alt="轮播图" /> */}

                                    </li>
                                )
                            })
                        }
                    </ul>

                    <ul className="dots" style={{width: this.state.imgPath.length * 30 + 'px'}}> 
                        {
                            this.state.imgPath.map((value, index) => {
                                return (
                                    <li key={index}  
                                        className={index === this.state.showIndex ? 'active' : ''} 
                                        onClick={()=>{this.change(index)}}>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                
                <div className="control">
                        <span className="left"  onClick={(e)=>{this.previous(e)}}>《</span>
                        <span className="right" onClick={(e)=>{this.next(e)}}>》</span>
                    </div>
                
                <div className='download'>
                    <a className='download-btn' href="https://music.163.com/">下载客户端</a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
        )
    }
    
}
export default Swiper;
