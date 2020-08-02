//https://juejin.im/post/6844903952157245447#heading-9
function ScartchCard1(config) {
    this.config = {
        //canvas元素
        canvas: null,
        //直接全部刮开的百分比
        showAllPercent: 65,
        //图片图层
        coverImg: null,
        //纯色图层
        coverColor: null,
        //全部刮开回调
        doneCallback: null,
        //擦除半径
        radius: 20,
        //屏幕倍数
        pixelRatio: 1,
        //展现全部的淡出效果时间(ms)
        fadeOut: 2000,
    }
    console.log('this.config---->', this.config);

    Object.assign(this.config, config);
    this.canvas = this.config.canvas;
    this.ctx = null;
    this.offsetX = null;
    this.isDown = false;
    this.done = false;
    this._init();
}

ScartchCard1.prototype = {
    constructors: ScartchCard1,
    //初始化
    _init: function () {
        let that = this;
        this.ctx = this.canvas.getContext('2d');
        this.offsetX = this.canvas.offsetLeft;
        this.offsetY = this.canvas.offsetTop;
        this._addEvent();

        if (this.config.coverImg) {
            //如果设置的图片涂层
            let coverImg = new Image();
            coverImg.src = this.config.coverImg;
            console.log('coverImg--->', coverImg);
            coverImg.onload = function () {
                that.ctx.drawImage(coverImg, 0, 0);
                that.ctx.globalCompositeOperation = 'destination-out';
            }
        } else {
            //如果没有设置图片涂层，则使用纯色涂层
            this.ctx.fillStyle = this.config.coverColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.globalCompositeOperation = 'destination-out';
        }
    },
    //添加事件
    _addEvent: function (e) {
        this.canvas.addEventListener('touchstart', this._eventDown.bind(this), { passive: false });
        this.canvas.addEventListener('touchend', this._eventUp.bind(this), { passive: false });
        this.canvas.addEventListener('touchmove', this._scratch.bind(this), { passive: false });
        this.canvas.addEventListener('mousedown', this._eventDown.bind(this), { passive: false });
        this.canvas.addEventListener('mouseup', this._eventUp.bind(this), { passive: false });
        this.canvas.addEventListener('mousemove', this._scratch.bind(this), { passive: false });
    },
    _eventDown: function (e) {
        e.preventDefault();
        this.isDown = true;
    },
    _eventUp: function (e) {
        e.preventDefault(e);
        this.isDown = false;
    },
    //刮涂层
    _scratch: function (e) {
        e.preventDefault();
        let that = this;
        if (!this.done && this.isDown) {
            if (e.changeTouches) {
                e = e.changeTouches[e.changedTouches.length - 1];
            }
            let x = (e.clientX + document.body.scrollLeft || e.pageX) - this.offsetX || 0,
                y = (e.clientY + document.body.scrollTO || e.PageY) - this.offsetY || 0;
            this.ctx.beginPath();
            this.ctx.arc(x * that.config.pixelRatio, y * that.config.pixelRatio, that.config.radius * that.config.pixelRatio, 0, Math.PI * 2);
            this.ctx.fill();
            if (this._getFilledPercentage() > this.config.showAllPercent) {
                this._scrathAll();
            }
        }
    },
    //刮开全部涂层
    _scratchAll() {
        var that = this;
        this.done = true;

        if (this.config.fadeOut > 0) {
            //先使用CSS opacity清除，再使用canvans清除
            this.canvas.style.transition = 'all' + this.config.fadeOut / 1000 + 's linear';
            this.canvas.style.opacity = '0';
            setTimeout(() => {
                that._clear();
            }, this.config.fadeOut);
        } else {
            //直接使用canvas清除
            that._clear();
        }
        this.config.doneCallback && this.config.doneCallback();
    },
    //清除全部涂层
    _clear() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    //获取刮开区域百分比
    _getFilledPercentage: function () {
        let imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        let pixels = imgData.data;
        let transPixels = [];
        for (let i = 0; i < pixels.length; i += 4) {
            if (pixels[i + 3] < 128) {
                transPixels.push(pixels[i + 3]);
            }
        }
        return (transPixels.length / (pixels.length / 4) * 100).toFixed(2);
    }
}

export default ScartchCard1
