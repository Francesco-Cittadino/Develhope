import React from "react";
class ClickTracker extends React.Component {
    
    handleClick = (event) => {
        event.preventDefault();
        const val = event.target.name;
        const res = document.querySelector('#uno');
        res.append(val);
    }
     
    render() {
        return (
            <div>
                <button name='button 1' onClick={this.handleClick}>button 1</button>
                <button name='button 2' onClick={this.handleClick}>button 2</button>
                <button name='button 3' onClick={this.handleClick}>button 3</button>
                <h1 id='uno'></h1>
            </div>
        )

    }

}
export default ClickTracker