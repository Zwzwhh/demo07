//查找触发事件的元素
//绑定事件
	//查找要修改的元素
	//修改元素

//查找两个文本框:
var txtName=
			document.getElementsByName("username")[0],
		txtPwd=document.getElementsByName("pwd")[0];
txtName.onfocus=txtPwd.onfocus=function(){
	this.className="txt_focus";
	var div=this.parentNode
							.nextElementSibling.children[0];
	div.className="";
}
//获得焦点也等同于失去焦点
txtName.onblur=function(){
	vali(this,/^\w{1,10}$/)
}
//封装相同重复代码,函数里面不能用this,this只能用在事件处理上,向外要参数,文本框和正则
function vali(txt,reg){
	txt.className="";
	var div=txt.parentNode
							.nextElementSibling.children[0];
	if(reg.test(txt.value))
		div.className="vali_success";
	else
		div.className="vali_fail";
}
//失去焦点,调用封装好的函数vali(),this在事件处理的函数中可以用,指这个事件中要失去焦点的文本框,再传入要输入的正则,正则必须带^${},不用再声明变量接收正则,直接在参数里面写正则,减少代码量
txtPwd.onblur=function(){
	vali(this,/^\d{6}$/)
}