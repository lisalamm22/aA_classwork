import React from 'react';

class BeachIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                {this.props.bench.description}
            </li>
        )
    }
}

export default BeachIndexItem