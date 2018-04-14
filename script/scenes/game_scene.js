class GameScene extends Scene {
	
	let background;//Background if u couldnt tell

    begin() {
        super.begin();
		
		background = new GameObject(
        new Vector2D(0, 0), // Object's position
        "assets/streetBackground.png", // Image's path
        0.0, // Mass of object IGNORE UNTIL WE GET TO PLAYER
        0.0, // Gravity IGNORE UNTIL WE GET TO PLAYER
        false); // If enable gravity SET TO FALSE FOR NOW
		
		background.begin();
		 
    }

    event() {
    }
	//Mountain people
    update() {
		
		background.update();

    }

    render() {
        super.render();
		
		background.render();
    }

    end() {

    }
}