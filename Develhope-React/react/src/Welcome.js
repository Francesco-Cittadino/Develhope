import React from "react";
// Modifica il componente Welcome in modo 
// che riceva un secondo prop chiamato age e lo visualizzi sotto il messaggio 
// 'welcome', all'interno di un tag p dopo il messaggio "Your age is ".
class Welcome extends React.Component {
    render(name) {
        return (
            <div>
                <p>Welcome {name = "Francesco Cittadino"} </p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}
export default Welcome;