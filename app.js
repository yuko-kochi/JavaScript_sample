var hello = 'Hello World'
alert(hello);

//文字列の結合
alert('Hello' + 'World');

var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

// 上記３つのコードは全て同じ結果

var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い')
}　else if(orange == apple){
  alert('みかんとりんごが同じ値段')
} else {
  alert('みかんの値段がリンゴより高い')
}

var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

var i;
var num = 0;

for(i = 1;i < 11;i++){
  num = num + i;
}
alert('1から10までの足し算した結果は' + num + 'です');
