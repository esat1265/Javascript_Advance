// How do I develop my algorithm?

// 1. What kind of data structures, objects do I need to code my solution?
// Rectangle, it is composed off 4 points
// Point, it is composed of two integers x,y
// 2. Draw 4 points A(0,4) B(4,4) C(0,4) and D(0,0) Test visually if a point is within boundaries of rectangle ABCD
// Is point G(2,3), K(1,1) within?
// Is point M(5,6) within?
// Define criteria to test if a point within given rectangle ()
// Solution Criteria / Pseudo: A given a point P(x,y) is inside the boundaries of points (A,B,C,D) if x and y are both 


// MinXOf(A,B,C,D)<x<MaxXof(A,B,C,D) && MinYOf(A,B,C,D)<x<MaxYof(A,B,C,D)

// 3. A method to test if a given point is inside of a rectangle
// Parameters : point and rectangle
// Return value bool
// Usage of “if” to test
// Usage of min/max
// Bool isPointInsideOfRectangle(Point p1, Rectangle r1) 

// 4. A method which returns true if two rectangles overlap
// Return value: boolean
// Parameters: two rectangles
// bool IsOverlapping(Rectangle r1, Rectangle r2){

// foreach(Point p of r1){

// if(isPointInsideOfRectangle(p, r2)) { return true // overlaps }
// } 
// return false // does not overlap
// }

// Given this Guide, implement your solutions in Javascript and display the answers in the console. 

// Output exp: isOverlapping(rectangleA, rectangleB) 
// “true” or “false”
