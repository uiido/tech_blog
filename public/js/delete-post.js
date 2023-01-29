const deletePost = async function (event) {
    event.preventDefault();

    const titleEl = document.querySelector('#new-post-title');
    const contentEl = document.querySelector('#new-post-content');

    const response = await fetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify({
            title: titleEl.value,
            content: contentEl.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
        alert('This post has been deleted!');
    } else {
        alert('Something went wrong, try again later!');
    }
};

document.querySelector('#delete-btn').addEventListener('submit', deletePost);