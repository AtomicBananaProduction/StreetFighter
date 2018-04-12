// Please declare game objects here
let char_list_l; // Left character list
let char_list_r; // Right character list

let player1_select; // Left player selection
let player2_select; // Right player selection

class MenuScene extends Scene {

    begin() {
        // Please ONLY initialize data here
        // Example:
        char_list_l = new GameObject(
            new Vector2D(20, 120), // Object's position
            "assets/char_list.png", // Image's path
            0.0, // Mass of object IGNORE UNTIL WE GET TO PLAYER
            0.0, // Gravity IGNORE UNTIL WE GET TO PLAYER
            false); // If enable gravity SET TO FALSE FOR NOW

        char_list_r = new GameObject(
            new Vector2D(c_width - (208 + 20), 120),
            "assets/char_list.png",
            0.0,
            0.0,
            false);

        player1_select = new GameObject(
            new Vector2D(15, 115),
            "assets/p1_highlight.png",
            0.0,
            0.0,
            false);

        player2_select = new GameObject(
            new Vector2D(c_width - (208 + 20 + 5), 115),
            "assets/p2_highlight.png",
            0.0,
            0.0,
            false);

        // GameObject begin();
        // All objects you created must call begin here
        char_list_l.begin();
        char_list_r.begin();

        player1_select.begin();
        player2_select.begin();
    }

    event() {
        // Event is for key listening if this even works thanks to javascript's relatedness
    }

    update() {
        // GameObject's update, this can usually be ignored if you disabled gravity
        char_list_l.update();
        char_list_r.update();

        player1_select.update();
        player2_select.update();

        // Insert extra logic, for example if you wanted to move an object
    }

    render() {
        super.render(); // IMPORTANT: you must call super.render(); here first

        // Background color setting
        drawing_surface.beginPath();
        drawing_surface.rect(0, 0, c_width, c_height);
        drawing_surface.fillStyle = "black";
        drawing_surface.fill();

        // Text Rendering
        drawing_surface.font = "60px Arial";
        drawing_surface.fillStyle = "white";
        drawing_surface.fillText("Stressful Instinct", c_width / 2 - (220), 100);

        // GameObjects render

        player1_select.render();
        player2_select.render();

        char_list_l.render();
        char_list_r.render();
    }

    end() {
        // If there is any end scene logic, insert here
    }
}