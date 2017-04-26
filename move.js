/**
 * 移动节点
 */
Element.prototype.move = function(x,y)
{
	
	this.style.msTransform     = "translate("+x+'px,'+y+"px)";
	this.style.transform       = "translate("+x+'px,'+y+"px)";
	this.style.webkitTransform = "translate("+x+'px,'+y+"px)";
}