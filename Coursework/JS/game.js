var ctx = null;

// Maze Data
const mazes = [
    {
        map: [
            // Maze 1 layout
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 0, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 2, 3, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

        ],
        endpoint: { x: 18, y: 9 }
    },
    {
        map: [
            // Maze 2 layout
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 0, 4, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 2, 0, 4, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 4, 0, 2, 2, 2, 0, 2, 0, 4, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0,
            0, 4, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0,
            0, 4, 0, 5, 0, 2, 0, 4, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0,
            0, 2, 0, 5, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

        ],
        endpoint: { x: 18, y: 1 }
    },
    {
        map: [
            // Maze 3 layout
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 2, 4, 2, 2, 5, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 0,
            0, 0, 0, 2, 2, 4, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 4, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0,
            0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        endpoint: { x: 10, y: 9 }
    }
];

// Important Variables

// Game & Tile Data
const mapTileData = new TileMap();  //Represents layout of maze
const tileW = 40, tileH = 40; //Tile width and height 
const mapW = 20, mapH = 20; //Amount of tiles in the width and height of the map (20x20)

// Frame rate data
let currentSecond = 0; // Tracks current second
let frameCount = 0; // Counts fps 
let framesLastSecond = 0; // Holds fps count from last second for display
let lastFrameTime = 0; // Timestamp of last frame

// Tilset image data
let tileset = null; //Tilset Variable
const tilesetURL = "../IMG/GameIMGs/tileset.png"; //Tileset Image
let tilesetLoaded = false; //Flag to indicate loading

// Control Variables
let isPaused = false; // Flag to indicate pause state
let pauseStartTime = 0; // Tracks length of game pause
let gameTime = 0; // Total game time 

// Sound Variables
const moveSound = new Audio('../Sound/click.mp3'); // Sound file
let isSoundPlaying = false; // Flag for sound playing

// Maze Timing Variables 
let mazeTimes = [];  // Array to store individual maze times
let totalTime = 0;   // Total time for all mazes
let mazeIndex = 0;   // Current Maze Level
let mazeStartTime = 0; // Start time for current maze
let timerStarted = false; // Flag for timer start

// Initialise Canvas 
window.onload = function() {
    ctx = document.getElementById('game').getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";

    //WASD Listener
    window.addEventListener("keydown", function(e) {
        if ([65, 68, 83, 87].includes(e.keyCode)) {
            keysDown[e.keyCode] = true;

            // Play the sound on keypress
            if (!isPaused && !isSoundPlaying) {
                moveSound.play();
                isSoundPlaying = true; 
            }

            // Begins timer (If not already begun)
            if (!timerStarted) {
                mazeStartTime = Date.now();
                timerStarted = true;
            }
        }
    });

    // WASD Released Listener
window.addEventListener("keyup", function(e) {
    if ([65, 68, 83, 87].includes(e.keyCode)) {
        keysDown[e.keyCode] = false;
        isSoundPlaying = false; // Reset the flag when key is released
    }
    // P Listener (pause)
    if (e.keyCode == 80) {
        isPaused = !isPaused;
        
        if (isPaused) {
            // Store pause start time
            pauseStartTime = Date.now();
        } else {
            // Adjust mazeStartTime by the duration of the pause
            let pauseDuration = Date.now() - pauseStartTime;
            mazeStartTime += pauseDuration;
        }
    }
});


    //Initialise viewport with game width and height (set in menu.html)
    viewport.screen = [document.getElementById('game').width, document.getElementById('game').height];

    //Tilset image loading
    tileset = new Image();
    tileset.onerror = function() {
        ctx = null;
        alert("Failed loading tileset.");
    };
    tileset.onload = function() { tilesetLoaded = true; };
    tileset.src = tilesetURL;

    loadMaze(mazeIndex); 
};

// Iterate through until all mazes are completed
function loadMaze(index) {
    if (index >= mazes.length) {
        endGame();
        return;
    }

    // Retrieve maze data from array
    let maze = mazes[index];
    mapTileData.buildMapFromData(maze.map, mapW, mapH);

    // Character Position
    player.placeAt(1, 1);

    // Endpoint handler 
    mapTileData.map[toIndex(maze.endpoint.x, maze.endpoint.y)].eventEnter = function() {
        let timeSpent = (Date.now() - mazeStartTime) / 1000;
        //Update Maze Time
        mazeTimes.push(timeSpent);
        // Move to the next maze
        mazeIndex++;  
        loadMaze(mazeIndex);
    };

    // Reset timer & Flags
    mazeStartTime = Date.now();  
    timerStarted = false; 
    isPaused = false;

    // Prevents transition during keypress from not beginning the timer
    if (keysDown[65] || keysDown[68] || keysDown[83] || keysDown[87]) {
        mazeStartTime = Date.now();
        timerStarted = true;
    }

    // Remove restart button and maze times container (if they exist)
    const restartButton = document.getElementById('restartButton');
    const mazeTimesContainer = document.getElementById('mazeTimesContainer');

    if (restartButton) {
        restartButton.remove();
    }
    if (mazeTimesContainer) {
        mazeTimesContainer.remove();
    }

};


function endGame() {
    // Sum Maze Times
    totalTime = mazeTimes.reduce((a, b) => a + b, 0);
    isPaused = true;

    // Get the canvas element and its container
    const gameCanvas = document.getElementById('game');
    const gameContainer = document.querySelector('.game-container');

    // Function to position the maze times container and restart button based on the canvas position
    function positionEndGameElements() {
        const canvasRect = gameCanvas.getBoundingClientRect();

        mazeTimesContainer.style.top = `${canvasRect.top + canvasRect.height / 2}px`;
        mazeTimesContainer.style.left = `${canvasRect.left + canvasRect.width / 2}px`;

        restartButton.style.top = `${canvasRect.top + canvasRect.height / 2 + 100}px`;
        restartButton.style.left = `${canvasRect.left + canvasRect.width / 2}px`;
    }

    // Create container for maze times and total time
    const mazeTimesContainer = document.createElement('div');
    mazeTimesContainer.id = "mazeTimesContainer";
    mazeTimesContainer.style.position = "absolute";
    mazeTimesContainer.style.transform = "translate(-50%, -50%)";
    mazeTimesContainer.style.backgroundColor = "#333";
    mazeTimesContainer.style.color = "#ffffff";
    mazeTimesContainer.style.padding = "20px";
    mazeTimesContainer.style.borderRadius = "10px";
    mazeTimesContainer.style.textAlign = "center";
    mazeTimesContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";

    // Add header
    const title = document.createElement('h2');
    title.innerText = "Mayz Complete!";
    title.style.margin = "0 0 10px";
    mazeTimesContainer.appendChild(title);

    // Display each maze time
    mazeTimes.forEach((time, i) => {
        const mazeTimeText = document.createElement('p');
        mazeTimeText.innerText = `Mayz ${i + 1}: ${time.toFixed(2)} seconds`;
        mazeTimeText.style.margin = "5px 0";
        mazeTimesContainer.appendChild(mazeTimeText);
    });

    // Display total time
    const totalTimeText = document.createElement('p');
    totalTimeText.innerText = `Total Time: ${totalTime.toFixed(2)} seconds`;
    totalTimeText.style.marginTop = "15px";
    mazeTimesContainer.appendChild(totalTimeText);

    document.body.appendChild(mazeTimesContainer);

    // Create the restart button
    const restartButton = document.createElement('button');
    restartButton.id = "restartButton"
    restartButton.innerHTML = "Restart";
    restartButton.style.position = "absolute";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.backgroundColor = "var(--accent-color)";
    restartButton.style.color = "var(--base-color)";
    restartButton.style.border = "2px solid var(--text-color)";
    restartButton.style.padding = "10px 20px";
    restartButton.style.fontSize = "16px";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    
    // Button hover effect
    restartButton.addEventListener('mouseover', function() {
        restartButton.style.backgroundColor = "var(--base-color)";
        restartButton.style.color = "var(--text-color)";
    });

    restartButton.addEventListener('mouseout', function() {
        restartButton.style.backgroundColor = "var(--accent-color)";
        restartButton.style.color = "var(--base-color)";
    });

    // Restart button functionality
    restartButton.addEventListener('click', function() {
        mazeIndex = 0;
        mazeTimes = [];
        totalTime = 0;
        loadMaze(mazeIndex);

        // Remove button and times container
        document.body.removeChild(restartButton);
        document.body.removeChild(mazeTimesContainer);

        // Remove resize event listener
        window.removeEventListener('resize', positionEndGameElements);
    });

    document.body.appendChild(restartButton);

    // Initial positioning and set up the resize listener
    positionEndGameElements();
    window.addEventListener('resize', positionEndGameElements);

    // Save the scores after displaying the end game screen
    saveScores();
}


function saveScores() {
    let userEmail = sessionStorage.getItem('userEmail'); 
    if (userEmail) {
        let userDataJSON = localStorage.getItem(userEmail);
        if (userDataJSON) {
            let userData = JSON.parse(userDataJSON);
            userData.mazeTimes = mazeTimes; 
            userData.totalTime = totalTime;
            localStorage.setItem(userEmail, JSON.stringify(userData));
        } else {
            console.error("User data not found");
        }
    }
};

function drawGame() {
    if (ctx == null) { return; }
    if (!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

    // Time tracking
    let currentFrameTime = Date.now();
    let timeElapsed = currentFrameTime - lastFrameTime;
    if (!isPaused) {
        gameTime += timeElapsed;
    }

    // Frame tracking
    let sec = Math.floor(Date.now() / 1000);
    if (sec != currentSecond) {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else { frameCount++; }

    // Movement process
    if (!player.processMovement(gameTime) && !isPaused) {
        if (keysDown[87] && player.canMoveUp()) { player.moveUp(gameTime) }
        else if (keysDown[83] && player.canMoveDown()) { player.moveDown(gameTime) }
        else if (keysDown[65] && player.canMoveLeft()) { player.moveLeft(gameTime) }
        else if (keysDown[68] && player.canMoveRight()) { player.moveRight(gameTime) }
    }

    // Update viewport based on position
    viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2));

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    // Iterate through visibile tiles and draw their sprites to them.
    for (let z = 0; z < mapTileData.levels; z++) {
        for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
            for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
                if (z == 0) {
                    tileTypes[mapTileData.map[toIndex(x, y)].type].sprite.draw(
                        gameTime,
                        viewport.offset[0] + (x * tileW),
                        viewport.offset[1] + (y * tileH));
                }

                let o = mapTileData.map[toIndex(x, y)].object;
                if (o != null && objectTypes[o.type].zIndex == z) {
                    var ot = objectTypes[o.type];

                    ot.sprite.draw(gameTime,
                        viewport.offset[0] + (x * tileW) + ot.offset[0],
                        viewport.offset[1] + (y * tileH) + ot.offset[1]);
                }
            }
        }

        if (z == 1) {
            player.sprites[player.direction].draw(
                gameTime,
                viewport.offset[0] + player.position[0],
                viewport.offset[1] + player.position[1]);
        }
    }

    // Display FPS & Game Status
    ctx.textAlign = "left";
    ctx.fillStyle = "#32CD32";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
    ctx.fillText("Game Paused: " + (isPaused ? "Yes" : "No"), 10, 40);

    // Display timer (when ongoing)
    if (!isPaused && timerStarted) {
        var elapsedTime = (Date.now() - mazeStartTime) / 1000;
        ctx.fillText("Time: " + elapsedTime.toFixed(2) + " seconds", 10, 60);
    }

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);
};

// Convert 2d Array into index
function toIndex(x, y) {
    return ((y * mapW) + x);
};

// Sprite definition 
function Sprite(data) {
    this.animated = data.length > 1;
    this.frameCount = data.length;
    this.duration = 0;
    this.loop = true;

    if (data.length > 1) {
        for (let i in data) {
            if (typeof data[i].d == 'undefined') {
                data[i].d = 100;
            }
            this.duration += data[i].d;

            if (typeof data[i].loop != 'undefined') {
                this.loop = data[i].loop ? true : false;
            }
        }
    }

    this.frames = data;
};

// Draw sprite 
Sprite.prototype.draw = function(t, x, y) {
    let frameIdx = 0;

    if (!this.loop && this.animated && t >= this.duration) {
        frameIdx = (this.frames.length - 1);
    } else if (this.animated) {
        t = t % this.duration;
        let totalD = 0;

        for (let i in this.frames) {
            totalD += this.frames[i].d;
            frameIdx = i;

            if (t <= totalD) {
                break;
            }
        }
    }

    let offset = (typeof this.frames[frameIdx].offset == 'undefined' ? [0, 0] : this.frames[frameIdx].offset);

    ctx.drawImage(tileset,
        this.frames[frameIdx].x, this.frames[frameIdx].y,
        this.frames[frameIdx].w, this.frames[frameIdx].h,
        x + offset[0], y + offset[1],
        this.frames[frameIdx].w, this.frames[frameIdx].h);
};

// Determine Collisions for objects
const objectCollision = {
    none: 0,
    solid: 1
};

// Object types (Only a box, but not currently used in mazes.)
const objectTypes = {
    name : "Box",
	sprite : [{x:40,y:160,w:40,h:40}],
	offset : [0,0],
	collision : objectCollision.solid,
	zIndex : 1
};

// Object Constructor
function MapObject(nt) {
    this.x = 0;
    this.y = 0;
    this.type = nt;
};

// Place Object
MapObject.prototype.placeAt = function(nx, ny) {
    if (mapTileData.map[toIndex(this.x, this.y)].object == this) {
        mapTileData.map[toIndex(this.x, this.y)].object = null;
    }

    this.x = nx;
    this.y = ny;

    mapTileData.map[toIndex(nx, ny)].object = this;
};

// Define floortypes
const floorTypes = {
    solid: 0,
    path: 1,
    endpoint: 2,
    speedboost: 3,
    slowdown: 4
};

// Define tile properties 
const tileTypes = {
    0: { colour: "#685b48", floor: floorTypes.solid, sprite: new Sprite([{ x: 0, y: 0, w: 40, h: 40 }]) },
    2: { colour: "#e8bd7a", floor: floorTypes.path, sprite: new Sprite([{ x: 80, y: 0, w: 40, h: 40 }]) },
    3: { colour: "#ff0000", floor: floorTypes.endpoint, sprite: new Sprite([{ x: 120, y: 0, w: 40, h: 40 }]) },
    4: { colour: "#00ff00", floor: floorTypes.speedboost, sprite: new Sprite([{ x: 160, y: 0, w: 40, h: 40 }])  },
    5: { colour: "#0000ff", floor: floorTypes.slowdown, sprite: new Sprite([{ x: 160, y: 40, w: 40, h: 40 }])}
};

// Tile Constructor
function Tile(tx, ty, tt) {
    this.x = tx;
    this.y = ty;
    this.type = tt;
    this.eventEnter = null;
    this.object = null;
};

// Represents the map (Levels can be changed dynamically in future)
function TileMap() {
    this.map = [];
    this.w = 0;
    this.h = 0;
    this.levels = 4;
};

// Clear existing & build new map
TileMap.prototype.buildMapFromData = function(d, w, h) {
    this.w = w;
    this.h = h;

    if (d.length != (w * h)) { return false; }

    this.map.length = 0;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            this.map.push(new Tile(x, y, d[((y * w) + x)]));
        }
    }

    return true;
};

// Initialise Directions the character can move
const directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};

// Set keys to false
const keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};

// Define viewport object
const viewport = {
    screen: [0, 0],
    startTile: [0, 0],
    endTile: [0, 0],
    offset: [0, 0],
    // Update based on player position & determine tiles that are off screen to cull
    update: function(px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px);
        this.offset[1] = Math.floor((this.screen[1] / 2) - py);

        var tile = [Math.floor(px / tileW), Math.floor(py / tileH)];

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 2) / tileW);
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 2) / tileH);

        if (this.startTile[0] < 0) { this.startTile[0] = 0; }
        if (this.startTile[1] < 0) { this.startTile[1] = 0; }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 2) / tileW);
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 2) / tileH);

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1; }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1; }
    }
};

// Initialise player using character class (allows for more players or customisation)
const player = new Character();

// Character constructor
function Character() {
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];

    this.delayMove = {};
    this.delayMove[floorTypes.path] = 400;
    this.delayMove[floorTypes.speedboost] = 200;
    this.delayMove[floorTypes.slowdown] = 600;
    this.delayMove[floorTypes.endpoint] = 400;

    this.direction = directions.up;
    this.sprites = {};
    this.sprites[directions.up] = new Sprite([{ x: 0, y: 120, w: 30, h: 30 }]);
    this.sprites[directions.right] = new Sprite([{ x: 0, y: 150, w: 30, h: 30 }]);
    this.sprites[directions.down] = new Sprite([{ x: 0, y: 180, w: 30, h: 30 }]);
    this.sprites[directions.left] = new Sprite([{ x: 0, y: 210, w: 30, h: 30 }]);
};

// Place & Center player on tile
Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
};

// Movement Logic Processing
Character.prototype.processMovement = function(t) {
    if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }

    let moveSpeed = this.delayMove[tileTypes[mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor];

    if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1]);

        if (mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
            mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
        }
    } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);

        if (this.tileTo[0] != this.tileFrom[0]) {
            let diff = (tileW / moveSpeed) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
            let diff = (tileH / moveSpeed) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    return true;
};

// Checks if a tile can be moved to 
Character.prototype.canMoveTo = function(x, y) {
    if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
    if (typeof this.delayMove[tileTypes[mapTileData.map[toIndex(x, y)].type].floor] == 'undefined') { return false; }
    if (mapTileData.map[toIndex(x, y)].object != null) {
        let o = mapTileData.map[toIndex(x, y)].object;
        if (objectTypes[o.type].collision == objectCollision.solid) {
            return false;
        }
    }
    return true;
};

// Calls to check if a tile can be moved to based on direction the player is trying to move
Character.prototype.canMoveUp = function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1); };
Character.prototype.canMoveDown = function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1); };
Character.prototype.canMoveLeft = function() { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]); };
Character.prototype.canMoveRight = function() { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function(d) {
    switch (d) {
        case directions.up:
            return this.canMoveUp();
        case directions.down:
            return this.canMoveDown();
        case directions.left:
            return this.canMoveLeft();
        default:
            return this.canMoveRight();
    }
};

// Move the player the specified direction
Character.prototype.moveLeft = function(t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight = function(t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp = function(t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown = function(t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down; };
Character.prototype.moveDirection = function(d, t) {
    switch (d) {
        case directions.up:
            return this.moveUp(t);
        case directions.down:
            return this.moveDown(t);
        case directions.left:
            return this.moveLeft(t);
        default:
            return this.moveRight(t);
    }
};
