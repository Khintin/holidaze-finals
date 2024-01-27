import { createContext, useContext, useState } from "react";
import { getUser, loginUser, logoutUser } from "../api/auth";
import { getMyProfile } from "../api/profile";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUser());

    const login = async (email, password) => {
        const _user = await loginUser(email, password);

        if (_user) {
            setUser(_user);
            return _user;
        }

        return null;
    };

    const logout = async () => {
        return logoutUser().then(() => setUser(null));
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
