"use strict";(self.webpackChunkwhatsapp=self.webpackChunkwhatsapp||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return u}});var r=n(1811),a=n(9507),i=n(7909),u=function(t,e,n,u,c){var o=t.ownerDocument.defaultView,s=(0,a.i)(t),f=function(t){return s?-t.deltaX:t.deltaX};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return s=(0,a.i)(t),function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(n)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;u(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,a=e/n,i=function(t){return s?-t.velocityX:t.velocityX}(t),u=i>=0&&(i>.2||e>n/2),h=(u?1-a:a)*n,l=0;if(h>5){var d=h/Math.abs(i);l=Math.min(d,540)}c(u,a<=0?.01:(0,r.l)(0,a,.9999),l)}})}}}]);
//# sourceMappingURL=22.86899981.chunk.js.map