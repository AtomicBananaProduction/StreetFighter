function handleCollision(pos1, pos2){
        //using a single diameter for the circle
        let collisionDiameter = 120;

        let mag1 = Math.sqrt(Math.pow(pos1.x + 35, 2) + Math.pow(pos1.y + 50, 2));
        let mag2 = Math.sqrt(Math.pow(pos2.x + 35, 2) + Math.pow(pos2.y + 50, 2));

        let ac_distance = Math.abs(mag2 - mag1);

        //Checks if the distance between each object is less than the sum of the radii's
        if (ac_distance <= collisionDiameter)
        {
            return true;
        }

        return false;
    }