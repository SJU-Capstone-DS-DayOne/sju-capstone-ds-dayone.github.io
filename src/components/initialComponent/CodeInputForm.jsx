import { useStore } from "zustand";
import storeInputKey from "../../clients/InputKeyControl";

export default function CodeInputForm() {
    const { key, onInput, onDelete } = useStore(storeInputKey);

    const onChange = (event, idx) => {
        if (event.target.value) {
            onInput(event);
            setTimeout(() => {
                if (idx < 5) {
                    document.getElementById(`input-${idx + 1}`).focus();
                }
            }, 0); // Slight delay to ensure state update completes
        } else {
            onDelete();
            setTimeout(() => {
                if (idx > 0) {
                    document.getElementById(`input-${idx - 1}`).focus();
                }
            }, 0);
        }
    };

    return (
        <form className="flex items-center w-full gap-2">
            {[...Array(6)].map((_, idx) => (
                <input
                    id={`input-${idx}`}
                    type="text"
                    className="text-center text-3xl py-3 flex-1 rounded-xl font-[Pretendard-Bold]  text-[#6e3bff] border-2  focus:border-[#6E3BFF] focus:outline-none"
                    maxLength={1}
                    key={idx}
                    onInput={(event) => onChange(event, idx)}
                    style={{
                        width: "calc(100% / 6)",
                        borderColor: key < idx + 1 ? "#e2e2e2" : "#6e3bff",
                        pointerEvents:
                            key !== idx && key !== idx - 1 && key !== idx + 1
                                ? "none"
                                : "auto",
                    }}
                />
            ))}
        </form>
    );
}
