function MagicSquare(a){
let k;

let find=false;
let error = false;


for(k=1; k<=n*n;k++){
find=false;
for(i=0;i<n;i++){
for(j=0;j<n;j++){
if(k==a[i][j]){
find=true;
break;
}}
if(find) break;
}
if(!find){
error=true;
alert(a);
alert("Не является магическим квадратом. Нет числа " +k);
break;
}}

if(!error){
let sum=0;
let sumD1=0;
let sumD2=0;
for(j=0;j<n;j++){
sum+=a[0][j];
}
//Сумма строк и диагоналей
for(i=0;i<n;i++){
let sumStr=0;
sumD1+=a[i][i];
sumD2+=a[i][n-i-1];
for(j=0;j<n;j++){
sumStr+=a[i][j];
}
if(sumStr!=sum) {error=true; break;}
}

//Сумма столбцов
for(j=0;j<n;j++){
let sumStolb=0;
for(i=0;i<n;i++){
sumStolb+=a[i][j];
}
if(sumStolb!=sum) {error=true; break;}
}
if(sumD1!=sumD2 || sumD1!=sum) error=true;

if(error==false){
alert(a );
alert("Магический Квадрат!");
}
else{
alert(a);
alert("Не Магический Квадрат!");
}
}
}

let yes =[
[1,15,24,8,17],
[9,18,2,11,25],
[12,21,10,19,3],
[20,4,13,22,6],
[23,7,16,5,14]];

let no =[
[1,8,24,15,17],
[9,18,2,11,25],
[12,21,10,19,3],
[20,4,13,22,6],
[23,7,16,5,14]];

MagicSquare(yes);
MagicSquare(no);