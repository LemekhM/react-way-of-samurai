import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redax/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7455
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
//  connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)