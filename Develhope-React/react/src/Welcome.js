import React from "react";
// Modifica il componente Welcome in modo 
// che riceva un secondo prop chiamato age e lo visualizzi sotto il messaggio 
// 'welcome', all'interno di un tag p dopo il messaggio "Your age is ".
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 className="hOne">Welcome</h1>
                <p><strong>{this.props.name}</strong></p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}
export default Welcome;