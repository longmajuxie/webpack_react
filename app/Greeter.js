var config = require('./config.json');
import React, {Component} from 'react';
import styles from './Greeter.css'; //导入

class App extends Component {
    render(){
        return (
            <div className={styles.root}>{config.greetText}</div>
        );
    };
};
export default App;