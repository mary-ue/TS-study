"use strict";
const apiService = (url, method) => fetch(url, {
    method,
});
const method = 'POST';
// let method = 'POST';  // !! не сработает, в литеральном типе надо const
const object = {
    method: 'POST',
};
apiService('https://site.com', object.method);
