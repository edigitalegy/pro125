import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_two = [
  { type: "button", id: "2vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "2intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "2act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid1", text: "التطورات السياسية في بريطانيا ", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid2", text: "الجماعات المطالبة بالإصلاح ", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid3", text: "القوانين الستة", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid4", text: "مطالبات الاصلاح", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid5", text: "الاصلاح الاقتصادي", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid7", text: "  لائحة قانون اصلاح", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid8", text: "  الحركات الجارتية", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid9", text: "  الميثاق الشعبي", icon: "bi bi-camera-video" },
  { type: "button", id: "2act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act16", text: "التقويم", icon: "bi bi-clipboard-check" },
];
/**************************************************************************/
function btn_two(button)
{
let num =lesson_two.findIndex(b => b.id === button.id);
btn_txt=lesson_two[num].text;

switch (button.id) {
  case "2vid0": mainVideo.src = "./media/vid2/vid0.mp4"; mainVideo.controls = true; break;
  case "2vid1": mainVideo.src = "./media/vid2/vid1.mp4"; mainVideo.controls = true; break;
  case "2vid2": mainVideo.src = "./media/vid2/vid2.mp4"; mainVideo.controls = true; break;
  case "2vid3": mainVideo.src = "./media/vid2/vid3.mp4"; mainVideo.controls = true; break;
  case "2vid4": mainVideo.src = "./media/vid2/vid4.mp4"; mainVideo.controls = true; break;
  case "2vid5": mainVideo.src = "./media/vid2/vid5.mp4"; mainVideo.controls = true; break;
  case "2vid6": mainVideo.src = "./media/vid2/vid6.mp4"; mainVideo.controls = true; break;
  case "2vid7": mainVideo.src = "./media/vid2/vid7.mp4"; mainVideo.controls = true; break;
  case "2vid8": mainVideo.src = "./media/vid2/vid8.mp4"; mainVideo.controls = true; break;
  case "2vid9": mainVideo.src = "./media/vid2/vid9.mp4"; mainVideo.controls = true; break;


  case "2intro": loadForm('https://forms.gle/3BRUAErMV3KZf5K38'); break;
  case "2act1": window.open('https://forms.gle/ewHrvYk9zvrgLyXh7', '_self'); break;
  case "2act2": window.open('https://forms.gle/ZJRuNJdFQrXJL5a39', '_self'); break;
  case "2act3": window.open('https://forms.gle/vxZPFdTx4SkKqZANA', '_self'); break;
  case "2act16": loadForm('https://forms.gle/rh6pc71KGaGyNXQm8'); break;
}

if (mainVideo.src) {
  videorun(); // Ensure videorun() exists
}

}

/*************************************events ele******************************************/
function loadForm(url,id) {
  // First, clean up any existing form iframe
  const oldIframe = document.getElementById('formFrame');
  if (oldIframe) oldIframe.remove();
  // Create a new iframe
  const newIframe = document.createElement('iframe');
  newIframe.id = 'formFrame';
  newIframe.src = url;
  newIframe.width = '100%';
  newIframe.height = '100%';
  newIframe.style.border = 'none';  // Optional
  // Append new iframe to `eleframe`
  eleframe.appendChild(newIframe);
  // Show the container
  eleframe.classList.remove('hidden');
  eleframe.classList.add('show');
}


function videorun() {
  contentcontainer.classList.remove('close');
  contentcontainer.classList.toggle('show');
  topicname.innerHTML=btn_txt;
}
/*************************************events ele******************************************/

export {lesson_two,btn_two,L2UT1};

