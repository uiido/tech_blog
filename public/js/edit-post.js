const editPost = async function (event) {
    event.preventDefault();

    const editTitleEl = document.querySelector('input[name="edit-post-title"]').value.trim();
    const editContentEl = document.querySelector('textarea[name="edit-post-content"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            title: editTitleEl,
            content: editContentEl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert('Something went wrong! Try again later.');
    }
};

document.querySelector('.edit-post-form').addEventListener('submit', editPost);