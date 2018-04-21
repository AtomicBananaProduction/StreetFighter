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

    addHorizontalFrames(begin_frame, count) {
        this.addFrame(begin_frame);

        for (let i = 1; i < count; i++) {
            let nextFrame = new Frame(begin_frame.x + begin_frame.w * i, begin_frame.y, begin_frame.w, begin_frame.h);
            this.addFrame(nextFrame);
        }
    }

    peekFrame() {
            if (this.currentFrame + 1 > this.maxFrame - 1) {
                return this.frames[0];
            } else {
                return this.frames[this.currentFrame + 1];
            }
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