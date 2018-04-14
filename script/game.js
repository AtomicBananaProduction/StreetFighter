/**
 * Engine code, DO NOT modify unless you know this shit
 */

// Global variables
var canvas;
var drawing_surface;

var c_width;
var c_height;

// Local variables
let current_scene;

// No this is not stolen from unity
function awake() {
    // Init game variables
    canvas = $("#my_canvas");
    drawing_surface = canvas[0].getContext('2d');

    // Thanks Jquery for returning me function definitions instead of canvas size
    c_width = drawing_surface.canvas.width;
    c_height = drawing_surface.canvas.height;
}

///
/// Init
///
function init() {
    // Init main game loop
    // Loop is called every 1/60 second
    setInterval(function () {
        update(); }, 60);
}

function update() {
    current_scene.update(); // Update
    current_scene.render();
}

function switchScene(scene) {
    // If current scene exists, call its ending function
    if (current_scene != null) {
        current_scene.end(); // Call end method for last scene
    }
    current_scene = scene; // Assign new scene to current scenes
    current_scene.begin(); // Call begin method
    current_scene.event();
}