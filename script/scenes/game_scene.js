let background;//Background if u couldnt tell

class GameScene extends Scene {
	
    begin() {
        super.begin();
		
		background = new GameObject(
        new Vector2D(0, 0), // Object's position
        "assets/StreetBackground.png", // Image's path
        0.0, // Mass of object IGNORE UNTIL WE GET TO PLAYER
        0.0, // Gravity IGNORE UNTIL WE GET TO PLAYER
        false); // If enable gravity SET TO FALSE FOR NOW
		
		background.begin();
		 
    }

    event() {
    }
	//Mountain people
    update() {
		
<<<<<<< HEAD
=======
		background.update();

>>>>>>> 93930bfb5c873da3232b5299921adb378f4e3944
    }

    render() {
        super.render();
		
		background.render();
    }

    end() {

    }
}