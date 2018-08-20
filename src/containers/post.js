import React, { Component } from 'react'
import PostContent from '../components/post-content';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { readPost } from "../actions/index";
import { Link } from "react-router";


class Post extends Component {

    componentWillMount() {
        this.props.readPost(this.props.params.id);
    }

    renderPostContent () {
        const {post} = this.props;
        if (post) return <PostContent post = {post}/>
    }

    render () {
        return (
            <div>
                {this.renderPostContent ()}
                <Link to = {"/"} className = "button_space"><button className = "btn btn-danger">Retour</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.activePost };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readPost}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);