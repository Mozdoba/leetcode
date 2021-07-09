/**
 * Given a location and set of coordinates find the closest 5 set of coordinates,
 * Mapping app - 5 nearest restuarants
 */

/** start [x,y]
 * points [[x1,y1], [x2,y2], [x3,y3], ...n]
 * n = 5 nearest
 *
 Time Complexity - O(nLogn) - sort
 Space Complexity - O(n)
 */

 // key - distance ---> value - [points, n]
const solution = (points, start, n) => {
    const getAllDistances = (points, start) => {
        const distanceList = Array();
        for (let i = 0; i < points.length; i++) {
            distanceList.push([points[i], getDistance(start, points[i])]);
        }
        return distanceList;
    }

    const distances = getAllDistances(points, start);
    return distances.sort(([point1, distance1], [point2, distance2]) => distance1 - distance2).slice(0,n);
}

