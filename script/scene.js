/**
 * Engine code, DO NOT modify unless you know this shit
 * Base class for a scene
 */
class Scene {

    constructor() {
        // Preventing instantiation of Scene class because this is an abstract class
        if (new.target === Scene) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    // Use for initialize a scene
    begin() {
    }

    // Use for input handle
    event() {
    }

    // Use for in game logic update
    update() {
    }

    // Used for rendering
    render() {
        drawing_surface.clearRect(0, 0, c_width, c_height);
    }

    // Use for end scene logic
    end() {
    }
}
