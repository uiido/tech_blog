async function newComment(event) {
    event.preventDefault();

    const commentEl = document.querySelector('#comment-body')

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (commentEl) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId,
                comment_text: commentEl.value.trim()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
            alert('Your comment has been submitted!');

        } else {
            alert('Something went wrong, try again later!');
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', newComment);