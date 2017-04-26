/**
 * 节点动画
 * @param  properties :Object   属性
 * @param  duration	  :int      时间
 * @param  easing     :string   类型 {linear:'匀速',ease:'慢-快-慢',ease-in:'慢-快',ease-out:'快-慢'}
 * @param  complete   :function 回调
 */
Element.prototype.animate = function(properties,duration,easing,complete) 
{
	if(!duration) duration = '1s';
	
	if(!easing  ) easing   = 'ease';
	
	for(var i in properties)
	{
		this.style[i] = properties[i]
	};
	
	this.style.transition = 'all '+duration+'s '+easing;
	
	if(complete) setTimeout(complete,duration*1000);
}