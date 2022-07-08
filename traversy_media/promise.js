const posts = [
    { title: "post one", description: "this is post one"},
    { title: "post two", description: "this is post two"}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error');
            }
        }, 2000);
    })
}

// createPost({ title: 'post three', description: 'this is post three'})
// .then(getPosts)
// .catch(() => console.log("Error"));

// const promise1 = Promise.resolve('hi there');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Bye")
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => 
//     res.json()
// );

// Promise.all([
//     promise1,
//     promise2,
//     promise3,
//     promise4
// ])
// .then((message) => console.log(message))
// .catch((err) => console.log(err))

// Async / await

// async function init(input) {
//     await createPost({ title: input, description: 'this is post three' });
//     getPosts();
// }

// init('New Post');

// document.body.addEventListener('click', () => {
//     console.log("clicked");
//     const input = prompt("Enter post title");
//     init(input);
// })

// fetching url with async await

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    console.log(data);
}

getData();

