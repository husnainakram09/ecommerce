import React, { FC } from "react";
import LoginCard from "@components/Login";
interface IProps { };

const Login: FC<IProps> = (props) => {
    return (
        <>
            <LoginCard />
        </>
    );
};

export default Login;