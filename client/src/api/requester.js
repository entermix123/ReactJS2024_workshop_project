import { getAccessToken } from "../utils/authUtils";

async function requester(method, url, data) {
    const options = {};

    const accessToken = getAccessToken();  // get access token from local storage

    if (accessToken && accessToken.trim() !== '') {
        // check if access token exists and is not empty
        options.headers = {
            ...options.headers,
            "X-Authorization": accessToken,
        };
    }

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json",
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {      // in case of logout, return nothing, because can't parse null to JSON
        return;
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

// bind is used to call resquester with different methods
export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del,
};

// // Explanation
// // get is function that require url and data that uses requester that requires method, url and data
// export const get = (url, data) => requester('GET', url, data)
// export const post = (url, data) => requester('POST', url, data)
// export const put = (url, data) => requester('PUT', url, data)
// export const del = (url, data) => requester('DELETE', url, data)
