export default {
    randomNum(keyStart) {
        const num = Math.random() * 1000;

        return `${keyStart}-${num}`;
    },
    plusNum(NumA, NumB) {
        return Number(NumA) + Number(NumB);
    },
    removeDash(text) {
        return text.replace(/-/gi, '');
    },

};
