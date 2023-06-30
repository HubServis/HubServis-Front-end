import React from "react";
import Permissions from "../../components/PermissionsGate/PermissionsGate";
import { AppBar } from "../../components";

const Test = () => {
    return (
        <>
            <AppBar>
                <a href="#">Sobre</a>
                <a href="#">Planos</a>
                <a href="#">Anuncios e eventos</a>
                <a href="#">Suporte</a>
            </AppBar>
            <Permissions
                permissions={["seeTitle", "canSeeTitle"]}
                match="partial"
            >
                <h1>Hello World</h1>
            </Permissions>
        </>
    );
};

export default Test;
