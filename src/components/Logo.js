import * as React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <img
                src='img/logo.webp'
                width={this.props.size}
                alt="Logotipo"
                className='logo'
            />
        );
    };
}

export default Logo;