class GameOverScene extends Scene {

    constructor(msg) {
        super();
        this.msg = msg;
    }

    begin() {
        super.begin();
    }

    event() {
        // Register event
        window.addEventListener("keydown", function (e) {

            if (e.keyCode === 90) {
                location.reload();
            }
        }, false);
    }

    update() {
    }

    render() {
        super.render(); // IMPORTANT: you must call super.render(); here first

        // Background color setting
        drawing_surface.beginPath();
        drawing_surface.rect(0, 0, c_width, c_height);
        drawing_surface.fillStyle = "black";
        drawing_surface.fill();

        drawing_surface.font = "30px Arial";
        drawing_surface.fillStyle = "white";
        drawing_surface.fillText(this.msg, 400, 300);

        drawing_surface.font = "30px Arial";
        drawing_surface.fillStyle = "white";
        drawing_surface.fillText("Press Z to go back to menu", 400, 350);
    }

    end() {
        // If there is any end scene logic, insert here
    }
}