var Answer = "";
var SpeechResult = "";
var KeyPressCode = 0;
var s_width = screen.width;
var s_height = screen.height;
var player$latitude = 0;
var player$longitude = 0;
console.log(`
HRSCRIPT VERSION 2.13

    HRSCRIPT 2

`);

var SP = window.webkitSpeechRecognition;
var recognition = new window.webkitSpeechRecognition; var content = "";
recognition.onresult = function(e)
{

content = e.results[0][0].transcript;
SpeechResult = content;
console.log(SpeechResult);
}
function $DocPrint(printvalue) {
document.write(printvalue);
}
function $ImgPrint(id,image) {
document.write("<img src = '" + image + "' id = '" + id + "'>");
}
function Const$DocPrint(printvalue,times) {
    for (i = 1; i < times + 1; i++) {
        document.write(printvalue);
    }
}
function $WindowModal(text) {
    window.alert(text);
}
function $Button(id,text,pushwidget) {
document.write("<button onclick = '" + pushwidget + "()' id = '" + id + "'>" + text + "</button>");
}
function None() {
    
}
function $SpaceDown() {
    document.write("<br>");
}
function $OpenCenter() {
    document.write("<center>");
}
function $CloseCenter() {
    document.write("</center>");
}
function $WindowInputModal(desc,placeholder) {
Answer = prompt(desc,placeholder);
}
function $SpeechRecog() {
    recognition.start();
}
function $SpeechRecogButton() {
    document.write("<button onclick = '" + "$SpeechRecog" + "()' id = '" + "SRbtn" + "'>" + "&#127908;" + "</button>");
}
function $TTS(text) 
{
  const sound = new SpeechSynthesisUtterance(text);
  sound.rate = 1;
  sound.volume = 1;
  speechSynthesis.speak(sound);
}
function $Style(id,csscode) {
document.getElementById(id).style = csscode;
}
function $InnerHTML(id,text) {
document.getElementById(id).innerHTML = text;
}
function $Label(id,text) {
document.write("<p id = '" + id + "'>" + text + "</p>");
}
document.onkeydown = function(event) {
    KeyPressCode = event.keyCode;
}

function $DetectKeyCode(event) {
    KeyPressCode = event.keyCode;
}
function $SetLocalStorage(key,value) {
localStorage.setItem(key,value);
}
function $ClickElement(id) {
document.getElementById(id).click();
}
function $LocatePlayer() {
    try {
        navigator.geolocation.getCurrentPosition(GetLocate);
      } catch {

      }
}
function GetLocate(position) {
    player$latitude = position.coords.latitude;
    player$longitude = position.coords.longitude;
  }