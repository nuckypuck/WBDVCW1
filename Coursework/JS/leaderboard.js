// Function to retrieve the username associated with the email in sessionStorage
function getUsernameByEmail(email) {
    const userDataJSON = localStorage.getItem(email);
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.username;
    }
    return null;
}

// Function to display leaderboard for a specific maze
function displayLeaderboard(leaderboardId, scores) {
    const leaderboard = document.getElementById(leaderboardId);
    leaderboard.innerHTML = '';  // Clear existing leaderboard

    // Sort scores by time and take top 3
    const topScores = scores.sort((a, b) => a.time - b.time).slice(0, 3);

    // Display top 3 scores
    topScores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${score.username}: ${score.time.toFixed(2)} seconds`;
        leaderboard.appendChild(listItem);
    });
}

// Function to retrieve leaderboard data from localStorage
function getLeaderboardData() {
    const leaderboardData = {
        maze1: [],
        maze2: [],
        maze3: [],
        total: []
    };

    // Loop through localStorage to get scores saved under each username
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userDataJSON = localStorage.getItem(key);
        const userData = JSON.parse(userDataJSON);

        if (userData && userData.mazeTimes) {
            const username = getUsernameByEmail(key);
            if (username) {
                // Add scores for each maze and total time
                leaderboardData.maze1.push({ username: username, time: userData.mazeTimes[0] });
                leaderboardData.maze2.push({ username: username, time: userData.mazeTimes[1] });
                leaderboardData.maze3.push({ username: username, time: userData.mazeTimes[2] });
                leaderboardData.total.push({ username: username, time: userData.totalTime });
            }
        }
    }

    return leaderboardData;
}

window.onload = function() {
    // Retrieve leaderboard data
    const leaderboardData = getLeaderboardData();

    // Display top 3 scores for each maze and total time
    displayLeaderboard('maze1-scores', leaderboardData.maze1);
    displayLeaderboard('maze2-scores', leaderboardData.maze2);
    displayLeaderboard('maze3-scores', leaderboardData.maze3);
    displayLeaderboard('total-scores', leaderboardData.total);
};