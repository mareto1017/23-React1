import React from "react";


function Toolbar(props) {
    const { isLoggedIn, onClicLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.qreeting}>환영합니다.</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    )

}

export default Toolbar;