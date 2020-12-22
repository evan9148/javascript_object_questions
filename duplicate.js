var dic={
    "ball":"red",
    "bat":4,
    "wickets":8,
    "ball":"green",
    "2":"fdgggh",
    "bat":3
    };
var empty_dic=[];
var i=0;
for (i in dic){
    if (!(i in  empty_dic)){
        empty_dic.push (dic)
    }
}
console.log(empty_dic)