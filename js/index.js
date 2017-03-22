import React from 'react'

const element = (
    <div>
        <h1>Hello, world</h1>
        <p>This is a React Demo</p>
    </div> 
);

class Hello extends React.Component {

    render() {
        return element
    }
}


export default Hello
