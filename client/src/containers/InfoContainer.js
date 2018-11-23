import React, { Component } from 'react'
import { connect } from 'react-redux';

import Layout from '../components/common/Layout';

import { getInfo } from '../action/authorization';

class InfoContainer extends Component {

  componentDidMount() {
    this.props.getInfo(this.props.token)
  }

  render() {
    return (
      <Layout>
        {this.props.token}
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const { token } = state.authReducer

  return (
      { token }
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getInfo: (data) => {
      dispatch(getInfo(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);