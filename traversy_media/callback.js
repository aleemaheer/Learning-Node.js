const posts = [
	{ title: "post one", description: "This is a post one" },
	{ title: "post two", description: "This is a post two" },
	{ title: "post three", description: "This is a post three" },
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		//posts.forEach((post) => {
		//	output += `<li>${post.title}</li>`;
		//});
        for (post of posts) {
            output += `<li>${post.title}</li>`;
        }
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}

createPost({title: "post four", description: "this is post four"}, getPosts);
