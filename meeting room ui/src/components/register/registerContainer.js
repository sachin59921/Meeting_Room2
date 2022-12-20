import { connect } from "react-redux";
import RegisterForm from "./RegisterForm";
import { registerUser, removeMessage } from "./../../redux/actions";

const mapStateToProps = (state) => ({
  success: state.user.success,
  loading: state.user.loading,
  status: state.user.status
});

const mapDispatchToProps = () => (dispatch) => ({
  registerUser: (userDetails) => dispatch(registerUser(userDetails)),
  removeMessage: () => dispatch(removeMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
