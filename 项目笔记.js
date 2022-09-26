项目笔记
在限时秒杀课中（TimeClass)
app.vue传值needArr过来的
dataJSON: Array(6)
0: (5) [{…}, {…}, {…}, {…}, {…}]
1: (5) [{…}, {…}, {…}, {…}, {…}]
2: (5) [{…}, {…}, {…}, {…}, {…}]
3: (5) [{…}, {…}, {…}, {…}, {…}]
4: (5) [{…}, {…}, {…}, {…}, {…}]
5: (5) [{…}, {…}, {…}, {…}, {…}]

直接使用dataJSON[0]带下标 报错了 这可能是数据传输的生命周期和渲染的时间不匹配
此时要渲染是没有完全传过来，所以导致js错误，渲染错误

解决办法：
watch: {
	needArr(newValue) {
		this.cardmsg = newValue.dataJSON[this.acflag]
	},
	acflag(newValue){
		this.cardmsg = this.needArr.dataJSON[newValue]
	}
}

使用watch 监听needArr 赋值给data里面的变量

src用``插入数据
:src="`./image/rigtrt${item}.jpg`" 


移动端 适应用rem，并且
meta要改成这样 初始宽度比例要删掉 initial-scale=1.0
<meta name="viewport" content="width=device-width,user-scalable=yes">