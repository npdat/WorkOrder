import { connect } from 'react-redux';
import Home from './HomeView';
import * as SideMenuActions from '../../redux/sidemenu/actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username,
  };
}

const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
