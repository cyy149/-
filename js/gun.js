;(function(){
	var gun = {
		ele:document.createElement("div"),
		init:function(){
			this.ele.style.position = "absolute";
			this.ele.style.zIndex = 3;
			this.ele.style.top = "100px";
			this.ele.style.left = "300px";
			this.ele.style.width = "90px";
			this.ele.style.height = "90px";
			this.ele.style.background = "url('./img/chicken.gif') no-repeat 0px 0px";
			this.ele.style.backgroundSize = "contain";
			document.body.appendChild(this.ele);
		},
		moveTo:
			function(x,y){
			//console.info("手枪要移动到"+ x +": "+ y);
			//把gun移动到x,y处。
			//相当于是要改top ,left
			this.ele.style.top  = y-70 +"px";
			this.ele.style.left = x-45 +"px";
		}
	}
	window.gun = gun;
})();
