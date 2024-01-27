import { getUser } from "./auth";
import { BASE_URL, BOOKINGS } from "./constants";

export async function createBooking(from, to, guests, venueId) {

    if (!from || !to || !guests || !venueId)
        throw new Error("Please provide a check-in date, check-out date, guest count and venue ID");

    const user = getUser();

    if (!user || !user.name || !user.accessToken)
        throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + BOOKINGS, {
        method: "POST",
        body: JSON.stringify({
            dateFrom: from,
            dateTo: to,
            guests: guests,
            venueId: venueId
        }),
        headers: headers
    });

    const json = res.json();
    return json;
}

export async function getBookingById(bookingId) {
    // const user = getUser();

    // if (!user || !user.name || !user.accessToken)
    //     throw new Error("User is not signed in");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    // headers.append("Authorization", `Bearer ${user.accessToken}`);

    const res = await fetch(BASE_URL + BOOKINGS + `/${bookingId}?_bookings=true&_venue=true`);
    const json = await res.json();
    return json;
}