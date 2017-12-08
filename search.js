div1=document.getElementById("map1");
var dv=document.createElement("div");
	dv.setAttribute("id","inpt");
	div1.append(dv);
textbx=document.createElement("input");
textbx.setAttribute("id","txt");
textbx.setAttribute("placeholder","Enter your input");
div1.append(textbx);

btn=document.createElement("button");
btn.setAttribute("id","butn");
btn.innerHTML="Search";
div1.append(btn); 

function remove(){
	var childq=dv.childNodes;
	for(var i=0;childq.length>0;){
		dv.removeChild(childq[i]);
	}
}
//search countries from database
textbx.addEventListener("keyup",function(event){ 
	remove();
	var str=document.getElementById("txt").value;
	var p=(str.length);
	if(p>0){
	var n=countries1.length;
	var i;
	var Id=1;
	var val=document.createElement("label");
	for(i=0;i<n;i++){
		if(countries1[i].toLowerCase().includes(str)){
			var dv1=document.createElement("div");
			dv1.setAttribute("id",Id);
			dv1.innerHTML=countries1[i];
			dv1.addEventListener("click",function(event){
				textbx.value=event.target.innerHTML;
				var childq=dv.childNodes;
					for(var j=0;j<childq.length;j++){
					childq[j].setAttribute("style","background-color:none");
				}
				event.target.setAttribute("style","background-color:silver");
				div1.append(val);
			});
			dv.append(dv1);
			Id=Id+1;
		}
	}
	div1.append(dv); 
	
	}
});
