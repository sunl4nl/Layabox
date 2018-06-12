var loger = game.Log;
class TestWebSocket {
    constructor() {
        //初始化引擎
        Laya.init(600, 400, Laya.WebGL);
        this.byte = new Laya.Byte();
        //这里我们采用小端
        this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket = new Laya.Socket();
        //这里我们采用小端
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        //建立连接
        this.socket.connectByUrl("ws://localhost:8989");
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
        loger.log("TestWebSocket()");
    }
    openHandler(event = null) {
        //正确建立连接；
    }
    receiveHandler(msg = null) {
        ///接收到数据触发函数 
        //接收到数据可以是String，ArrayBuffer
        //.............这里我们假设收到的是二进制ArrayBuffer
        this.byte.clear();
        this.byte.writeArrayBuffer(msg); //把接收到的二进制数据读进byte数组便于解析。
        this.byte.pos = 0; //设置偏移指针；
        ////下面开始读取数据，按照服务器传递过来的数据，按照顺序读取
        var a = this.byte.getByte();
        var b = this.byte.getInt16();
        var c = this.byte.getFloat32();
        var d = this.byte.getString();
        var e = this.byte.getUTFString();
    }
    closeHandler(e = null) {
        //关闭事件
    }
    errorHandler(e = null) {
        //连接出错
    }
    Send(msg) {
        this.socket.send(msg);
    }
    send(data) {
        this.socket.send(data);
        //test
        this.byte.writeByte(1); //写入一个字节
        this.byte.writeInt16(20); //写入一个int16的数据
        this.byte.writeFloat32(20.5); //写入一个32位的浮点数据
        this.byte.writeUTFString("hello"); // 写入一个字符串；
        var by = new Laya.Byte(); //这里声明一个临时Byte类型
        by.endian = Laya.Byte.LITTLE_ENDIAN; //设置endian；
        by.writeInt32(5000); //写入一个int32数据
        by.writeUint16(16); //写入一个uint16 数据
        this.byte.writeArrayBuffer(by.buffer); //把临时字节数据的数据写入byte中，这里注意写入的是by.buffer;
        this.socket.send(this.byte.buffer); //这里是把字节数组的数据通过socket发送给服务器。
        this.byte.clear(); //清除掉数据;方便下次读写；
    }
}
new TestWebSocket();
//# sourceMappingURL=TestWebSocket.js.map