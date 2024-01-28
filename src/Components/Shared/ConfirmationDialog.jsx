import { useEffect, useRef } from "react";

export default function ConfirmationDialog({
    onClose,
    showModal,
    title,
    text,
    showCancelButton = true,
}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (showModal && dialogRef.current) dialogRef?.current?.showModal();
    }, [showModal]);

    const handleConfirm = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
            onClose(true);
        }
    };

    const handleCancel = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
            onClose(false);
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className="p-4 rounded shadow-2xl border-2 border-black flex flex-col gap-4"
        >
            <h2 className="m-0 text-xl">{title}</h2>
            <p className="m-0">{text}</p>
            <div className="flex flex-row justify-end gap-4">
                <button
                    onClick={handleConfirm}
                    className="px-4 py-2 text-center rounded bg-black text-white"
                >
                    Okay
                </button>
                {showCancelButton && (
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-center rounded bg-white text-black"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </dialog>
    );
}
