//모듈을 추출합니다.
var marked = require('marked');
var fs = require('fs');

//markdown 파일을 읽어들입니다.
var wikiMD = fs.readFileSync('wikiMD.md', 'utf-8');
//변경할 html파일을 읽어옵니다.
var html = fs.readFileSync('content.html', 'utf-8');
//replace를 위해 모든 newlines들을 제거합니다.
html = html.replace(/(?:\r\n|\r|\n)/g, '');
//html파일을 변경합니다.
html = html.replace(/<div id="md_content">(.*)<\/div>(.*)<div id="bumper"><\/div>/gi, '<div id="md_content">'+marked(wikiMD)+'<\/div><div id="bumper"><\/div>');
console.log(html);
//변환된 양식을 파일로 저장합니다.
fs.writeFileSync('./content.html', html);
