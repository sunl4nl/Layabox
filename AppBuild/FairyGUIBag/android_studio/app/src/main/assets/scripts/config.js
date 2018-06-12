var loadingView= window.loadingView;
if(loadingView)
{
    loadingView.loadingAutoClose=false;
	loadingView.showTextInfo=true; //所有文字显示，包括tips和加载百分比
    loadingView.bgColor("#ffffff");
    loadingView.setFontColor("#000000");
    loadingView.setTips(["新世界的大门即将打开", "敌军还有30秒抵达战场", "妈妈说，心急吃不了热豆腐"]);
}

window.onLayaInitError=function(e)
{
	console.log("onLayaInitError error=" + e);
	alert("加载游戏失败，可能由于您的网络不稳定，请退出重进");
}

//配置大图合集的数量
conchConfig.pushAtlasLimitSize = 256;//当图片size小于256的时候，合并到大图合集中
var nMem = conchConfig.getTotalMem();
if (nMem <= 524288) {
    conchConfig.atlasNum = 15;//15张 每张为1024*1024
}
else if (nMem > 524288 && nMem <= 1048576) {
    conchConfig.atlasNum = 20;//20张 每张为1024*1024
}
else if (nMem > 1048576) {
     conchConfig.atlasNum = 30;//30张 每张为1024*1024
}
