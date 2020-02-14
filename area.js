// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area.
// If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
 if( l === w ){
 var area = (l * w)
 return area
}else{
var perimeter =  (l + w) + (l + w)
return perimeter
}
}
Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
