let a="javascript"
let count=0
for(let i=0;i<a.length;i++){
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
        console.log(i,a[i]);
        // console.log(a[i]);
        count++;
        
    }
}
console.log("total vowel",count);
