import React from 'react';
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.fetchBenches();
    }

    render(){
        return(
            <div>
                {this.props.benches.map((bench) => {
                    return <BenchIndexItem bench={bench} key={bench.id}/>
                })}
            </div>
        )
    }
}

export default BenchIndex