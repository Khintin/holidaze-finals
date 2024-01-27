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