/*! SWE 3.1.8 2019105T1331 */
!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){$(function(){"use strict";$("form").filter('[action*="//find.search.qld.gov.au/"]').not(".qg-funnelback-search").each(function(){function e(){c.empty()}function t(e){o[0].value=e,setTimeout(function(){o[0].setSelectionRange(l.length,o[0].value.length)},0)}function n(e){var n=c.find("a"),a=n.filter(".focus");a.length>0?(e=(n.index(a)+e)%n.length,a.removeClass("focus")):e=e>-1?0:-1,n=n.eq(e),n.addClass("focus"),t(n.text())}var a=this,o=$(a.elements.query).filter('[name="query"]'),r=o.val(),l="";o.attr("role","combobox").attr("autocomplete","off").attr("aria-autocomplete","both");var c=$('<ul role="listbox" class="listbox" aria-busy="true"/>').generateId("suggestbox");o.after(c),o.attr("aria-owns",c.attr("id")),c.on("click","a",function(t){t.preventDefault(),o.val($(this).text()).get(0).focus(),e()});var i={alt:18,backspace:8,delete:46,down:40,enter:13,escape:27,left:37,right:39,tab:9,up:38};$(document).on("click",function(t){o.is(t.target)?t.stopImmediatePropagation():e()}),o.on("keydown",function(t){switch(t.which){case i.up:case i.down:n(t.which===i.down?1:-1);break;case i.tab:e()}}),o.on("keyup",function(t){switch(t.which){case i.escape:case i.enter:e()}}),o.on("input",function(){if(l=this.value,l.length<3)return void e();$.ajax({cache:!0,dataType:"jsonp",url:"https://find.search.qld.gov.au/s/suggest.json?",data:{collection:$(a.elements.collection).filter('[name="collection"]').val()||"qld-gov",profile:$(a.elements.profile).filter('[name="profile"]').val()||"qld_preview",show:7,partial_query:l}}).done(function(t){if(t.length<1)return void e();var n=new RegExp(l.replace(/([.+*?\[^\]$(){}=!<>|:-\\,])/g,"\\$1"),"g"),a=l.replace(/</g,"&lt;");c.html($.map(t,function(e){var t=e.replace(/</g,"&lt;").replace(n,"<mark>"+a+"</mark>");return'<li><a href="https://find.search.qld.gov.au/s/search.html?collection=qld-gov&profile=qld&query='+encodeURIComponent(e)+'">'+t+"</a></li>"}).join("\n")),r=o.val(),c.attr("aria-busy","false")})})})})}]);