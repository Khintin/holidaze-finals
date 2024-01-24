import Layout from "./Components/Layout";
import ContactPage from "./Pages/Contacts/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import RegisterMemberPage from "./Pages/RegisterMemberPage";
import HotelListPage from "./Pages/HotelListPage";
import RegisterPartnerPage from "./Pages/RegisterPartnerPage";
import PartnerSuccessPage from "./Pages/PartnerSuccessPage";
import MemberSuccessPage from "./Pages/MemberSuccessPage";
import PartnerProfilePage from "./Pages/PartnerProfilePage";
import HotelDescriptionPage from "./Pages/HotelDescriptionPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="registermember" element={<RegisterMemberPage />} />
                    <Route path="registerpartner" element={<RegisterPartnerPage />} />
                    <Route path="hotellist" element={<HotelListPage />} />
                    <Route path="partnersuccess" element={<PartnerSuccessPage />} />
                    <Route path="membersuccess" element={<MemberSuccessPage />} />
                    <Route path="partnerprofile" element={<PartnerProfilePage />} />
                    <Route path="hotelinfo" element={<HotelDescriptionPage />} />
                </Route>
            </Routes>
        </>
    );
}
