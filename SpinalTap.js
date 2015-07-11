function spinalCase(str) {
var str1=[];
str=str.replace(/\s/g,'-').replace(/_/g,'-');
if(str.indexOf('-')>0) return str.toLowerCase();
else
for(var i in str)
{if(str[i]===str[i].toUpperCase())
{str1.push('-');}str1.push(str[i]);
}
return str1.join('').toLowerCase();
}
spinalCase('thisIsSpinalTap');
