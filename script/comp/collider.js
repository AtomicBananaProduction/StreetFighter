class Collider {

    handleCollision(_gameObject1, _gameObject2){
        this.position1 = _gameObject1.position;
        this.position2 = _gameObject2.position;
        //using a single diameter for the circle
        this.collisionDiameter = 20;

        //Since it's a circle the width and height should be the same
        this.width = this.collisionDiameter;
        this.height = this.collisionDiameter;

        this.center_X1 = this.position1.x + (this.width / 2);
        this.center_X2 = this.position2.x + (this.width / 2);

        this.center_Y1 = this.position1.y + (this.height / 2);
        this.center_Y2 = this.position2.y + (this.height / 2);

        //Calculate the vector of the position in relation to the centers of each object
        var vx = this.center_X1 - this.center_X2;
        var vy = this.center_Y1 - this.center_Y2;

        //Calculate the distance (magnitude) between both centers
        var magnitude = Math.sqrt(vx * vx + vy * vy);

        //Add both objects radii so it...
        var totalRadii = (this.width / 2) + (this.width / 2);

        //Checks if the distance between each object is less than the sum of the radii's
        if(magnitude < totalRadii)
        {
            //If yes, then they are colliding
            var overlap = totalRadii - magnitude;

            //Get the direction normalized of each vector
            dx = vx / magnitude;
            dy = vy / magnitude;

            //updates the object position regarding the overlap and the direction.
            _gameObject1.position.x += overlap * dx;
            _gameObject1.position.y += overlap * dy;
        }
    }

}