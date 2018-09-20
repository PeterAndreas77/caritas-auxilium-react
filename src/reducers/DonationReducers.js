import {
  FETCH_DONATION_START,
  FETCH_DONATION_SUCCESS,
  FETCH_DONATION_FAILURE,
  CREATE_DONATION_START,
  CREATE_DONATION_SUCCESS,
  CREATE_DONATION_FAILURE
} from "../actions/DonationActions";

const initialDonations = {
  items: [],
  loading: false,
  error: null
};

const donationReducer = (state = initialDonations, action) => {
  switch (action.type) {
    case FETCH_DONATION_START:
      return { ...state, loading: true, error: null };
    case FETCH_DONATION_SUCCESS:
      return { ...state, loading: false, items: action.payload.donation };
    case FETCH_DONATION_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case CREATE_DONATION_START:
      return { ...state, loading: true, error: null };
    case CREATE_DONATION_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload.donation]
      };
    case CREATE_DONATION_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export { donationReducer };
