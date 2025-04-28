import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_three = [
  { type: "button", id: "3vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "3intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "3act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "3act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "3vid1", text: "الثورات القومية في أوروبا 1830م ", icon: "bi bi-camera-video" },
  { type: "button", id: "3vid2", text: "أسباب ثورات (1830- 1848م) في أوروبا ", icon: "bi bi-camera-video" },
  { type: "button", id: "3vid3", text: "ثورات عام 1830م", icon: "bi bi-camera-video" },
  { type: "button", id: "3vid4", text: "ثورة بلجيكا", icon: "bi bi-camera-video" },
  { type: "button", id: "3vid5", text: "ثورات عام 1830م", icon: "bi bi-camera-video" },
  { type: "button", id: "3vid7", text: "  الثورة في إيطاليا", icon: "bi bi-camera-video" },
  { type: "button", id: "3act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "3act16", text: "التقويم", icon: "bi bi-clipboard-check" },
];
/**************************************************************************/
function btn_three(button)
{
let num =lesson_three.findIndex(b => b.id === button.id);
btn_txt=lesson_three[num].text;

switch (button.id) {
  case "3vid0": mainVideo.src = "./media/vid3/vid0.mp4"; mainVideo.controls = true; break;
  case "3vid1": mainVideo.src = "./media/vid3/vid1.mp4"; mainVideo.controls = true; break;
  case "3vid2": mainVideo.src = "./media/vid3/vid2.mp4"; mainVideo.controls = true; break;
  case "3vid3": mainVideo.src = "./media/vid3/vid3.mp4"; mainVideo.controls = true; break;
  case "3vid4": mainVideo.src = "./media/vid3/vid4.mp4"; mainVideo.controls = true; break;
  case "3vid5": mainVideo.src = "./media/vid3/vid5.mp4"; mainVideo.controls = true; break;
  case "3vid6": mainVideo.src = "./media/vid3/vid6.mp4"; mainVideo.controls = true; break;
  case "3vid7": mainVideo.src = "./media/vid3/vid7.mp4"; mainVideo.controls = true; break;


  case "3intro": loadForm('https://forms.gle/68rovPPLyMg61ehh8'); break;
  case "3act1": window.open('https://forms.gle/nR3ybivXmRYzzHFb7', '_self'); break;
  case "3act2": window.open('https://forms.gle/VfYt3eH8go2tCnrc8', '_self'); break;
  case "3act3": window.open('https://forms.gle/dvwTfg6svwr3FroDA', '_self'); break;
  case "3act16": loadForm('https://forms.gle/fnNQ284S5AjFojpK8'); break;
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

export {lesson_three,btn_three,L2UT1};

