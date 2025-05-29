export const ADD_THE_COMPANY = "ADD_THE_COMPANY";

export const getJobsAction = (baseEndpoint) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
