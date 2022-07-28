import { atom } from "recoil";

const selectedPrice = atom({
    key: "priceOfSelectedProducts",
    default: 0
});

const selectedCount = atom({
    key: "countOfSelectedItems",
    default: 0
});

const accMoney = atom({
    key: "accMoney",
    default: 10000
});

export {selectedPrice, selectedCount, accMoney}