jQuery(document).ready(function($) { 
	/**
	* Ripple effect mechanism
	*/
	$('body').on( 'click', '.ripple-effect', function(e){
		// Ignore default behavior
		e.preventDefault();

		// Cache the selector
		var the_dom = $(this);

		// Get the limit for ripple effect
		var limit = the_dom.attr( 'data-ripple-limit' );

		// Get custom color for ripple effect
		var color = the_dom.attr( 'data-ripple-color' );
		if( typeof color == 'undefined' ){
			var color = 'rgba(255, 255, 255, 0.3)';
		}

		// Get ripple radius
		var radius = the_dom.attr( 'data-ripple-wrap-radius' );
		if( typeof radius == 'undefined' ){
			var radius = 0;
		}

		// Get the clicked element and the click positions
		if( typeof limit == 'undefined' ){	
			var the_dom_limit = the_dom;
		} else {
			var the_dom_limit = the_dom.closest( limit );
		}

		var the_dom_offset = the_dom_limit.offset();		
		var click_x = e.pageX;
		var click_y = e.pageY;

		// Get the width and the height of clicked element
		var the_dom_width = the_dom_limit.outerWidth();
		var the_dom_height = the_dom_limit.outerHeight();

		// Draw the ripple effect wrap
		var ripple_effect_wrap = $('<span class="ripple-effect-wrap"></span>');
		ripple_effect_wrap.css({
			'width' 			: the_dom_width,
			'height'			: the_dom_height,
			'position' 			: 'absolute',
			'top'			 	: the_dom_offset.top,
			'left'	 			: the_dom_offset.left,
			'z-index' 			: 100,
			'overflow' 			: 'hidden',
			'background-clip'	: 'padding-box',
			'-webkit-border-radius' : radius,
			'border-radius'		: radius
		});

		// Adding custom class, it is sometimes needed for customization
		var ripple_effect_wrap_class = the_dom.attr( 'data-ripple-wrap-class' );

		if( typeof ripple_effect_wrap_class != 'undefined' ){
			ripple_effect_wrap.addClass( ripple_effect_wrap_class );
		}

		// Append the ripple effect wrap
		ripple_effect_wrap.appendTo('body');
		
		// Determine the position of the click relative to the clicked element
		var click_x_ripple = click_x - the_dom_offset.left;
		var click_y_ripple = click_y - the_dom_offset.top;
		var circular_width = 1000;
		
		// Draw the ripple effect
		var ripple = $('<span class="ripple"></span>');
		ripple.css({
			'width' 						: circular_width,
			'height'						: circular_width,
			'background'					: color,
			'position'						: 'absolute',
			'top'							: click_y_ripple - ( circular_width / 2 ),
			'left'							: click_x_ripple - ( circular_width / 2 ),
			'content'						: '',
		    'background-clip' 				: 'padding-box',
		    '-webkit-border-radius'     	: '50%',
		    'border-radius'             	: '50%',
		    '-webkit-animation-name'		: 'ripple-animation',
		    'animation-name'              	: 'ripple-animation',
		    '-webkit-animation-duration'  	: '2s',
		    'animation-duration'          	: '2s',
		    '-webkit-animation-fill-mode' 	: 'both',
		    'animation-fill-mode'         	: 'both'  			
		});
		$('.ripple-effect-wrap:last').append( ripple );

		// Remove rippling component after half second
		setTimeout( function(){
			ripple_effect_wrap.fadeOut(function(){
				$(this).remove();
			});
		}, 500 );	

		// Get the href
		var href = the_dom.attr('href');

		// Safari appears to ignore all the effect if the clicked link is not prevented using preventDefault()
		// To overcome this, preventDefault any clicked link
		// If this isn't hash, redirect to the given link
		if( typeof href != 'undefined' && href.substring(0, 1) != '#' ){
			setTimeout( function(){
				window.location = href;
			}, 200 );
		}

		// Ugly manual hack to fix input issue
		if( the_dom.is('input') || the_dom.is('button') ){
			setTimeout( function(){
				the_dom.removeClass('ripple-effect');
				the_dom.trigger('click');
				the_dom.addClass('ripple-effect');
			}, 200 );
		}

	});	
});
(function(e){function u(s,o){var u,a,f;if((u=e(s))[t]==0)return n;a=u[i]()[r];switch(o.anchor){case"middle":f=a-(e(window).height()-u.outerHeight())/2;break;default:case r:f=Math.max(a,0)}return typeof o[i]=="function"?f-=o[i]():f-=o[i],f}var t="length",n=null,r="top",i="offset",s="click.scrolly",o=e(window);e.fn.scrolly=function(i){var o,a,f,l,c=e(this);if(this[t]==0)return c;if(this[t]>1){for(o=0;o<this[t];o++)e(this[o]).scrolly(i);return c}l=n,f=c.attr("href");if(f.charAt(0)!="#"||f[t]<2)return c;a=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},i),a.pollOnce&&(l=u(f,a)),c.off(s).on(s,function(e){var t=l!==n?l:u(f,a);t!==n&&(e.preventDefault(),a.parent.stop().animate({scrollTop:t},a.speed,a.easing))})}})(jQuery);
//<![CDATA[
imgr=new Array();imgr[0]="http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png";showRandomImg=true;aBold=true;summaryPost=400;summaryTitle=20;numposts1=12;numposts2=4;function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}
  function showrecentposts1(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();if(numposts2<=json.feed.entry.length){maxpost=numposts2}else{maxpost=json.feed.entry.length}for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;pcm='<a href="'+posturl+'">'+pcm+' comments</a>';var trtd='<div class="col_maskolis"><h5 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h5><a href="'+posturl+'"><img class="related_img" src="'+img[i]+'"/></a><div class="clear"></div></div>';document.write(trtd);j++}}var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png'}if(relatedTitles[relatedTitlesNum].length>80)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,80)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h5>'+relatedpoststitle+'</h5>');document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults)
  { document.write("<center>");
    document.write('<a class="ripple-effect" style="text-decoration:none;margin:0 4px 10px 0;float:left;');
    if(i!=0)document.write('"');
    else document.write('"');
    document.write(' href="'+relatedUrls[r]+'"><img class="related_img" src="'+thumburl[r]+'"/><br/><div id="related-title" class>'+relatedTitles[r]+'</div></a>');
    if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');
    relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length);
    document.write("<\/center>");
    }
//]]>