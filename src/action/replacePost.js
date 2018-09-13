export default (prev, cur) => {
    return {
        type: 'REPLACE_POST',
        payload: {prev, cur}
    }
}