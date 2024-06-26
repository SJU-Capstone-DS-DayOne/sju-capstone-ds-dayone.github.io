import { create } from "zustand";

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const storeDetailReview = create((set) => ({
    detailReview: [],
    setDetailReview: (val) => set({ detailReview: chunkArray(val, 5) }),
    sortDetailReview: [],
    setSortDetailReview: (val) => set({ sortDetailReview: chunkArray(val, 5) }),
}));

export default storeDetailReview;
