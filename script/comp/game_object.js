/**
 * Engine code, DO NOT modify unless you know this shit
 */

class GameObject {

    constructor(position, sprite, mass, gravity, enableGravity) {
        this.position = position; // Position of this game object
        this.src = sprite; // The src of the image
        this.sprite = null; // The sprite of the object
        this.mass = mass; // Mass
        this.gravity = gravity; // Gravity
        this.enableGravity = enableGravity; // Enable gravity

        this.currentAnimation = 0; // Current animation index

        this.animations = []; // Animation list

        this.renderScale = 1;
    }

    begin() {
        this.sprite = new Image(); // Create new image
        this.sprite.src = this.src; // Set current image src
    }

    update() {
        if (this.enableGravity) { // Enable gravity
            if (this.position.y < 450) {
                this.position.y += 30;
            } else {
                this.position.y = 480;
            }
        }
    }

    render() {
        // If no animation aka static image
        if (this.animations.length === 0) {
            drawing_surface.drawImage
            (
                this.sprite,
                this.position.x, this.position.y
            );
        } else { // If there are animation list
            let ani = this.animations[this.currentAnimation].nextFrame(); // Switch frame

            drawing_surface.drawImage
            (
                this.sprite,
                ani.x, ani.y, ani.w, ani.h,
                this.position.x, this.position.y, ani.w * this.renderScale, ani.h * this.renderScale
            );
        }
    }

    // Use to add a set of animations
    addAnimation(ani) {
        this.animations.push(ani);
    }


}