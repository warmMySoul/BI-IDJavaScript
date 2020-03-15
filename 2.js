 var matrix = [];
for(var i=0; i<7; i++) {
    matrix[i] = [];
    for(var j=0; j<7; j++) {
       matrix[i][j] = null;
    }
}

var t=0;

for(var i=0; i<7; i++) {
    for(var j=0; j<7; j++){
      t=j;
      if(i=0)
      {
         matrix[i][j]=2*(t)+3;
      }
      else if(i=1)
      {
        matrix[i][j]=j-(3/(2+(1/t)));
      }
      else
      {
        matrix[i][j]=(t-(3/(2+(1/t))))+(2*(t+1)+3);
      }
      console.log(matrix[i][j]);
    }}