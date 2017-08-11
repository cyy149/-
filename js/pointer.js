var pointer = {
	ele:document.createElement("div"),
	init:function(){
		this.ele.style.position = "fixed";
		this.ele.style.top = "20px";
		this.ele.style.left = "20px";
		this.ele.style.fontFamily = "微软雅黑";
		this.ele.style.fontSize = "15px";
		this.ele.style.width = "150px"
		this.ele.style.height = "30px";
		this.ele.style.border = "2px dashed Blue";
		this.ele.style.borderRadius = "25px";
		this.ele.style.padding= "3px 5px 10px";
		this.ele.innerHTML = "你的得分："
		document.body.appendChild(this.ele);
	},
	addMark:function(n){
		game.score += n;
		this.ele.innerHTML = "你的得分：" + game.score;
	}
}
