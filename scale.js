/**
 * 缩放节点
 */
Element.prototype.scale = function(x,y)
{
	this.style.msTransform     = "scale("+x+','+y+")";
	this.style.transform       = "scale("+x+','+y+")";
	this.style.webkitTransform = "scale("+x+','+y+")";
}