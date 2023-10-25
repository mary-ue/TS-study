type httpMethod = 'GET' | 'POST';

const apiService = (url: string, method: httpMethod) =>
  fetch(url, {
    method,
  });

const method = 'POST'; 
// let method = 'POST';  // !! не сработает, в литеральном типе надо const

const object: {
  method: 'POST',
} = {
  method: 'POST',
};

apiService('https://site.com', object.method);