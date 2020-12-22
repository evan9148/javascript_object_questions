var list1=["one","two","three","four","five"];
var list2=[1,2,3,4,5];
var dic={};
for (var i=0; i<list1.length; i++){
    dic[list1[i]]=list2[i]
}
console.log(dic)