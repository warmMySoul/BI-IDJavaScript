var count=0;
var a = new Array();
var a = [0,1,3,5,7,9,11,13,15,17];

for(var i = 1; i < 10;i++)
{
  count+=((Math.pow((-1),i+1))*a[i]);
}
 console.log(count);