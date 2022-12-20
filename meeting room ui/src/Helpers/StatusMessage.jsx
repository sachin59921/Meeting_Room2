import { Label } from "reactstrap";

const StatusMessage = ({ loading, success, status }) => {
  if (loading) {
    //request sent and inprogress
    return <Label style={{ color: "yellow" }}>{status}</Label>;
  } else if (!loading && !success && status) {
    // error response received
    return <Label style={{ color: "red" }}>{status}</Label>;
  } else if (!loading && success && status) {
    return <Label style={{ color: "green" }}>{status}</Label>;
  } else {
    return <></>;
  }
};

export default StatusMessage;
