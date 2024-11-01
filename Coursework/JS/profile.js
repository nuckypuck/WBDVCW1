window.onload = function() {
    const userEmail = sessionStorage.getItem('userEmail');
    const mazeScoresContainer = document.getElementById('mazeScores');
    const totalTimeElement = document.getElementById('totalTime');
    const userEmailElement = document.getElementById('userEmail');

    if (!userEmail) {
        // If no user email is found, prompt to log in
        document.querySelector('.profile-container').innerHTML = '<p>Please log in to view your profile.</p>';
    } else {
        // Display the user's email
        userEmailElement.textContent = userEmail;

        // Retrieve user data from localStorage
        const userDataJSON = localStorage.getItem(userEmail);
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            const mazeTimes = userData.mazeTimes || [];
            const totalTime = userData.totalTime || 0;

            // Check if there are scores to display
            if (mazeTimes.length === 0 && totalTime === 0) {
                document.querySelector('.profile-container').innerHTML = '<p>No scores found.</p>';
            } else {
                // Display individual maze times
                mazeTimes.forEach((time, index) => {
                    const mazeScoreItem = document.createElement('p');
                    mazeScoreItem.className = 'maze-score-item';
                    mazeScoreItem.textContent = `Maze ${index + 1}: ${time.toFixed(2)} seconds`;
                    mazeScoresContainer.appendChild(mazeScoreItem);
                });

                // Display total time
                totalTimeElement.textContent = totalTime.toFixed(2);
            }
        } else {
            // If no data is found for the user, display "No scores found."
            document.querySelector('.profile-container').innerHTML = '<p>No scores found.</p>';
        }
    }
};
