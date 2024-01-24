import React, { useState } from "react";

const Datepicker = ({ selectedDate, onChange }) => {
    const today = new Date();

    return (
        <input
            onChange={selectedDate}
            type="date"
            className="mt-4"
            min={today.toISOString().split("T")[0]}
        />
    );
};

export default Datepicker;
