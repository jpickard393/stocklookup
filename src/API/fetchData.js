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
            // All went wrong
            console.warn("Something went wrong.", err);
            throw (err);
        });
};