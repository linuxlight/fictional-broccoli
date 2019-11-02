//모듈을 추출합니다.
var marked = require('marked');
var fs = require('fs');
//markdown 파일을 읽어들입니다.
var wikiMD = fs.readFileSync('wikiMD.md', 'utf-8');
//변경할 html파일을 읽어옵니다.
var html = fs.readFileSync('content.html', 'utf-8');
//html파일을 변경합니다.
html = html.replace(/<div id="content">(.*)<\/div>/, '<div id="content">'+marked(wikiMD)+'<\/div>');
//변환된 양식을 파일로 저장합니다.
fs.writeFileSync('./content.html', html);
