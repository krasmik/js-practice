const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com';

test.skip('GET [/Books] returns books', async () => {
    const response = await axios.get(`${API_BASE_URL}/BookStore/v1/Books`);

    const books = response.data.books;
    expect(books.length).toBe(8);
    const firstBook = books[0];
    // expect(books).toHaveLength(8);
    expect(firstBook.isbn).toBe('9781449325862');
    expect(firstBook.subTitle).toBe('A Working Introduction');
    expect(response.status).toBe(200);
});

// testAPIUser14214124
// Test123!
test.skip('POST [/Account] returns token', async () => {
    const response = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {

        userName: 'testAPIUser14214124',
        password: 'Test123!'

    });
    expect(response.data.token).toBeDefined();

});

// test('POST [/Account] returns token', async () => {
//     const response = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {

//         userName: 'testAPIUser1asfasfasfasf124',
//         password: 'test!'

//     });
//    console.log(response.status);
//    console.log(response.data);

// });



test('POST [/Books] without auth returns 401', async () => {
    const response = await axios.post(`${API_BASE_URL}/BookStore/v1/Books`, {
        "userId": "bd46c1b2-2c25-4a7b-ba0d-5f5da3d4a7b0",
        "collectionOfIsbns": [
            {
                "isbn": "9781449325862"
            }
        ]
    },
        { validateStatus: () => true });
    expect(response.status).toBe(401);
});


test('POST [/Books] with auth adds book', async () => {

    const responseGetToken = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {

        userName: 'testAPIUser14214124',
        password: 'Test123!'

    });
    const token = responseGetToken.data.token;

    const responseAddBook = await axios.post(`${API_BASE_URL}/BookStore/v1/Books`, {
        "userId": "bd46c1b2-2c25-4a7b-ba0d-5f5da3d4a7b0",
        "collectionOfIsbns": [
            {
                "isbn": "9781449325862"
            }
        ]
    },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            validateStatus: () => true
        });
    expect(responseAddBook.status).toBe(201);
});
