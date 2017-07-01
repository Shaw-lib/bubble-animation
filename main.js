
var myName = "Shao";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 > 3)
{
    // 正方形效果
    bubbleShape = 'square';
}
else
{
    // 圆形效果
    bubbleShape = 'circle';
}

//弹开并颤抖
bounceBubbles();

//仅颤抖
//bounceName();
