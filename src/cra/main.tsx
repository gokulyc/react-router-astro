import { BrowserRouter, StaticRouter } from "react-router";
import App from "./App.tsx";
import "./App.css";
import React from "react";

export default ({ pathname }: { pathname: string }) => (
    import.meta.env.SSR
        ? <StaticRouter location={pathname}><App/></StaticRouter>
        : <BrowserRouter><App/></BrowserRouter>
)
