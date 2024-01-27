import { getUser } from "./auth";
import { BASE_URL, PROFILE } from "./constants";

export async function getMyProfile() {

    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + PROFILE + user.name, {
        method: "GET",
        headers: headers
    });

    const json = await res.json();
    return json;
}

export async function getMyBookings() {
    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + PROFILE + user.name + "/bookings?_venue=true", {
        method: "GET",
        headers: headers
    });

    const json = await res.json();
    return json;
}

export async function updateAvatar(newAvatarUrl) {
    // TODO: Validate the the newAvatarUrl to make sure its a url and an image

    if (typeof newAvatarUrl != "string")
        return;

    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + PROFILE + user.name + "/media", {
        method: "PUT",
        body: JSON.stringify({
            avatar: newAvatarUrl
        }),
        headers: headers
    });

    const json = await res.json();
    return json;
}