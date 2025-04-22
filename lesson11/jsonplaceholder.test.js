const axios = require('axios');

test('GET [/posts] returns 100 posts', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    
    const posts = response.data;
    expect(posts).toHaveLength(100);
});