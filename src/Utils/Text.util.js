export default {
    buildPhraseFromObj: (searchList, phrase) => Object.entries(searchList)
        .reduce((currentStr, [currKey, currValue]) => {
            const pattern = `{${currKey}}`;
            return currentStr.replace(pattern, currValue);
        }, phrase),
};
