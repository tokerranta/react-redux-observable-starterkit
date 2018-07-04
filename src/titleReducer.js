export default (state = 'Initial Title', action) => {
    switch(action.type) {
        case 'TITLE_CHANGED':
            return 'TITLE CHANGED';
        default:
            return state;
    }
}