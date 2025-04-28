import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_six = [
  { type: "button", id: "6vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "6intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "6act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "6act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "6vid1", text: "نظام الحكومة البريطانية", icon: "bi bi-camera-video" },
  { type: "button", id: "6vid2", text: "الحكومة البريطانية", icon: "bi bi-camera-video" },
  { type: "button", id: "6vid3", text: "أبرز رؤوساء الوزارات  ", icon: "bi bi-camera-video" },
  { type: "button", id: "6vid4", text: "رسل و جورج هملتون غوردن   ", icon: "bi bi-camera-video" },
  { type: "button", id: "6vid5", text: "بالمرستون ", icon: "bi bi-camera-video" },
  { type: "button", id: "6vid7", text: " حرب البوير  ", icon: "bi bi-camera-video" },
  { type: "button", id: "6act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "6act16", text: "التقويم", icon: "bi bi-clipboard-check" },
];
/**************************************************************************/
function btn_six(button)
{
let num =lesson_six.findIndex(b => b.id === button.id);
btn_txt=lesson_six[num].text;

switch (button.id) {
  case "6vid0": mainVideo.src = "./media/vid6/vid0.mp4"; mainVideo.controls = true; break;
  case "6vid1": mainVideo.src = "./media/vid6/vid1.mp4"; mainVideo.controls = true; break;
  case "6vid2": mainVideo.src = "./media/vid6/vid2.mp4"; mainVideo.controls = true; break;
  case "6vid3": mainVideo.src = "./media/vid6/vid3.mp4"; mainVideo.controls = true; break;
  case "6vid4": mainVideo.src = "./media/vid6/vid4.mp4"; mainVideo.controls = true; break;
  case "6vid5": mainVideo.src = "./media/vid6/vid5.mp4"; mainVideo.controls = true; break;
  case "6vid6": mainVideo.src = "./media/vid6/vid6.mp4"; mainVideo.controls = true; break;
  case "6vid7": mainVideo.src = "./media/vid6/vid7.mp4"; mainVideo.controls = true; break;


  case "6intro": loadForm('https://forms.gle/uV8wjSpLLTDUQLwG8'); break;
  case "6act1": window.open('https://forms.gle/RTXzuMYGxRCu2xz26', '_self'); break;
  case "6act2": window.open('https://forms.gle/4uyoxcQ7TZM2WRSK6', '_self'); break;
  case "6act3": window.open('https://forms.gle/dC3HKS19xR6me2iAA', '_self'); break;
  case "6act16": loadForm('https://forms.gle/uR29Vj4ReMzQEL867'); break;
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

export {lesson_six,btn_six,L2UT1};

