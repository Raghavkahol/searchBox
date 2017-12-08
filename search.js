div1=document.getElementById("map1");
var dv=document.createElement("div");
	dv.setAttribute("id","inpt");
	div1.append(dv);
	 var enter = 13;
    var down = 40;
    var up = 38;
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
var cnt=0;
var c=0;
textbx.addEventListener("keyup",function(event){ 
	if(event.which==down){
		if(c==-1)
			cnt=cnt+parseInt(1);
		var childq=dv.childNodes;
		for(var j=0;j<childq.length;j++){
		if(j!=cnt)
			childq[j].setAttribute("style","background-color:none");
			}
			console.log(cnt);
		childq[cnt].setAttribute("style","background-color:silver");
		textbx.value=childq[cnt].innerHTML;
		if(cnt==childq.length-1)
			cnt=-1;
		cnt=cnt+parseInt(1);
		c=1;
	}else if(event.which==up){
		if(c==1){ 
			if(cnt-2<0)
				cnt=0;
			else
			cnt=cnt-2;
		}else{
			if(cnt-1<0)
				cnt=0;
			else
			cnt=cnt-1;
		}
		var childq=dv.childNodes;
		for(var j=0;j<childq.length;j++){
		//if(j!=cnt)
			childq[j].setAttribute("style","background-color:none");
			}
		childq[cnt].setAttribute("style","background-color:silver");
		textbx.value=childq[cnt].innerHTML;
		c=-1;
	}else{ 
	cnt=0;
	
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
				cnt=parseInt(event.target.id);
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
	
	}else
		remove();
	}
});


	

