function playSound1(){document.getElementById("badgersound-1").play()}function playSound2(){document.getElementById("badgersound-2").play()}function playSound3(){document.getElementById("badgersound-3").play()}(function(e){e.fn.countTo=function(t){t=e.extend({},e.fn.countTo.defaults,t||{});var n=Math.ceil(t.speed/t.refreshInterval),r=(t.to-t.from)/n;return e(this).each(function(){function a(){o+=r;s++;e(i).html(o.toFixed(t.decimals));if(typeof t.onUpdate=="function"){t.onUpdate.call(i,o)}if(s>=n){clearInterval(u);o=t.to;if(typeof t.onComplete=="function"){t.onComplete.call(i,o)}}}var i=this,s=0,o=t.from,u=setInterval(a,t.refreshInterval)})};e.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}})(jQuery);jQuery(function(e){e("#maulings-counter").countTo({from:0,to:2500,speed:92e4,refreshInterval:3,onComplete:function(e){console.debug(this)}})});jQuery(function(e){e("#honey-counter").countTo({from:0,to:2500,speed:292e4,refreshInterval:2,onUpdate:null,onComplete:function(e){console.debug(this)}})});jQuery(function(e){e("#snakes-counter").countTo({from:0,to:2500,speed:9e5,refreshInterval:1,onUpdate:null,onComplete:function(e){console.debug(this)}})});jQuery(function(e){e("#babies-counter").countTo({from:0,to:2500,speed:212e4,refreshInterval:1,onUpdate:null,onComplete:function(e){console.debug(this)}})})