function sli(sli){
for(sl = 0 ; sl < sli.feed.entry.length ; sl++){
var sli_title = sli.feed.entry[sl].title.$t;
var sli_lnk = sli.feed.entry[sl].link[4].href;
var sli_img = sli.feed.entry[sl].media$thumbnail.url;
var sli_img2 = sli_img.replace('s72','s200');
var sli_date = sli.feed.entry[sl].published.$t;
var sli_date2 = sli_date.slice(0 , 10);
var sli_auth = sli.feed.entry[sl].author[0].name.$t;
var sli_pst = "<a class='sli_body' href='" + sli_lnk + "'>" + "<img src='" + sli_img2 + "'/>" + "<div class='sli_info'>" + "<p class='sli_title'>" + sli_title + "</p>" + "<p class='sli_auth'>" + sli_auth + "</p>" + "<p class='sli_date'>" + sli_date2 + "</p></div></a>";
document.write(sli_pst);
};
};