const newComment = async function (event) {
    event.preventDefault();

    const textEl = document.querySelector('#comment-body');
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment_text: textEl.value.trim(),
            post_id: post_id.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
        alert('Your comment has been submitted!');
    } else {
        alert('Something went wrong, try again later!');
    }
};

document.querySelector('#comment-form').addEventListener('submit', newComment);