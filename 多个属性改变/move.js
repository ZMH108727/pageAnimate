function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,attr,iTarget){

	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		var iCur = 0;
		if(attr == 'opacity'){
			//程序中应当尽量避免使用小数，此处直接转换成正数，避免出现3.000000001等等小数
			iCur = parseInt(parseFloat(getStyle(obj,attr))*100));
			console.log(iCur);
		}
		else{
			iCur = parseInt(getStyle(obj,attr));
			console.log(iCur);
		}
		var iSpeed = (iTarget - iCur)/8;
		iSpeed = iSpeed >0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(iCur == iTarget){
			clearInterval(obj.timer);
		}
		else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+ (iCur + iSpeed) +')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}
			else{
				//obj.style[attr]访问stylel里面的属性值
				obj.style[attr] = iCur + iSpeed +'px';
			}
			
		}

	},30);
}