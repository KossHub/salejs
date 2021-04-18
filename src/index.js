import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render(){
        return <div>it works!</div>;
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('react-root'));
