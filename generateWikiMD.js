//모듈을 추출합니다.
var marked = require('marked');
var fs = require('fs');
//markdown 파일을 읽어들입니다.
var wikiMD = fs.readFileSync('wikiMD.md', 'utf-8');
//markdown을 html로 변환합니다.
var htmlwikiMD = marked(wikiMD);
//변환된 양식을 파일로 저장합니다.
fs.writeFileSync('./wikiMD.html', htmlwikiMD);
