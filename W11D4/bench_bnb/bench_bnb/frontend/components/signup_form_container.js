// import { connect } from 'react-redux';
// import SessionForm from './session_form'
// import { signup } from '../actions/session_actions'

// const mapStateToProps = (state) => {
//     return ({
//         errors: state.errors.session,
//         formType: 'Signup',
//     })
// }

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         processForm: (user) => {
//             return dispatch(signup(user))
//         }
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);