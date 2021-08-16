const EventReducer = (state:any = {}, action: any) => {
    switch(action.type) {
        case 'SETEVENTSDATA':
            state = action.payload;
            return state;
        case 'GETEVENTSDATA':
            return state;
        case 'UPDATEEVENTSDATA':            
            (state["results"] as any[]).map((item: any) => {
                if(item.name === action.payload.name) {
                    return item.isFavourite = !item.isFavourite
                }
            })
            return {...state};
        default:
            return state;
    }
}
export default EventReducer;