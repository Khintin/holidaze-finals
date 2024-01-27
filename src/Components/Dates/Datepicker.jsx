import { useState } from "react";

export default function Datepicker({ onChange }) {
    const getNextDay = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    };

    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const [startDate, setStartDate] = useState(getFormattedDate(new Date()));
    const [endDate, setEndDate] = useState(getFormattedDate(getNextDay(new Date())));

    const handleStartDateChange = (event) => {
        const _startDate = event.target.value;
        const _endDate = getFormattedDate(getNextDay(new Date(_startDate)));
        setStartDate(_startDate);
        setEndDate(_endDate);

        onChange({ start: _startDate, end: _endDate });
    };

    const handleEndDateChange = (event) => {
        const _endDate = event.target.value;
        setEndDate(_endDate);

        onChange({ start: startDate, end: _endDate });
    };

    return (
        <div className="mt-5 gap-5 flex flex-col md:flex-row">
            <div className="flex flex-col">
                <label className="text-base font-semibold">Check-in Date</label>
                <input
                    type="date"
                    className="mt-4"
                    onChange={handleStartDateChange}
                    min={startDate}
                    value={startDate}
                />
            </div>
            <div className="flex flex-col">
                <label className="text-base font-semibold">Check-out Date</label>
                <input
                    type="date"
                    className="mt-4"
                    onChange={handleEndDateChange}
                    min={getFormattedDate(getNextDay(startDate))}
                    value={endDate}
                />
            </div>
        </div>
    );
}
