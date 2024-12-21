document.addEventListener('DOMContentLoaded', function() {
    console.log('The document is ready');

    const form = document.getElementById('contactForm');
    const messageList = document.getElementById('messageList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            const listItem = document.createElement('li');
            listItem.textContent = `${name} says: ${message}`;
            messageList.appendChild(listItem);

            // Reset the form
            form.reset();
        }
    });
});
