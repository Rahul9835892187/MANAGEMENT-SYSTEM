// JavaScript for Event Managing Website

document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventsList = document.getElementById('events');
    const events = [];

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const photos = document.getElementById('photos').files;

        const event = { title, date, location, description, category, photos };
        events.push(event);

        displayEvents();
        eventForm.reset();
    });

    function displayEvents() {
        eventsList.innerHTML = '';
        events.forEach((event, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Description:</strong> ${event.description}</p>
                <p><strong>Category:</strong> ${event.category}</p>
            `;
            eventsList.appendChild(li);
        });
    }
});
