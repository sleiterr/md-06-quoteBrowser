import React, { createContext, useContext } from "react";

export const QouteContext = createContext();
export const useQoutes = () => useContext(QouteContext);
