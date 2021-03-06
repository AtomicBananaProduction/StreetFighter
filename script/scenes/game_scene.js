let background;//Background if u couldnt tell

let player1;
let player2;

// UI
let player1_hp;
let player2_hp;

// Event handle
let is_keydown = false;

let animation_time = 0;

// AI
let action_timer = 0;

let speed = -10;

let ai_blocking = false;
let player_blocking = false;

// Game control
let is_game_over = false;
let end_game_msg;

let end_game_timer = 0;

function buildCharacterGameObject(id) {
    let char;

    // Animations
    let ani_idle; // 0
    let ani_walk; // 1
    let ani_punch;// 2
    let ani_kick; // 3
    let ani_jump; // 4
    let ani_death;// 5
    let ani_hurt; // 6
    let ani_block;// 7

    switch (id) {
        case 1: // Boxer logic
            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/tj.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 5); // Add a row of animation (6 frames)

            ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 7);

            ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
            ani_punch.addFrame(null);

            ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 5);
            ani_kick.addFrame(null);

            ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
            ani_jump.addFrame(null);

            ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 3);
            ani_death.addFrame(null);

            ani_hurt = new SFAnimation(1);
            ani_hurt.addHorizontalFrames(new Frame(0, 600, 70, 100), 2);
            ani_hurt.addFrame(null);

            ani_block = new SFAnimation(1);
            ani_block.addFrame(new Frame(0, 500, 70, 100));

            //char.renderScale = 5; // Set scale to 5 so that he looks big
            break;
        case 0: // jago

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
            ani_punch.addFrame(null);

            ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 6);
            ani_kick.addFrame(null);

            ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
            ani_jump.addFrame(null);

            ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 4);
            ani_death.addFrame(null);

            ani_hurt = new SFAnimation(1);
            ani_hurt.addHorizontalFrames(new Frame(0, 600, 70, 100), 2);
            ani_hurt.addFrame(null);

            ani_block = new SFAnimation(1);
            ani_block.addFrame(new Frame(0, 500, 70, 100));

            break;
        case 3: // Wolf logic
            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/Wulf_SpriteSheet.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 4); // Add a row of animation (6 frames)

            ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 6);

            ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
            ani_punch.addFrame(null);

            ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 4);
            ani_kick.addFrame(null);

            ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
            ani_jump.addFrame(null);

            ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 3);
            ani_death.addFrame(null);

            ani_hurt = new SFAnimation(1);
            ani_hurt.addHorizontalFrames(new Frame(0, 600, 70, 100), 2);
            ani_hurt.addFrame(null);

            ani_block = new SFAnimation(1);
            ani_block.addFrame(new Frame(0, 500, 70, 100));

            break;
        case 2: // idk his name logic
            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/fulgore_SpriteSheet.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 5); // Add a row of animation (6 frames)

            ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 6);

            ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
            ani_punch.addFrame(null);

            ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 3);
            ani_kick.addFrame(null);

            ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 3);
            ani_jump.addFrame(null);

            ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 3);
            ani_death.addFrame(null);

            ani_hurt = new SFAnimation(1);
            ani_hurt.addHorizontalFrames(new Frame(0, 600, 70, 100), 2);
            ani_hurt.addFrame(null);

            ani_block = new SFAnimation(1);
            ani_block.addFrame(new Frame(0, 500, 70, 100));
            break;
        case 4: // Inverted Boxer logic
            char = new GameObject(
                new Vector2D(0, 0), // Object's position
                "assets/char/inv_tj.png", // Image's path
                5.0,
                -9.8,
                true);

            ani_idle = new SFAnimation(1);
            ani_idle.addHorizontalFrames(new Frame(0, 0, 70, 100), 5); // Add a row of animation (6 frames)

            ani_walk = new SFAnimation(1);
            ani_walk.addHorizontalFrames(new Frame(0, 100, 70, 100), 7);

            ani_punch = new SFAnimation(1);
            ani_punch.addHorizontalFrames(new Frame(0, 200, 70, 100), 5);
            ani_punch.addFrame(null);

            ani_kick = new SFAnimation(1);
            ani_kick.addHorizontalFrames(new Frame(0, 300, 70, 100), 5);
            ani_kick.addFrame(null);

            ani_jump = new SFAnimation(1);
            ani_jump.addHorizontalFrames(new Frame(0, 400, 70, 100), 4);
            ani_jump.addFrame(null);

            ani_death = new SFAnimation(1);
            ani_death.addHorizontalFrames(new Frame(0, 700, 70, 100), 3);
            ani_death.addFrame(null);

            ani_hurt = new SFAnimation(1);
            ani_hurt.addHorizontalFrames(new Frame(0, 600, 70, 100), 2);
            ani_hurt.addFrame(null);

            ani_block = new SFAnimation(1);
            ani_block.addFrame(new Frame(0, 500, 70, 100));

            //char.renderScale = 5; // Set scale to 5 so that he looks big
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
    char.addAnimation(ani_hurt);
    char.addAnimation(ani_block);

    return char;
}

class GameScene extends Scene {
    constructor(id) {
        super();
        this.char_id = id;
    }

    begin() {
        super.begin();

        background = new GameObject(
            new Vector2D(0, 0), // Object's position
            "assets/StreetBackground.png", // Image's path
            0.0, // Mass of object IGNORE UNTIL WE GET TO PLAYER
            0.0, // Gravity IGNORE UNTIL WE GET TO PLAYER
            false); // If enable gravity SET TO FALSE FOR NOW

        player1 = buildCharacterGameObject(this.char_id); // Player
        player2 = buildCharacterGameObject(4); // AI
        player1.position = new Vector2D(0, 480);
        player2.position = new Vector2D(820, 480);

        background.begin();
        player1.begin();
        player2.begin();

        //UI
        player1_hp = new HealthBar(new Vector2D(30, 30), 250, 30, 100);
        player2_hp = new HealthBar(new Vector2D(c_width - 250 - 30, 30), 250, 30, 100);

    }

    event() {
        // Register event
        window.addEventListener("keydown", function (e) {
            if (animation_time > 0) {
                return;
            }

            if (end_game_timer > 0) return;

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
                        player1.currentAnimation = 4;
                        animation_time = 3;
                    }
                    break;
                case 81:
                    if (!is_keydown) {
                        player1.currentAnimation = 2;
                        animation_time = 3;

                        // In collider range
                        if (handleCollision(player1.position, player2.position)) {
                            if (Math.floor((Math.random() * 2)) === 0) {
                                if (!ai_blocking) {
                                    player2_hp.modHP(Math.floor((Math.random() * -13) - 8));

                                    // AI hurt animation
                                    player2.currentAnimation = 6;
                                    action_timer = 25;
                                }
                            } else { // Block
                                action_timer = 35;
                                ai_blocking = true;

                                player2.currentAnimation = 7;
                            }
                        }
                    }
                    break;
                case 69:
                    if (!is_keydown) {
                        player1.currentAnimation = 3;
                        animation_time = 4;

                        // In collider range
                        if (handleCollision(player1.position, player2.position)) {
                            if (Math.floor((Math.random() * 2)) === 0) {
                                if (!ai_blocking) {
                                    player2_hp.modHP(Math.floor((Math.random() * -20) - 16));

                                    // AI hurt animation
                                    player2.currentAnimation = 6;
                                    action_timer = 25;
                                }
                            } else {
                                action_timer = 35;
                                ai_blocking = true;

                                player2.currentAnimation = 7;
                            }
                        }
                    }
                    break;
                case 70:
                    player_blocking = true;
                    player1.currentAnimation = 7;
                    break;
            }

            is_keydown = true;
        }, false);

        window.addEventListener("keyup", function (e) {
            player_blocking = false;

            if (animation_time <= 0) {
                animation_time = 0;

                is_keydown = false;
                player1.currentAnimation = 0;
            } else {
                animation_time--;
            }
        }, false);
    }

    update() {
        // Death handler
        if (end_game_timer > 0) {
            end_game_timer--;
        } else {
            if (is_game_over) {
                switchScene(new GameOverScene(end_game_msg))
            }
        }

        if (player1_hp.current_hp <= 0 && !is_game_over) {
            player1.freeze_after_animation_loop = true;
            player1.currentAnimation = 5;
            is_game_over = true;

            end_game_timer = 60;
            end_game_msg = "Game over! You lost!"
        }

        if (player2_hp.current_hp <= 0 && !is_game_over) {
            player2.freeze_after_animation_loop = true;
            player2.currentAnimation = 5;
            is_game_over = true;

            end_game_timer = 60;
            end_game_msg = "You won the game!"
        }

        if (is_game_over) return;

        background.update();
        player1.update();
        player2.update();

        // AI

        if (action_timer <= 0) { // If no action are taken in place atm
            ai_blocking = false; // Unblocks

            if (player2.position.x < 450) {
                speed = 10;
            } else if (player2.position.x > 800) {
                speed = -10;
            }

            if (handleCollision(player1.position, player2.position)) { // If player is in range

                if (Math.floor((Math.random() * 2)) === 0) {
                    action_timer = 30;
                    player2.currentAnimation = 2; // punch

                    if (!player_blocking) {
                        player1_hp.modHP(Math.floor((Math.random() * -13) - 8));

                        player1.currentAnimation = 6;
                        animation_time = 2;
                    }
                } else {
                    action_timer = 30;
                    player2.currentAnimation = 3; // kick

                    if (!player_blocking) {
                        player1_hp.modHP(Math.floor((Math.random() * -20) - 16));

                        player1.currentAnimation = 6;
                        animation_time = 2;
                    }
                }
            } else {
                player2.currentAnimation = 1;
                player2.position.x += speed;
            }
        } else {
            action_timer--;
        }
    }

    render() {
        super.render();

        background.render();
        player1.render();
        player2.render();

        player1_hp.render();
        player2_hp.render();
    }

    end() {

    }
}