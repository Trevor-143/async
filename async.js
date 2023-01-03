const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
]

function getPosts() {
    setTimeout (() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true
            if (!error) {
                resolve();
            } else {
                reject ("something's not right")
            }
        }, 2000);

    });

}

// async /await

// async function initi() {
//     await createPost({title: 'post three', body: 'this is post three'});
//     getPosts();
// }

// initi();

async function fetchUsers() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
}
fetchUsers();
