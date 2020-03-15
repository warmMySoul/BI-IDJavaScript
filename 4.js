var a = new Array();
var a = [1,2,3,4,5,9,16,25,13,15,16,25,36,49,56];
var ccount = new Array();
var count = 0,k = 0;
for (var i =0;i<a.length;i++)
{
  if(isInteger(Math.sqrt(a[i])))
  {
    count++;
  }
  else{
    //alert(count);
    ccount[k]=count;
    k++;
    count=0;
  }
}

for(var j = 0; j<ccount.length;j++)
{
  if(count<ccount[j])
  {
    count = ccount[j];
  }
}

alert('Наибольшая последовательность '+ count);

function isInteger(num) {
  return (num ^ 0) === num;
}