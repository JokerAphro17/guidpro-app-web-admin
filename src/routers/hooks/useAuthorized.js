// useAuthorized

import { ROLES } from "utils/constants";





export function useAuthorized(permissions, user) {
    if(user?.role && permissions?.length > 0) {
        return permissions.includes(user?.role) || permissions.includes(ROLES.ALL) ? true : false;
    }
    return true;
}