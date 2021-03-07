const getQuote = (symbol) => {
    const apiKey = "c0tl3kf48v6r4maesrpg";
    const url =
        "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + apiKey;

    return fetchData(url);
}

const getProfile = (symbol) => {
    const apiKey = "c0tl3kf48v6r4maesrpg";
    const url =
        "https://finnhub.io/api/v1/stock/profile2?symbol=" +
        symbol +
        "&token=" +
        apiKey;

    return fetchData(url);
}

const fetchData = (url) => {
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

export { getQuote, getProfile };