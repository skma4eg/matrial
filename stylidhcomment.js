// تعديل صورة التعليقات واسم التعليق بصيغة غر معرف
var x1 = document.getElementsByTagName('IMG');
for(i1 = 0 ; i1 < x1.length ; i1++){
var y1 = document.getElementsByTagName('IMG')[i1];
var z1 = y1.getAttribute('src');
var m1 = z1.search('s35-c');
if(m1 == -1){
if(z1 == '//img1.blogblog.com/img/blank.gif'){document.getElementsByTagName('IMG')[i1].removeAttribute('src');document.getElementsByTagName('IMG')[i1].setAttribute('src', 'http://3.bp.blogspot.com/-bDspTOg3mvE/V9VrjBWfUmI/AAAAAAAAD3o/dmMEKhuR-hgEkh4oFQqpjRIbC7CK0fcQACK4B/s60/Main-Logo.png');
var x2 = document.getElementsByClassName('user');
for(i2 = 0 ; i2 < x2.length ; i2++){
var y2 = document.getElementsByClassName('user')[i2].innerHTML;
  if(y2 == 'غير معرف'){
document.getElementsByClassName('user')[i2].innerHTML = 'زائر'
  };                                           
};
};
}else{
document.getElementsByTagName('IMG')[i1].removeAttribute('src');
var d1 =  z1.replace("s35-c","s60-c");
document.getElementsByTagName('IMG')[i1].setAttribute('src', d1);
};
};
// تعريب اضافة الاشتراك فى القائمة البريدية
var x3 = document.getElementsByClassName('follow-by-email-address')[0].getAttribute('placeholder');
document.getElementsByClassName('follow-by-email-address')[0].removeAttribute('placeholder');
document.getElementsByClassName('follow-by-email-address')[0].setAttribute('placeholder','إدخل بريدك هنا');
var x4 = document.getElementsByClassName('follow-by-email-inner')[0];
x4.getElementsByTagName('INPUT')[1].removeAttribute('value');
x4.getElementsByTagName('INPUT')[1].setAttribute('value','اشترك');
// تحديد الاقتباس
var pres = document.getElementsByTagName("blockquote");
for (var i2 = 0; i2 < pres.length; i2++) {
pres[i2].addEventListener("click", function () {
var selection = getSelection();
var range = document.createRange();
range.selectNodeContents(this);
selection.removeAllRanges();
selection.addRange(range);
 }, false);
};
//تعديل عرض الفيديو
var x5 = document.getElementsByClassName('post-outer')[0];
var y3 = x5.getElementsByClassName('YOUTUBE-iframe-video');
  for(i3 = 0 ; i3 < y3.length ; i3++){
var z2 =  document.getElementsByClassName('YOUTUBE-iframe-video')[i3];
z2.removeAttribute(z2.getAttribute('width'));
z2.setAttribute('width','100%');
z2.removeAttribute(z2.getAttribute('height'));
z2.setAttribute('height','80%');
  };
//الابتسامات
var comnt_cont = document.getElementsByClassName('comment-content');
  for(i5 = 0 ; i5 < comnt_cont.length ; i5++){
var comnt_cont2 = document.getElementsByClassName('comment-content')[i5].innerHTML;
var a1_filter = comnt_cont2.replace(/smile1/g , "<img src='https://3.bp.blogspot.com/-cDPcAUdSMnU/V9wx5GO-wVI/AAAAAAAAD5Q/m-hkg8_OlroeQ1TGlI2e0vtDvJLzzscVQCLcB/s1600/1.png' title='smile1'/>");
var a2_filter = a1_filter.replace(/smile2/g , "<img src='https://3.bp.blogspot.com/-hlRGLUySQp4/V9wx5QsO8GI/AAAAAAAAD5c/P0v3wxe5sacc6IUiTcZ84Jptti_iny-wACLcB/s1600/2.png' title='smile2'/>");
var a3_filter = a2_filter.replace(/smile3/g , "<img src='https://1.bp.blogspot.com/-pkpegcqXDAU/V9wx5tULQDI/AAAAAAAAD5k/PwBDNVrVo8crBT8KajndNWZF4fDn8P4CwCLcB/s1600/3.png' title='smile3'/>");
var a4_filter = a3_filter.replace(/smile4/g , "<img src='https://4.bp.blogspot.com/-3E8J91LzGDU/V9wx53-VYDI/AAAAAAAAD5o/3Mr8aS9T40Yoc0pHes8k9oBOm2XEeFxlwCLcB/s1600/4.png' title='smile4'/>");
var a5_filter = a4_filter.replace(/smile5/g , "<img src='https://3.bp.blogspot.com/-6-l0BL_bCCA/V9wx5A8yVAI/AAAAAAAAD5U/YoSPZCTpl6Ukji8svLbaY7J3e2fFNJFpQCLcB/s1600/13.png' title='smile5'/>");
var a6_filter = a5_filter.replace(/smile6/g , "<img src='https://1.bp.blogspot.com/-zG24Mt8vJMo/V9xL2P4V1CI/AAAAAAAAD54/9T912q-3k6MctocgapAyZqLIStHAOpVKACLcB/s1600/25.png' title='smile6'/>");
var a7_filter = a6_filter.replace(/smile7/g , "<img src='https://1.bp.blogspot.com/-iQrRlwyUPTw/V9wx5VXpHvI/AAAAAAAAD5g/a_l2KtSkEFM127N0FF5vZN0uUTsrM_xwgCLcB/s1600/21.png' title='smile7'/>");
var a8_filter = a7_filter.replace(/smile8/g , "<img src='https://4.bp.blogspot.com/-09EMED85BTw/V9wx6R4rprI/AAAAAAAAD5s/d78w1frK888IMq6WJWkoMBZntijyQsPSACLcB/s1600/22.png' title='smile8'/>");
document.getElementsByClassName('comment-content')[i5].innerHTML = a8_filter;
};

var _0xa964=["\x74\x65\x6D\x70\x5F\x63\x6F\x70\x79\x72\x69\x67\x68\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x65\x78\x63\x6C\x75\x73\x69\x76\x65\x5F\x73\x6C\x69\x64\x65\x72","\x6E\x6F\x6E\x65","\x73\x68\x6F\x77\x5F\x68\x69\x64\x65\x5F\x61\x75\x74\x68\x5F\x70\x73\x74\x73","\x6C\x61\x74\x65\x73\x74\x5F\x63\x6F\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x69\x6E\x6E\x65\x72\x5F\x74\x69\x6D\x69\x6E\x67","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x53\x74\x79\x6C\x69\x73\x68\x20\x54\x65\x6D\x70\x2E","\x70\x65\x74\x65\x72\x2E\x68\x61\x6E\x79\x33","\x62\x75\x79","\x47\x61\x6C\x61\x78\x79\x20\x53\x65\x72\x69\x65\x73","\x73\x65\x61\x72\x63\x68","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x68\x69\x64\x64\x65\x6E","\x6F\x70\x61\x63\x69\x74\x79","\x30"];var slider=document[_0xa964[1]](_0xa964[0])[0];if(slider== undefined){document[_0xa964[1]](_0xa964[4])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[1]](_0xa964[6])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[8]](_0xa964[7])[_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[1]](_0xa964[9])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5]}else {var slider2=slider[_0xa964[10]];var slider3=slider2[_0xa964[15]](_0xa964[11]|| _0xa964[12]|| _0xa964[13]|| _0xa964[14]);if(slider3== -1|| slider[_0xa964[3]][_0xa964[2]]== _0xa964[5]|| slider[_0xa964[3]][_0xa964[16]]== _0xa964[17]|| slider[_0xa964[3]][_0xa964[18]]== _0xa964[19]){document[_0xa964[1]](_0xa964[4])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[1]](_0xa964[6])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[8]](_0xa964[7])[_0xa964[3]][_0xa964[2]]= _0xa964[5];document[_0xa964[1]](_0xa964[9])[0][_0xa964[3]][_0xa964[2]]= _0xa964[5]}}
var _0xb05b=["\x63\x6C\x61\x73\x73","\x74\x69\x74\x6C\x65\x31","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x48\x32","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x77\x69\x64\x67\x65\x74\x20\x46\x6F\x6C\x6C\x6F\x77\x65\x72\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x73\x69\x64\x65\x62\x61\x72\x20\x73\x65\x63\x74\x69\x6F\x6E","\x74\x69\x74\x6C\x65\x32","\x77\x69\x64\x67\x65\x74\x20\x50\x6F\x70\x75\x6C\x61\x72\x50\x6F\x73\x74\x73","\x74\x69\x74\x6C\x65\x33","\x77\x69\x64\x67\x65\x74\x20\x4C\x61\x62\x65\x6C","\x74\x69\x74\x6C\x65\x34","\x77\x69\x64\x67\x65\x74\x20\x46\x65\x61\x74\x75\x72\x65\x64\x50\x6F\x73\x74","\x74\x69\x74\x6C\x65\x35","\x77\x69\x64\x67\x65\x74\x20\x43\x6F\x6E\x74\x61\x63\x74\x46\x6F\x72\x6D","\x74\x69\x74\x6C\x65\x36","\x77\x69\x64\x67\x65\x74\x20\x46\x6F\x6C\x6C\x6F\x77\x42\x79\x45\x6D\x61\x69\x6C"];document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[5])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[1]);document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[9])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[8]);document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[11])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[10]);document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[13])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[12]);document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[15])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[14]);document[_0xb05b[6]](_0xb05b[7])[0][_0xb05b[6]](_0xb05b[17])[0][_0xb05b[4]](_0xb05b[3])[0][_0xb05b[2]](_0xb05b[0],_0xb05b[16])
