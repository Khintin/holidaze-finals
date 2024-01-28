import Reservation from "../Components/Reservation";
import { useNavigate } from "react-router-dom";
import Infobox from "../Components/Shared/Infobox";
import { useAuth } from "../utils/AuthProvider";
import Properties from "../Components/Properties";
import AddVenue from "../Components/addvenue";
import { useEffect, useRef, useState } from "react";
import { getMyProfile, updateAvatar } from "../api/profile";

export default function ProfilePage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const avatarInput = useRef(null);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const _profile = await getMyProfile();
            setProfile(_profile);
        };

        fetchProfile()
            .catch((err) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleLogOut = () => {
        logout().then(() => navigate("/"));
    };

    const handleSaveAvatar = async () => {
        if (avatarInput.current) {
            const newAvatarUrl = avatarInput.current.value;

            if (newAvatarUrl && newAvatarUrl.length > 0) {
                const res = await updateAvatar(newAvatarUrl);
                if (res && res.avatar) {
                    setProfile(res);
                    avatarInput.current.value = "";
                }
            }
        }
    };

    if (loading) {
        return <Infobox type="info" title="Loading" text="Please wait" />;
    } else if (!profile || error) {
        return (
            <Infobox
                type="error"
                title="Cannot get profile"
                text="We were unable to get your profile. Are you sure you're logged in?"
            />
        );
    }

    return (
        <>
            <section className="blurdbackground bg-cover flex flex-row justify-center md:justify-start max-w-7xl mx-auto py-24 md:py-32 lg:py-48 shadow-2xl ">
                <div className="basis-3/4 md:basis-1/2 lg:basis-1/3 mx-12 bg-blue-100 p-8 bg-opacity-60">
                    <div>
                        <img src={profile.avatar} alt="" className="h-32 shadow-xl" />
                        <label
                            htmlFor="avatarInput"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Avatar URL:
                        </label>
                        <input
                            ref={avatarInput}
                            type="text"
                            id="avatarInput"
                            name="avatarInput"
                            placeholder="Enter avatar URL"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={handleSaveAvatar}
                            type="button"
                            className="text-blue-600 underline"
                        >
                            Update Avatar
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold">{profile.name}</h2>
                    <p className="text-base font-medium">Email: {profile.email}</p>
                    <div className="gap-2 flex flex-row text-sm xs:text-xs  ">
                        <button className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black">
                            Add Venue
                        </button>
                        <button className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black">
                            View Properties
                        </button>
                        <button
                            onClick={handleLogOut}
                            className="transition duration-300 ease-out px-4 py-2 mt-2 text-white bg-blue-600 border-black hover:bg-blue-200 hover:text-black"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </section>
            <div className="my-20 ">
                <Reservation />
            </div>
            <div className="my-20 ">
                <Properties />
            </div>
            <div>
                <AddVenue />
            </div>
        </>
    );
}
