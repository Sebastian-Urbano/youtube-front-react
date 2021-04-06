import React, { useState } from "react";
export const StatusContext = React.createContext();

const StatusProvider = (props) => {
  const [status, setStatus] = useState({
    search: false,
    error: false,
    query: "",
    data: [],
  });

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
