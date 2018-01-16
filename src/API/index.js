// api 
var localStorage = require('localStorage')
var queryParams = [];
if (location.search === "") {
  queryParams = JSON.parse(localStorage.getItem('queryParams'));
  // const queryParams = JSON.parse();
  console.log(queryParams);
} else {
const loc = location.search
const queryArr = loc.replace('?','').split('&');
var queryParams = [];
for (var q = 0, qArrLength = queryArr.length; q < qArrLength; q++) {
  var qArr = queryArr[q].split('=');
  queryParams[qArr[0]] = qArr[1];
}
console.log(queryParams);
  const urlParameter = 
  {
    "reviewCode" : queryParams.reviewCode,
    "reviewResponse" : queryParams.reviewResponse,
    "participant": queryParams.participant
  }
  localStorage.setItem('queryParams', JSON.stringify(urlParameter));
} 

export const BASE_API = 'http://139.59.25.97:8080/';
// export const GET_REVIEW_API = BASE_API + 'ratingnreview/api/public/v2/review/EASYDAY_CUSTOMER_FEEDBACK_V2/reviewResponse/' + `${queryParams.reviewResponse}` + '/participant/' + `${queryParams.participant}`; 
export const GET_REVIEW_API = BASE_API + 'ratingnreview/api/public/v2/review/'+`${queryParams.reviewCode}` +'/reviewResponse/' + `${queryParams.reviewResponse}` + '/participant/' + `${queryParams.participant}`;
export const SUBMIT_REVIEW_API = BASE_API + 'ratingnreview/api/public/v2/review/submit';

// use this url
// http://localhost:3000/?reviewCode=EASYDAY_CUSTOMER_FEEDBACK_V2&reviewResponse=2dbaf4ad-0a64-4523-b5d1-8109ba0a63bf&participant=77
console.log(GET_REVIEW_API);

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
    return fetch(GET_REVIEW_API, {
      method: 'GET'
    }
  )
    .then(ApiUtils.checkStatus)
      .then((response) => response.json())
        .catch((error) => {
            console.error(error);
          });
}

export const submitReview = () => {
  let answers = JSON.parse(localStorage.getItem('answers'));
  let val = JSON.parse(localStorage.getItem('queryParams'));
  console.log(val);
const payload = {
  "reviewCode": val.reviewCode,
  "participantId": val.participant,
  "reviewResponseCode": val.reviewResponse,
   answers
}
console.log(payload);
  return fetch(SUBMIT_REVIEW_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload
    })
  }
)
  .then((response) => {
    if (response === 200) {
      console.log("sucess");
    } else {
      console.log("fail");
    }
  })
  .catch((error) => {
    console.error(error);
  })
}