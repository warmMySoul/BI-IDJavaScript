var n = prompt('Наиб степень x (n): ');

  var p=new Array(n+1);
  
  for(var i=0;i<=n;i++){
    p[i] = prompt('Коэффициент при x (по убыванию): ');
  }
  var a=prompt('Значение а:');
  var f=new Array();
  f[0]=p[0];
  f[n+1]=-p[n]*(a*a);
  
  for(var i=1; i<=n;i++){
  f[i]=p[i]-a*a*p[i-1];
}
alert('Новые коэфициенты (x^2-a^2)P(x): ');
alert(f);
