import React from "react";
import Menu from "./Menu";
//import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div className="bg-white mx-5 px-10 pt-5">
        <Menu />
        <div className="">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
