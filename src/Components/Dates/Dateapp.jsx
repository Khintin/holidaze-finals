import React, { useState } from "react";
import Datepicker from "../Dates/Datepicker";

const Dateapp = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hotel Booking</h1>
            <div className="flex gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">Check-in Date</label>
                    <Datepicker selectedDate={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Check-out Date</label>
                    <Datepicker selectedDate={endDate} onChange={(date) => setEndDate(date)} />
                </div>
            </div>
        </div>
    );
};

export default Dateapp;
