!function(l){var f={speed:300,offset:0,currentClass:"active",updateHash:!1,classToParent:!1},s={init:function(t,s){f=l.extend(f,t),this.$navbar=l(s),this.$items=this.$navbar.find("a:not(.externals)"),this.$window=l(window),this.hashNow=void 0,this.$items.on("click",this.clicked),this.$window.on("scroll",l.proxy(this.scrollPage,this)),this.$window.on("resize",l.proxy(this.scrollPage,this))},clicked:function(t){t.preventDefault();var s=l(this).attr("href"),e=l(s).offset().top-f.offset;l("html, body").animate({scrollTop:e},f.speed)},scrollPage:function(){var t=this,e=[],s=void 0;t.$items.each(function(){var t=l(this).attr("href"),s=l(t);s&&e.push(s)});for(var i=0;i<e.length;i++){var a=e[i],r=a.height(),n=a.offset().top,o=t.$window.scrollTop(),h=t.$window.height();if(o<=n&&r+n<o+h){s=e[i].attr("id");break}}if(s){if(f.updateHash){var c="#"+s;t.hashNow!=c&&(t.hashNow=c,history.pushState({},"",c))}f.classToParent?(t.$items.parent().removeClass(f.currentClass),l('a[href="#'+s+'"]').parent().addClass(f.currentClass)):(t.$items.removeClass(f.currentClass),l('a[href="#'+s+'"]').addClass(f.currentClass))}}};l.fn.navpoints=function(t){this.each(function(){Object.create(s).init(t,this)})}}(jQuery);
//# sourceMappingURL=jquery.navpoints.min.js.map