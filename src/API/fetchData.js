export const fetchData = async (url) => {
    return await fetch(url, {
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
        .catch(function (err) {
            console.error("Error in fetching data from finhub API.", err);
            throw (err);
        });
};