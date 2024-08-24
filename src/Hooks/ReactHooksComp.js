import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const ReactHooksComp = () => {
  return (
    <Fragment>
      <div className="card border-primary">
        <div className="card-header border-primary">
          <Link to="usestate" className="btn btn-outline-info btn-sm">useState</Link>{" "}
          <Link to="useeffect" className="btn btn-outline-success btn-sm">useEffect</Link>{" "}
          <Link to="useref" className="btn btn-outline-primary btn-sm">useRef</Link>{" "}
          <Link to="usecontext" className="btn btn-outline-info btn-sm">useContext</Link>{" "}
          <Link to="usememo" className="btn btn-outline-warning btn-sm">useMemo</Link>{" "}
          <Link to="usecallback" className="btn btn-outline-primary btn-sm">useCallback</Link>{" "}
        </div>
        <div className="card-body border-primary">
          <h2>This is React Hooks Comp</h2>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default ReactHooksComp;
