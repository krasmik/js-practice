// console.log('Початок виконання');

// console.log('Операція 1 - Розрахунок');

// let result = 2 + 2;

// console.log('Операція 2 - Вивід результату');

// console.log(result);

// console.log('Завершення виконання');


// console.log('Start program');

// setTimeout(function () {
//     console.log('Async operation is done');
// }, 0);

// console.log('Finish program');


// function getData(callback) {
//     console.log('Request to DB sent');

//     setTimeout(function () {
//         const result = {
//             userName: 'testname',
//             userEmail: 'test@gmail.com'
//         }
//         callback(result);
//     }, 5000);
// }

// function printData(data) {
//     console.log(data);
// }
// const data = getData(printData);


const newPromise = new Promise((resolve) => {
    setTimeout(function () {
        const result = {
            userName: 'testname',
            userEmail: 'test@gmail.com',
            userAge: 10
        }
        resolve(result);
    }, 0);
})
// newPromise.then(value => value.userAge += 10)
//     .then(changedValue => ++changedValue)
//     .then(changedNewValue => console.log(changedNewValue));


// newPromise.then(function (value) {
//     return value.userAge += 10;
// })


// const getNumber = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject(new Error('Wrong number'));
//         }

//     }, 1000);
// })
// getNumber.then(value => console.log(value))
//     .catch(error => console.error('getNumber викликав помилку. ' + error.message));


function fetchPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

// fetchPostById(4).then(response => response.json())
//     .then(data => {
//         console.log('Post info:');
//         console.log('ID: ', data.id);
//         console.log('userId:: ', data.userId);
//         console.log('title: ', data.title);
//         console.log('body: ', data.body);
//     }).catch(error => {
//         console.error('Error happened: ' + error.message);
//     })

// async function printPostData() {
//     const postData = await fetchPostById(5);
//     const parsedBody = await postData.json();
//     console.log(parsedBody);
// }

// printPostData();



async function fetchTemperature(city) {
    const apiKey = 'bd664c238b837a54a22ee16796bbea50';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;


}


const city = 'Kharkiv';
fetchTemperature(city)
    .then(data => {
        if (data !== null) {
            console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
        }
    })
    .catch(((e) => {
        console.log(e)
    }));
