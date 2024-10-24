var ctx = null;


// Maze data
var mazes = [
    {
        map: [
            // Maze 1 layout
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0,
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
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0,
            0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0,
            0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0,
            0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0,
            0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
            0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
            0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0,
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

// Initialize necessary variables
var mapTileData = new TileMap();
var tileW = 40, tileH = 40;
var mapW = 20, mapH = 20;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
var tileset = null, tilesetURL = "../IMG/GameIMGs/tileset.png", tilesetLoaded = false;
var isPaused = false; 
var pauseStartTime = 0; // Tracks when the game was pausedvar pauseStartTime = 0; // Tracks when the game was paused
var gameTime = 0;

// Maze time variables
var mazeTimes = [];  // Store times for each maze
var totalTime = 0;   // Total time for all mazes
var mazeIndex = 0; 
var mazeStartTime = 0; 
var timerStarted = false; 

window.onload = function() {
    ctx = document.getElementById('game').getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function(e) {
        if ([65, 68, 83, 87].includes(e.keyCode)) {
            keysDown[e.keyCode] = true;

            // Timer starts only when W, A, S, or D keys are pressed
            if (!timerStarted) {
                mazeStartTime = Date.now();
                timerStarted = true;
            }
        }
    });

    window.addEventListener("keyup", function(e) {
    if ([65, 68, 83, 87].includes(e.keyCode)) {
        keysDown[e.keyCode] = false;
    }
    if (e.keyCode == 80) { 
        isPaused = !isPaused;
        if (isPaused) {
            pauseStartTime = Date.now(); // Record the time when the game is paused
        } else {
            // Adjust mazeStartTime by the duration of the pause
            mazeStartTime += Date.now() - pauseStartTime;
        }
    }
});

    viewport.screen = [document.getElementById('game').width, document.getElementById('game').height];

    tileset = new Image();
    tileset.onerror = function() {
        ctx = null;
        alert("Failed loading tileset.");
    };
    tileset.onload = function() { tilesetLoaded = true; };
    tileset.src = tilesetURL;

    loadMaze(mazeIndex); 
};

function loadMaze(index) {
    if (index >= mazes.length) {
        endGame();
        return;
    }

    const maze = mazes[index];
    mapTileData.buildMapFromData(maze.map, mapW, mapH);
    player.placeAt(1, 1);

    mapTileData.map[toIndex(maze.endpoint.x, maze.endpoint.y)].eventEnter = function() {
        var timeSpent = (Date.now() - mazeStartTime) / 1000;
        mazeTimes.push(timeSpent);
        mazeIndex++;  // Move to the next maze
        loadMaze(mazeIndex);
    };

    mazeStartTime = Date.now();  // Reset timer for the new maze
    timerStarted = false; // Ensure the timer starts on key press
    isPaused = false;

    // Check if any W, A, S, D keys are already being held and start the timer
    if (keysDown[65] || keysDown[68] || keysDown[83] || keysDown[87]) {
        mazeStartTime = Date.now();
        timerStarted = true;
    }

    // Remove the restart button if present
    const restartButton = document.querySelector('button');
    if (restartButton) {
        restartButton.remove();
    }
}


function endGame() {
    totalTime = mazeTimes.reduce((a, b) => a + b, 0);
    isPaused = true;
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(50, 50, viewport.screen[0] - 100, viewport.screen[1] - 100);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", viewport.screen[0] / 2, 100);

    mazeTimes.forEach((time, i) => {
        ctx.fillText(`Maze ${i + 1}: ${time.toFixed(2)} seconds`, viewport.screen[0] / 2, 150 + i * 30);
    });

    ctx.fillText("Total Time: " + totalTime.toFixed(2) + " seconds", viewport.screen[0] / 2, 300);

    // Create the restart button
    const restartButton = document.createElement('button');
    restartButton.innerHTML = "Restart";

    // Style the restart button using the provided color scheme
    restartButton.style.position = "absolute";
    restartButton.style.top = "350px";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translateX(-50%)";
    restartButton.style.backgroundColor = "#8a817c"; // Accent color
    restartButton.style.color = "#f4f3ee"; // Text color
    restartButton.style.border = "2px solid #463f3a"; // Darker text color for the border
    restartButton.style.padding = "10px 20px";
    restartButton.style.fontSize = "16px";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    
    // Button hover effect
    restartButton.addEventListener('mouseover', function() {
        restartButton.style.backgroundColor = "#f4f3ee"; // Switch to base color
        restartButton.style.color = "#463f3a"; // Text color on hover
    });

    restartButton.addEventListener('mouseout', function() {
        restartButton.style.backgroundColor = "#8a817c"; // Return to accent color
        restartButton.style.color = "#f4f3ee"; // Return to original text color
    });

    // Button click event to restart the game
    restartButton.addEventListener('click', function() {
        mazeIndex = 0;
        mazeTimes = [];
        totalTime = 0;
        loadMaze(mazeIndex);
        document.body.removeChild(restartButton); // Remove the button after click
    });

    document.body.appendChild(restartButton);

    saveScores();
}

function saveScores() {
    const userEmail = sessionStorage.getItem('userEmail'); // Retrieve the email from sessionStorage
    if (userEmail) {
        const userDataJSON = localStorage.getItem(userEmail);
        if (userDataJSON) {
            // Retrieve existing user data from localStorage
            const userData = JSON.parse(userDataJSON);
            // Update the user's maze times and total time
            userData.mazeTimes = mazeTimes; // Update mazeTimes with the latest scores
            userData.totalTime = totalTime; // Update totalTime with the accumulated time
            // Save the updated data back to localStorage
            localStorage.setItem(userEmail, JSON.stringify(userData));
        } else {
            console.error("User data not found");
        }
    }
}

function drawGame() {
    if (ctx == null) { return; }
    if (!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;
    if (!isPaused) {
        gameTime += timeElapsed;
    }

    var sec = Math.floor(Date.now() / 1000);
    if (sec != currentSecond) {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else { frameCount++; }

    if (!player.processMovement(gameTime) && !isPaused) {
        if (keysDown[87] && player.canMoveUp()) { player.moveUp(gameTime); }
        else if (keysDown[83] && player.canMoveDown()) { player.moveDown(gameTime); }
        else if (keysDown[65] && player.canMoveLeft()) { player.moveLeft(gameTime); }
        else if (keysDown[68] && player.canMoveRight()) { player.moveRight(gameTime); }
    }

    viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2));

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    for (var z = 0; z < mapTileData.levels; z++) {
        for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
            for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
                if (z == 0) {
                    tileTypes[mapTileData.map[toIndex(x, y)].type].sprite.draw(
                        gameTime,
                        viewport.offset[0] + (x * tileW),
                        viewport.offset[1] + (y * tileH));
                }

                var o = mapTileData.map[toIndex(x, y)].object;
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

    ctx.textAlign = "left";

    ctx.fillStyle = "#32CD32";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
    ctx.fillText("Game Paused: " + (isPaused ? "Yes" : "No"), 10, 40);

    if (!isPaused && timerStarted) {
        var elapsedTime = (Date.now() - mazeStartTime) / 1000;
        ctx.fillText("Time: " + elapsedTime.toFixed(2) + " seconds", 10, 60);
    }

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);
}

function toIndex(x, y) {
    return ((y * mapW) + x);
}

function Sprite(data) {
    this.animated = data.length > 1;
    this.frameCount = data.length;
    this.duration = 0;
    this.loop = true;

    if (data.length > 1) {
        for (var i in data) {
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
}
Sprite.prototype.draw = function(t, x, y) {
    var frameIdx = 0;

    if (!this.loop && this.animated && t >= this.duration) {
        frameIdx = (this.frames.length - 1);
    } else if (this.animated) {
        t = t % this.duration;
        var totalD = 0;

        for (var i in this.frames) {
            totalD += this.frames[i].d;
            frameIdx = i;

            if (t <= totalD) {
                break;
            }
        }
    }

    var offset = (typeof this.frames[frameIdx].offset == 'undefined' ? [0, 0] : this.frames[frameIdx].offset);

    ctx.drawImage(tileset,
        this.frames[frameIdx].x, this.frames[frameIdx].y,
        this.frames[frameIdx].w, this.frames[frameIdx].h,
        x + offset[0], y + offset[1],
        this.frames[frameIdx].w, this.frames[frameIdx].h);
};

var objectCollision = {
    none: 0,
    solid: 1
};
var objectTypes = {};

function MapObject(nt) {
    this.x = 0;
    this.y = 0;
    this.type = nt;
}
MapObject.prototype.placeAt = function(nx, ny) {
    if (mapTileData.map[toIndex(this.x, this.y)].object == this) {
        mapTileData.map[toIndex(this.x, this.y)].object = null;
    }

    this.x = nx;
    this.y = ny;

    mapTileData.map[toIndex(nx, ny)].object = this;
};

var floorTypes = {
    solid: 0,
    path: 1,
    endpoint: 2
};
var tileTypes = {
    0: { colour: "#685b48", floor: floorTypes.solid, sprite: new Sprite([{ x: 0, y: 0, w: 40, h: 40 }]) },
    2: { colour: "#e8bd7a", floor: floorTypes.path, sprite: new Sprite([{ x: 80, y: 0, w: 40, h: 40 }]) },
    3: { colour: "#ff0000", floor: floorTypes.endpoint, sprite: new Sprite([{ x: 120, y: 0, w: 40, h: 40 }]) }
};

function Tile(tx, ty, tt) {
    this.x = tx;
    this.y = ty;
    this.type = tt;
    this.roof = null;
    this.roofType = 0;
    this.eventEnter = null;
    this.object = null;
}

function TileMap() {
    this.map = [];
    this.w = 0;
    this.h = 0;
    this.levels = 4;
}
TileMap.prototype.buildMapFromData = function(d, w, h) {
    this.w = w;
    this.h = h;

    if (d.length != (w * h)) { return false; }

    this.map.length = 0;

    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            this.map.push(new Tile(x, y, d[((y * w) + x)]));
        }
    }

    return true;
};
TileMap.prototype.addRoofs = function(roofs) { };

var directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};

var keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};

var viewport = {
    screen: [0, 0],
    startTile: [0, 0],
    endTile: [0, 0],
    offset: [0, 0],
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

var player = new Character();

function Character() {
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];

    this.delayMove = {};
    this.delayMove[floorTypes.path] = 400;
    this.delayMove[floorTypes.endpoint] = 400;

    this.direction = directions.up;
    this.sprites = {};
    this.sprites[directions.up] = new Sprite([{ x: 0, y: 120, w: 30, h: 30 }]);
    this.sprites[directions.right] = new Sprite([{ x: 0, y: 150, w: 30, h: 30 }]);
    this.sprites[directions.down] = new Sprite([{ x: 0, y: 180, w: 30, h: 30 }]);
    this.sprites[directions.left] = new Sprite([{ x: 0, y: 210, w: 30, h: 30 }]);
}
Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
};
Character.prototype.processMovement = function(t) {
    if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }

    var moveSpeed = this.delayMove[tileTypes[mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor];

    if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1]);

        if (mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
            mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
        }
    } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);

        if (this.tileTo[0] != this.tileFrom[0]) {
            var diff = (tileW / moveSpeed) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
            var diff = (tileH / moveSpeed) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    return true;
};
Character.prototype.canMoveTo = function(x, y) {
    if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
    if (typeof this.delayMove[tileTypes[mapTileData.map[toIndex(x, y)].type].floor] == 'undefined') { return false; }
    if (mapTileData.map[toIndex(x, y)].object != null) {
        var o = mapTileData.map[toIndex(x, y)].object;
        if (objectTypes[o.type].collision == objectCollision.solid) {
            return false;
        }
    }
    return true;
};
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
