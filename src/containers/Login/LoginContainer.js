import { connect } from 'react-redux';
import * as loginActions from '../../redux/user/actions';
import Login from './LoginView';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isLoading: state.user.isLoading,
    resultMsg: state.user.resultMsg,
    isLoading: state.user.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
