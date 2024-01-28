import { getUser } from "./auth";
import { BASE_URL, VENUES } from "./constants";

export async function getVenues() {

    const res = await fetch(BASE_URL + VENUES);

    const json = await res.json();
    return json;

}

export async function getVenueById(id) {

    const res = await fetch(BASE_URL + VENUES + `/${id}`);

    const json = await res.json();
    return json;

}

export async function createVenue(venueData) {
    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + VENUES, {
        method: "POST",
        body: JSON.stringify(venueData),
        headers: headers
    });

    const json = await res.json();
    return json;
}

export async function editVenue(venueId, venueData) {
    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + VENUES + `/${venueId}`, {
        method: "PUT",
        body: JSON.stringify(venueData),
        headers: headers
    });

    const json = await res.json();
    return json;
}

export async function deleteVenue(venueId) {
    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + VENUES + `/${venueId}`, {
        method: "DELETE",
        headers: headers
    });

    return res.ok;
}