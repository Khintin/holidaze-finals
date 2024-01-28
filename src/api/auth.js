import { Navigate } from "react-router-dom";
import { BASE_URL, LOGIN, REGISTER } from "./constants";

export async function register(username, email, password, isVenueManager = false) {

    if (!username || !email || !password)
        throw new Error("Please provide a username, email and password");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const res = await fetch(BASE_URL + REGISTER, {
        method: "POST",
        body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            venueManager: isVenueManager
        }),
        headers: headers
    });

    if (res.ok)
        return await res.json();

    throw new Error(res.status);
}

export async function loginUser(email, password) {
    if (!email || !password)
        throw new Error("Please provide an email and password");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const res = await fetch(BASE_URL + LOGIN, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: headers
    });

    const json = await res.json();

    if (res.ok && json.accessToken) {
        setUser(json);
        return json;
    }

    throw new Error(res.statusText);
}

export async function logoutUser() {
    localStorage.removeItem("user");
    return;
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
}

export function isUserVenueManager() {
    const user = getUser();
    return user ? user.venueManager : false;
}

export function validateUsername(username) {

    const pattern = /^[a-z0-9_]+$/;
    let error = false;

    if (!username || username.length == 0)
        return { valid: false, message: "Please provide a username" };
    else if (username.length < 5)
        return { valid: false, message: "Username must be at least 5 characters long" };
    else if (username.indexOf(" ") != -1)
        return { valid: false, message: "Username can only contain letters, numbers, and underscores" };

    return { valid: true, value: username };
}

export function validateEmail(email) {

    const regEx = /\S+@\S+\.\S+/;


    if (!pat.test(email) || !email.endsWith("@stud.noroff.no") && !email.endsWith("@noroff.no")) // TODO: Change to this regex for better email validation
        return { valid: false, message: "Email must be a @stud.noroff.no or @noroff.no email address" };

    return { valid: true, value: email };
}

export function validatePassword(password) {
    if (password.indexOf(" ") != -1)
        return { valid: false, message: "Password cannot contain spaces" };
    else if (password.length < 8)
        return { valid: false, message: "Password must be at least 8 characters long" };

    return { valid: true, value: password };
}