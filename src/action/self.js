export default (profile) => {
    console.log(profile)
    return {
        type: 'SET_SELF',
        payload: profile
    }
}