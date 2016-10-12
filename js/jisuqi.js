var screenObj=document.getElementById('screen');
var numold,numnew,clearBool=false,beforeSign,afterSign,numhome,clicked;
function inputKey(num){
//	if(num=="."){
//		screenObj.value=num/10;
//			}
	if(clearBool){
		clearBool=false;
		screenObj.value='';
	}
	if(screenObj.value=="0"&&num!="."){
		screenObj.value=num;
	}else if(screenObj.value.indexOf(".")==-1&&num!="."){
		screenObj.value+=num;	
	}else if(screenObj.value.indexOf(".")==-1||num!="."){
		screenObj.value+=num;	
	}else if(num=="."){
		if(screenObj.value.indexOf(".")==-1&&screenObj.value!=""){
			if(clicked=="="||clicked=="+"||clicked=="-"||clicked=="*"||clicked=="/"||clicked=="%"){
				screenObj.value="0.";
				clearBool=false;
			}
		}
	}else{
		screenObj.value+=num;
	}
	numhome=Number(screenObj.value);
	clicked=screenObj.value;
}
//清屏
function clearFun(){
	screenObj.value=0;
	numold=0;
	numnew=0;
	numhome=0;
	beforeSign=null;
	clicked=null;
	
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
	    if(clicked=="="||clicked=="+"||clicked=="-"||clicked=="*"||clicked=="/"||clicked=="%"){
	    	beforeSign=sign;
	    }else if(beforeSign==null){
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
	    	clicked=sign;
}
function result(){
	if(beforeSign=="+"){
		screenObj.value=numold+Number(screenObj.value);
		afterSign=beforeSign;
		beforeSign=null;
	}else if(beforeSign=="-"){
		screenObj.value=numold-Number(screenObj.value);
		afterSign=beforeSign;
		beforeSign=null;
	}else if(beforeSign=="*"){
		screenObj.value=numold*Number(screenObj.value);
		afterSign=beforeSign;
		beforeSign=null;
	}else if(beforeSign=="/"){
		screenObj.value=numold/Number(screenObj.value);
		afterSign=beforeSign;
		beforeSign=null;
	}else if(beforeSign=="%"){
		screenObj.value=numold%Number(screenObj.value);
		afterSign=beforeSign;
		beforeSign=null;
	}else {
		if(afterSign=="+"){
//		numnew=Number(screenObj.value);
		b=Number(numhome);
		screenObj.value=b+Number(screenObj.value);
		}else if (afterSign=="-"){
			b=Number(numhome);
		screenObj.value=Number(screenObj.value)-b;
		}else if (afterSign=="*"){
			b=Number(numhome);
		screenObj.value=Number(screenObj.value)*b;
		}else if (afterSign=="/"){
			b=Number(numhome);
		screenObj.value=Number(screenObj.value)/b;
		}else{
			b=Number(numhome);
		screenObj.value=Number(screenObj.value)%b;
		}
		
	}
	    	beforeSign=null;
	    	clicked="=";
}
