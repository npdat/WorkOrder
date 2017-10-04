import { connect } from 'react-redux';
import Header from './HeaderView';
import * as SideMenuActions from '../../../redux/sidemenu/actions';

const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
};

export default connect(null, mapDispatchToProps)(Header);
