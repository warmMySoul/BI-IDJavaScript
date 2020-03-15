var arr = new Array();

for(var i=0;i<80;i++)
{
  arr[i]=makeid(1);
}
var count=0;
var k = 40;
for(var i=0;i<40;i++)
{
  if(arr[i]!=arr[k])
  {
    console.log('Несоответствие')
    count++;
  }
  else
  {
    console.log('!!!!!!!!!!Соответствие')
  }
  k++;
}

 console.log('Всего несоответствий '+count);


function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}