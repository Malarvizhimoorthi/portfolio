import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div class="header">
        <a href="#" class="head">Malarvizhi</a>
        <navbar class="nav">
            <a href="/home"  class="active">Home</a>
            <a href="/About" class="active" >About</a>
            <a href="/Skills" class="active" >Skills</a>
            <a href="/Contact" class="active" >Contact</a>
        </navbar>
    </div>
        );
    }
}
export default Header;