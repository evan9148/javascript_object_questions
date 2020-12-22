var sampleDict = {
    "name": "Kelly",
    "age":25,
    "salary": 8000,
    "city": "New york"
  };
let empty={};
var i=0;
for (i in sampleDict){
    delete sampleDict["city"];
    sampleDict.location = "New york";
}
console.log(sampleDict)