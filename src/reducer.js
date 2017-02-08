export default function reducer(state = {isShow: false},action){
  const {type} = action;
  switch( type ){
    case "showPopup":
      return {
        isShow:!state.isShow
      }
    default:
      return state
  }
}
