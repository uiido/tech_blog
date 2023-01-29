const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('#new-post-title');
  const content = document.querySelector('#new-post-content');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Something went wrong!');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
