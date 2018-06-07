import WebGL = Laya.WebGL;

function log(msg:any)
{
    if(typeof(msg) == "object")
    {
        msg = JSON.stringify(msg);
    }
    document.body.innerHTML += msg + "<br>\n";
    console.log(``);
    console.log(msg);

}

// 程序入口
class GameMain{
    constructor()
    {   
        // 初始化微信小游戏
        Laya.MiniAdpter.init();

        Laya.init(1136, 640, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";

        setTimeout(()=> {
            this.testProto1();
            this.testProto2();
        }, 500);
    }

    testProto1()
    {
        var innerInner = new mylaya.Test.Inner.InnerInner();
        innerInner.enum = mylaya.Test.Enum.FOUR;
        innerInner.long = 666666666;
        innerInner.sint32 = 123;
        
        var inner = new mylaya.Test.Inner();
        inner.outer = outer;
        inner.int32 = 100;
        inner.innerInner = innerInner;

        var outer = new mylaya.Outer();
        outer.bool = [true,true,true,true];
        outer.double = 33.22;

        var test = new mylaya.Test();
        test.float = 11.22;
        test.string = "str";
        test.uint32 = 88;
        test.inner = inner;

        //请注意encode是异步的，如果需要即时调用最后一定要加finish()。
        var encodBytes = mylaya.Test.encode(test).finish();
        log(encodBytes);
        var newTest = mylaya.Test.decode(encodBytes);
        log(newTest);
    }

    testProto2()
    {
        let pbHero = new game.war.HeroInfo(); 
        pbHero.exp = 100;
        var encodBytes = game.war.HeroInfo.encode(pbHero).finish();
        log(encodBytes);

        let msgHero = game.war.HeroInfo.decode(encodBytes);
        log(msgHero);
        log(msgHero.exp);
    }
}
new GameMain();