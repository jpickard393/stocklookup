export const fetchData = (url) => {
    return fetch(url, {
        method: "GET"
    })
        .then(function (response) {
            //The API call was successful!
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        })
        .then((data) => {
            return data;
        })
        .catch(function (err) {
            // There was an error
            console.warn("Something went wrong.", err);
        });
};