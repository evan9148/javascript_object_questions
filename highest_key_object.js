var my_dict = {
    'a':50, 
    'b':58, 
    'c':56,
    'd':40, 
    'e':100, 
    'f':20,
};
var a=[];
var first_max=0;
var second_max=0;
var third_max=0;
for (var i=0; i<my_dict.length; i++){
    for (var j=0; j<my_dict.length; j++){
        if (my_dict[j]>first_max){
            first_max=my_dict[j]
            var b=j;
        }else if (first_max>my_dict[j] && second_max<my_dict[j]){
            second_max=my_dict[j]
            var c=j;
        }else if (second_max>my_dict[j] && third_max<my_dict[j]){
            third_max=my_dict[j]
            var d=j;
        }
a.push(b)
a.push(c)
a.push(d)
    }
}
console.log(a)
