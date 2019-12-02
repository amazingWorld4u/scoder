import React, {Component} from 'react';
import styles from '../../pages/blog.module.css';
import { FaBars} from "react-icons/fa";
import {MdClose} from 'react-icons/md';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = ({
            hiddenNav : true,
            hiddenNavClass : styles.sideNav
        })
    }
    toggleSideBar = ()=>{
        if(this.state.hiddenNav){
            this.setState({hiddenNav : !this.state.hiddenNav});
        }
        else{
            this.setState({hiddenNav : !this.state.hiddenNav, hiddenNavClass : styles.hideSideNav});
        }
    }
    render(){
        return(
            <header className = {styles.headerContainer}>
                <div className = {styles.headerContainer1}>
                    <div className={styles.menuIconContainer}>
                    <FaBars color="white" size="30" className={styles.menuIcon} onClick = {()=>{this.toggleSideBar()}} />
                    </div>
                    <h1 className = {styles.headerTitle}>{this.props.title}</h1>
                    <div className = {styles.navContainer}>{this.renderNavBar(styles.navItem)} </div>
                </div>
                <div className = {this.state.hiddenNav ?  this.state.hiddenNavClass : styles.visibleSideNav}>
                    <div style = {{cursor : 'pointer'}} onClick={()=>{this.toggleSideBar()}} >
                        <MdClose color="white" size="25" />
                    </div>
                    {this.renderNavBar(styles.sideNavItem)}
                </div>
            </header>
        )
    }
    renderNavBar = (style) =>{
        let arr = ["Home","Blogs","Support","Contact us","Mobile App","About us"];
        return arr.map((item)=>{
            return <div className = {style}>{item}</div>
        })
    }
}
export default Header;

{/* <header style = {{flex : 1,backgroundColor : 'rgb(0, 38, 77)', minHeight : '30vh', color : 'white', position : 'relative',display : 'flex', justifyContent : 'space-around', flexDirection :'column', alignItems : 'center'}}>
                <h1 style = {{margin : 0, textAlign : 'center'}}>{this.props.title} </h1>
                <div>
                <div style = {{flexDirection : 'row', display : 'flex'}}>{this.renderNavBar()} </div>
                </div>
            </header> */}