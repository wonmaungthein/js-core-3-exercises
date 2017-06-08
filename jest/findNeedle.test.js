

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle', ]
var differentThings= ['pony', 'water', 'keyboard', 'needle','needle', 'cactus'];
var needlePosition = [];
function findNeedle(haystack) {
  for(var i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") {
      needlePosition.push(i);
    } 
  } return needlePosition;
}
test("should return needle 3", function (){
    expect (findNeedle(haystack1)).toBe(3);
})

test ("HayStack2",function(){
    expect (findNeedle(haystack2)).toBe(1);
} )

test ("differentThings", function(){
    expect(findNeedle(whatever)).toEqual([3,4]);
})

