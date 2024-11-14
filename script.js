document.getElementById('activityForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;

    // Create an activity object
    const activityData = { name, activity, date };

    // Retrieve existing activities from localStorage or initialize an empty array
    const activities = JSON.parse(localStorage.getItem('heatAcclimatisationData')) || [];

    // Add the new activity to the activities array
    activities.push(activityData);

    // Save the updated activities array back to localStorage
    localStorage.setItem('heatAcclimatisationData', JSON.stringify(activities));

    // Optionally, reset the form
    document.getElementById('activityForm').reset();
    alert('Activity submitted successfully!');
    window.location.href = 'ha-demo-1.html';
};