var screenObj=document.getElementById('screen');
var numold,numnew,clearBool=false,beforeSign;
function inputKey(num){
	if(clearBool){
		clearBool=false;
		screenObj.value='';
	}
	if(screenObj.value=="0"&&num!="."){
		screenObj.value=num;
	}else if(screenObj.value.indexOf(".")==-1||num!="."){	
		screenObj.value+=num;	
	}
}
//清屏
function clearFun(){
	screenObj.value=0;
	numold=0;
	numnew=0;
}
//删除一个
function del(){
	var a=Number(screenObj.value.length);
	screenObj.value=screenObj.value.substr(0,a-1);
}
//根号
function sqr(){
	screenObj.value=Math.sqrt(screenObj.value);
}
function operatingFun(sign){
	    clearBool=true;
	    if(beforeSign==null){
		     beforeSign=sign;
			numold=Number(screenObj.value);	
	    }else{
	    	numnew=Number(screenObj.value);
//	    	resultSign=beforeSign.slice(0);
	    	if(beforeSign=="+"){
	    		screenObj.value=numold+numnew;
	    	}else if(beforeSign=="-"){
	    		screenObj.value=numold-numnew;
	    	}else if(beforeSign=="*"){
	    		screenObj.value=numold*numnew;
	    	}else if(beforeSign=="/"){
	    		screenObj.value=numold/numnew;
	    	}else{
	    		screenObj.value=numold%numnew;
	    	}
	    	
	    }
	    numold=Number(screenObj.value);
	    	beforeSign=sign;
}
function result(){
	clearBool=true;
	if(beforeSign=="+"){
		screenObj.value=numold+Number(screenObj.value);
	}else if(beforeSign=="-"){
		screenObj.value=numold-Number(screenObj.value);
	}else if(beforeSign=="*"){
		screenObj.value=numold*Number(screenObj.value);
	}else if(beforeSign=="/"){
		screenObj.value=numold/Number(screenObj.value);
	}else{
		screenObj.value=numold%Number(screenObj.value);
	}
	numold=Number(screenObj.value);
	    	beforeSign=null;
}
