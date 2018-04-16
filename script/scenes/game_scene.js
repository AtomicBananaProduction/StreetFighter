let background;//Background if u couldnt tell

let player1;

// UI
let player1_hp;

function buildCharacterGameObject(id) {
    let char;

    // Animations
    let ani_idle;
    let ani_walk;
    let ani_punch;
    let ani_kick;
	let ani_jump;//added jump
    let ani_death;

    switch (id) {
        case 0: // Boxer logic
            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/tj.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 5); // Add a row of animation (6 frames)

            ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 85, 37, 49), 7);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 7);
			
			ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
			
			ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 5);
			
			ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
			
			ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 3);

            //char.renderScale = 5; // Set scale to 5 so that he looks big
            break;
        case 1: // jago

            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/Jago.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 6); // Add a row of animation (6 frames)
			
			ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 7);
			
			ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
			
			ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 6);
			
			ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
			
			ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 4);

            break;
    }

    char.renderScale = 2.5; // Set scale to 5 so that he looks big

    // Add all universal animations
    char.addAnimation(ani_idle);
    char.addAnimation(ani_walk);
    char.addAnimation(ani_punch);
    char.addAnimation(ani_kick);
	char.addAnimation(ani_jump);//Added Jump
    char.addAnimation(ani_death);

    return char;
}

class GameScene extends Scene {
	
    begin() {
        super.begin();
		
		background = new GameObject(
        new Vector2D(0, 0), // Object's position
        "assets/StreetBackground.png", // Image's path
        0.0, // Mass of object IGNORE UNTIL WE GET TO PLAYER
        0.0, // Gravity IGNORE UNTIL WE GET TO PLAYER
        false); // If enable gravity SET TO FALSE FOR NOW

        player1 = buildCharacterGameObject(1);
		
		background.begin();
        player1.begin();

        //UI
        player1_hp = new HealthBar(new Vector2D(30, 30), 250, 30, 100);

    }

    event() {
        // Register event
        window.addEventListener("keydown", function (e) {

            // Player controls
            switch (e.keyCode) {
                // Walk
                case 65: // Walk left
                    player1.currentAnimation = 1;
                    player1.position.x -= 10;
                    break;
                case 68: // Walk right
                    player1.currentAnimation = 1;
                    player1.position.x += 10;
                    break;
                // Jump
                case 32:
                    if (player1.position.y >= 450) {
                        player1.position.y -= 200;
                    }
                    break;
            }
        }, false);

        window.addEventListener("keyup", function (e) {
            player1.currentAnimation = 0;
        }, false);
    }

    update() {
		background.update();
        player1.update();

        player1_hp.modHP(-1);
    }

    render() {
        super.render();
		
		background.render();
        player1.render();

        player1_hp.render();
    }

    end() {

    }
}