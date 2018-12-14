import { ALBUM_ACTIONS } from "./action";

const initialState = {
    data: getLocalData()
}

function setLocalData(data) {
    localStorage.setItem('data',JSON.stringify(data))
}

function getLocalData() {
    const data = JSON.parse(localStorage.getItem('data'));
    return data || [];
}
const reducer = function(state = initialState, action) {
    let { data } = state;
    switch(action.type) {
        case ALBUM_ACTIONS.ADD:
            data.push(action.payload);
            setLocalData(data);
            return {
                data: data.slice()
            };
        case ALBUM_ACTIONS.REMOVE:
            data.splice(action.payload,1)    
            setLocalData(data);
            return {
                data: data.slice()
            };
        case ALBUM_ACTIONS.UPDATE:
            setLocalData(data);
            data[action.payload.index]=action.payload.value;
            console.log(action.payload)
            return {
                data:data.slice()
            }
        case ALBUM_ACTIONS.ADD_PHOTO:
            setLocalData(data);
            let tempData = {
                title:action.payload.title,
                description:action.payload.description,
                photos:action.payload.photos,
                thumbnail:action.payload.thumbnail
            }
            console.log(tempData)
            data[action.payload.index]=tempData
            return {
                data: data.slice()
            };
        case ALBUM_ACTIONS.REMOVE_PHOTO:
            setLocalData(data);
            let temporary = {
                title:action.payload.title,
                description:action.payload.description,
                photos:action.payload.photos,
                thumbnail:action.payload.thumbnail
            }
            console.log(temporary)
            data[action.payload.index]=temporary
            return {
                data: data.slice()
            };  
        default:
            return state;
    }
}

export default reducer;