import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { loginUser, removeMessage } from "./../../redux/actions";

const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  success: state.user.success,
  loading: state.user.loading,
  status: state.user.status
});

const mapDispatchToProps = () => (dispatch) => ({
  loginUser: (loginDetails) => dispatch(loginUser(loginDetails)),
  removeMessage: () => dispatch(removeMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
