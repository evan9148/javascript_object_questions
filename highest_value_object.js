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
        }else if (first_max>my_dict[j] && second_max<my_dict[j]){
            second_max=my_dict[j]
        }else if (second_max>my_dict[j] && third_max<my_dict[j]){
            third_max=my_dict[j]
        }
a.push(first_max)
a.push(second_max)
a.push(third_max)
    }
}
console.log(a)

// var my_dict = {
//     'a':50, 
//     'b':58, 
//     'c':56,
//     'd':40, 
//     'e':100, 
//     'f':20,
// };
// var a=[];
// var first_max=0;
// var second_max=0;
// var third_max=0;
// var i;
// var j;
// for (i in my_dict){
//     for (j in my_dict){
//         if (my_dict[j]>first_max){
//             first_max=my_dict[j]
//         }else if (first_max>my_dict[j] && second_max<my_dict[j]){
//             second_max=my_dict[j]
//         }else if (second_max>my_dict[j] && third_max<my_dict[j]){
//             third_max=my_dict[j]
//         }
// a.push(first_max)
// a.push(second_max)
// a.push(third_max)
//     }
// }
// console.log(a)

