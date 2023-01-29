const deletePost = async function (event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
        alert('This post has been deleted!');
    } else {
        alert('Something went wrong! Please try again later.');
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deletePost);