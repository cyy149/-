window.onload = function(){
	var oPlayer = document.getElementById('player');
	var oAudio  = document.getElementsByTagName('audio')[0];
	//当单击播放器的时候，判断：如果音频是暂停的，那么就播放它；否则，就暂停它
	setTimeout(function(){
			oAudio.play();
	},4000);

	oPlayer.onclick = function(){
		if(oAudio.paused){   //暂停的
			oAudio.play();
			oPlayer.style.backgroundPosition = "left top";
		}else{
			oAudio.pause();
			oPlayer.style.backgroundPosition = "left bottom";
		}
	}
}
