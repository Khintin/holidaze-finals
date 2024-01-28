import Layout from "./Components/Layout";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import RegisterPage from "./Pages/RegisterPage";
import HotelListPage from "./Pages/HotelListPage";
import PartnerSuccessPage from "./Pages/PartnerSuccessPage";
import MemberSuccessPage from "./Pages/MemberSuccessPage";
import HotelDescriptionPage from "./Pages/HotelDescriptionPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />

                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="hotels" element={<HotelListPage />} />
                    <Route path="hotels/:venueId" element={<HotelDescriptionPage />} />
                    <Route path="partnersuccess" element={<PartnerSuccessPage />} />
                    <Route path="membersuccess" element={<MemberSuccessPage />} />
                </Route>
            </Routes>
        </>
    );
}
