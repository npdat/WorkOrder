import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import MenuRender from './MenuView';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuRender);
