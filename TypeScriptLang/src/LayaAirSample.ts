import Texture = laya.resource.Texture;

import config = game.Config;

class LayaAirSample
{   
    private Res:string;
    private img:Laya.Sprite;

    constructor() 
    {
        Laya.init(800 ,600);
        //调用DebugTool调试面板
        // Laya.DebugTool.init();
        Laya.DebugPanel.init();
        //设置舞台背景色
        Laya.stage.bgColor = "#0";
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        Laya.stage.scaleMode = "noscale"; //fixedheight,full,
    }

    //sample requeest
    public httpRequest()
    {
        var script:any = Laya.Browser.createElement("script");
        Laya.Browser.document.body.appendChild(script);
        script.src = "http://localhost:9090/?a=1";
    }

    public static onComplete():void
    {
        console.log("JSONP执行到这里");
    }

    //sample
    public loadImage()
    {
         //资源路径
        this.Res = "res/img/emoji01.png";
        //先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
        Laya.loader.load(this.Res, Laya.Handler.create(this, this.graphicsImg), null, Laya.Loader.IMAGE);
    }
    private graphicsImg(e:any):void
    {   
        let t:Texture = e as Texture;
        this.img = new Laya.Sprite();
        this.img.graphics.drawTexture(t, 150, 50);
        //获取图片资源，绘制到画布
        // this.img.graphics.drawTexture(Laya.loader.getRes(this.Res),150,50);
        //添加到舞台
        Laya.stage.addChild(this.img);

        Laya.Tween.to(this.img,{y:200},2000,Laya.Ease.elasticOut,null,1000);
    }

    //sample
    public parse(s:string)
    {
        // new config().parse(s);
        new game.Config().parse(s);
    }

    //sample pool
    public spawItem()
    {
        Laya.Pool.getItemByClass("image", Laya.Image);
    }

    //cache as
    public changeText()
    {   
        let t = Laya.Pool.getItemByClass("txt", Laya.Text); 
        t.text = "hello";
        t.color = "#ffffff";
        Laya.stage.addChild(t);
        //后面只是更新文字内容，使用changeText能提高性能
        t.changeText("text changed.");        
    }

    //sample load asset{json}
    public loadJson()
    {   
        console.log("loadJson()");
        let assets:any[] = [];
        assets.push({url: "res/tsconfig.json", type: Laya.Loader.JSON});
        Laya.loader.load(assets, Laya.Handler.create(this, (result:any)=>
        {       
            if(typeof(result) == "boolean")
            {   
                logger.log("boolean");
                if(result)
                {
                    let json:JSON = Laya.loader.getRes("res/tsconfig.json");
                    logger.log(json["exclude"][0]);
                    let str = JSON.stringify(json);
                    logger.log(str);
                }
                
            }
            else if(typeof(result) == "string")
            {
                logger.log("string");
            }
            else if(result instanceof ArrayBuffer)
            {
                logger.log("ArrayBuffer");
            }
        }));
    }

}
let inst:LayaAirSample = new LayaAirSample();
inst.loadImage();
inst.parse("hello");
inst.changeText();
inst.loadJson();


