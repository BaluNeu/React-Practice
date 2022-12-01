import React , {Component} from'react';
import ReactDOM from'react-dom';

export default class AppClass extends Component {

    constructor(props) {
            super(props);

            this.state = {
                count : 0,
            };
    }

    increment=()=>{
        //count+=1;
    
        this.setState((previousState) =>({
            count: previousState.count+1
        })
            );
      }
    
    decrement=()=>{
        //count-=1;
    
        this.setState((previousState) => ({
            count: this.state.count-1
        })
            );
      }
    render(){
        return(
            <div className="App">

            {/* <Product name="Balu" description = "kodithe gettiga kottaali" price = {34.5}/> */}
                <p>The count is : {this.state.count}</p>
                <button type="" onClick = {this.increment}>+</button>
                <button type="" onClick = {this.decrement}>-</button>
    </div>

        )
    }
    }