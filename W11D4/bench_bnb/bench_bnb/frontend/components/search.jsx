import React from 'react';
import { render } from 'react-dom';
import BenchMap from './bench_map';
import BenchIndex from './bench_index'

class Search extends React.Component{
    render(){
        const {benches,fetchBenches} = this.props
        return(
            <div>
                <BenchMap />
                <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
            </div>
        )
    }
}

export default Search