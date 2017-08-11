var font = {
  ele:document.createElement("div"),
	image : "./img/wild_chicken.png",
	init:function(){
    this.ele.style.position = "fixed";
		this.ele.style.top = "20px";
		this.ele.style.left = "20px";
    this.ele.style.height = "30px";
    this.ele.style.zIndex = "100";
		document.body.style.background = "url(" + this.image + ") no-repeat";
		document.body.style.backgroundSize = "100% 100%";
    document.body.appendChild(this.ele,2);
	}
}
