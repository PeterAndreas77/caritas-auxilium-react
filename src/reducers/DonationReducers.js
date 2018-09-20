import {
  FETCH_DONATION_START,
  FETCH_DONATION_SUCCESS,
  FETCH_DONATION_FAILURE
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
    default:
      return state;
  }
};

export { donationReducer };
