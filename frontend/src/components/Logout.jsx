import { useEffect } from "react";
import { connect } from "react-redux";
import { Label } from "reactstrap";
import { logoutUser } from "../redux/actions";

const AppLogout = ({ logoutUser }) => {
  useEffect(() => {
    logoutUser();
  });

  return (
    <Label className="my-5">
      Logged out from application. ! Please try login again!
    </Label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(() => ({}), mapDispatchToProps)(AppLogout);
