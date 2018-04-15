class HealthBar {
    constructor(position, width, height, max_hp) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.max_hp = max_hp;

        this.o_width = width;

        this.current_hp = max_hp;
    }

    render() {
        // Background rect
        drawing_surface.fillRect(this.position.x, this.position.y, this.o_width + 6, this.height + 6);
        drawing_surface.save();
        drawing_surface.fillStyle = "red";
        drawing_surface.fillRect(this.position.x + 3, this.position.y + 3, this.width, this.height);
        drawing_surface.restore();
    }

    modHP(amount) {
        this.current_hp += amount;
        if (this.current_hp > 0) {
            let a_amount = amount * (this.o_width / this.max_hp);
            this.width += a_amount;
        } else {
            this.current_hp = 0;
            this.width = 0;
        }
    }
}