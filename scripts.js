"use strict"

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
    .then((response) => response.json())
    .then((result) => {
        let findUser = result.find((user) => user.company.name === "Johns Group");
        console.log(findUser);
    })
    .catch((responseError) => {
        if ((responseError.code = 404)) {
            console.error("Address is not found");
        } else {
            console.error(responseError);
        }
    });

const getUser = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw response;
        }
    const data = await response.json();
    let requiredUser = data.find((user) => user.company.name === "Johns Group");
    console.log(requiredUser);
    } catch (responseError) {
        if ((responseError.code = 404)) {
            console.error("Address is not found");
        } else {
        console.error(responseError);
        }
    }
};
getUser();