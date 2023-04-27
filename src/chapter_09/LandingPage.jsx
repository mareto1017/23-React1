import React from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggeIn(true);
    };

    const onClickLogout = () => {
        setIsLoggeIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn
            />
        </div>
    )
}