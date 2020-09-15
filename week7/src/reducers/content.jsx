import {TYPES_CONTENT} from '../actions';

const initialValue = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  errorMessage: ""
}

const content = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES_CONTENT.UPDATE_CONTENT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default content;