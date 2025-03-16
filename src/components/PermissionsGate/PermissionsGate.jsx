import React, { Children } from "react";
import useGetUserPermissions from '../../hooks/UserGetUserPermissions';

const PermissionsGate = ({ children, permissions, match }) => {
    const userPermissions = useGetUserPermissions();

    if (match == 'partial') {
        if (
            permissions.some((permission) => {
                return userPermissions.includes(permission);
            })
        ) {
            return children;
        }
    }else if (
        permissions.every((permission) => {
            return userPermissions.includes(permission);
        })
    ) {
        return children;
    }

    return null;
};

export default PermissionsGate;
