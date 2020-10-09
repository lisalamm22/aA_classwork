import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(()=>this.props.history.push('/'));
    }

    handleChange(field){
        return (e) => {this.setState({[field]: e.target.value})}
    }

    render(){
        // this.props.formType==='Signup' ? <Link to='/signup' >SignUp</Link> : <Link to='/login' >Login</Link>
        const errs = this.props.errors.map((err,idx)=>{
            return <li key={idx}>{err}</li>
        })
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType==='Login' ? <Link to='/signup' >SignUp</Link> : <Link to='/login' >Login</Link>}
                    <br/>
                    <label>Username: 
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    </label>
                    <input type="submit" value='Submit'/>
                </form>
                <p>{errs}</p>
            </div>
        )
    }
}

export default SessionForm