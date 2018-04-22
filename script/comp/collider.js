function handleCollision(pos1, pos2){
        //using a single diameter for the circle
        let radius = 60;

        let d_x = Math.pow(pos2.x - pos1.x, 2);
        let d_y = Math.pow(pos2.y - pos1.y, 2);

        let distance = Math.abs(Math.sqrt(d_x + d_y));

        //Checks if the distance between each object is less than the sum of the radii's
        if (distance <= radius)
        {
            return true;
        }

        return false;
    }