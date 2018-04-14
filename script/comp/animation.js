class SFAnimation {

    constructor(maxDelay) {
        this.frames = [];
        this.currentFrame = 0;
        this.maxFrame = 0;

        this.delay = 0;
        this.maxDelay = maxDelay;
    }

    addFrame(frame) {
        this.frames.push(frame);
        this.maxFrame++;
    }

    nextFrame() {
        let result = this.frames[this.currentFrame];

        if (this.delay >= this.maxDelay) {
            if (this.currentFrame + 1 > this.maxFrame - 1) {
                this.currentFrame = 0;
            } else {
                this.currentFrame++;
            }

            this.delay = 0;
        } else {
            this.delay++;
        }

        return result;
    }
}