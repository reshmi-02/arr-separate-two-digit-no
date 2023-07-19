var arr=[11,123,455,56,45,346,55,893,31,32];
document.write("arr=[11,123,455,56,45,346,55,893,31,32]"+"<br>"+"<br>");
document.write("The two digit numbers is"+"<br>"+"<br>");
for (let i=0;i<arr.length;i++){
	if((arr[i]>9) && (arr[i]<100)){
		document.write(arr[i]+"<br>");
	}
}
