/**
 * Engine code, DO NOT modify unless you know this shit
 * Dont worry about this code, I think even I am lost
 */

class Frame {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

class Animation {

    constructor() {
        this.frames = [];
        this.currentFrame = 0;
        this.maxFrame = 0;
    }

    addFrame(frame) {
        this.frames.push(frame);
        this.maxFrame++;
    }

    nextFrame() {
        let result = frames[this.currentFrame];

        if (this.currentFrame + 1 > this.maxFrame) {
            this.currentFrame = 0;
        } else { this.currentFrame++; }

        return result;
    }
}