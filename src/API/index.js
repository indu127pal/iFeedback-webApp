// api 

export const BASE_API = 'http://139.59.25.97:8080/';

export const AUTH_API = BASE_API + "api/authenticate";
export const GET_REVIEW_API = BASE_API + 'ratingnreview/api/public/review/FEEDBACK_REVIEW/participant/1'; 
export const SUBMIT_REVIEW_API = BASE_API + 'ratingnreview/api/public/review/FEEDBACK_REVIEW/participant/1';

// export const REVIEW = 'http://demo6025288.mockable.io/feedbackReview';
export const REVIEW = 'http://demo6025288.mockable.io/duplicateJson';

// var header = {
//     "Content-Type": "application/json",
//     "Authorization": "{{Authorization}}"
// }

var ApiUtils = {
    checkStatus: function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  };

export const fetchReview = () => {
    return fetch(REVIEW)
            .then(ApiUtils.checkStatus)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
}