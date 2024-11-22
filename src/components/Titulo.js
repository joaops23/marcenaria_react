import React from "react";

export default class Titulo extends React.Component {
    render() {
        return(
            <p className='h2 text-center text_marrom quebra'>{this.props.title}</p>
        )
    }
}