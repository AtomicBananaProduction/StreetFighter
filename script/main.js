/**
 * Engine code, DO NOT modify unless you know this shit
 */

$(document).ready(function() {
    awake(); // Always awake first
    switchScene(new MenuScene()); // Setup first scene of the game
    init(); // Init game
});