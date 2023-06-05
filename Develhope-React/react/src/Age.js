import React from "react";

// Modifica il componente Età in modo che il messaggio 
// "Your age is" venga visualizzato solo se l'età prop è maggiore di 18. 
// In caso contrario, 
// visualizza il messaggio "You are very young!" Messaggio.

class Age extends React.Component {
    render() {
        return (
                this.props.age > 18 && 
                <p>Your age is {this.props.age}</p>
                ||
                this.props.age < 18 && 
                <p>You are very young! {this.props.age}</p>
        )
    }

}
export default Age