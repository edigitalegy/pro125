import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_five = [
  { type: "button", id: "5vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "5intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "5act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "5act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "5vid1", text: " بريطانيا في العهد الفيكتوري  ", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid2", text: " حكم الملكة فيكتوريا ", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid3", text: " الحروب والحملات", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid4", text: " الأوضاع الاقتصادية في بريطانيا  ", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid5", text: " الأوضاع السياسية  ", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid7", text: " سقوط حكومة كلادستون  ", icon: "bi bi-camera-video" },
  { type: "button", id: "5vid8", text: " تشكيل وزارة كلادستون  ", icon: "bi bi-camera-video" },
  { type: "button", id: "5act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "5act16", text: "التقويم", icon: "bi bi-clipboard-check" },
];
/**************************************************************************/
function btn_five(button)
{
let num =lesson_five.findIndex(b => b.id === button.id);
btn_txt=lesson_five[num].text;

switch (button.id) {
  case "5vid0": mainVideo.src = "./media/vid5/vid0.mp4"; mainVideo.controls = true; break;
  case "5vid1": mainVideo.src = "./media/vid5/vid1.mp4"; mainVideo.controls = true; break;
  case "5vid2": mainVideo.src = "./media/vid5/vid2.mp4"; mainVideo.controls = true; break;
  case "5vid3": mainVideo.src = "./media/vid5/vid3.mp4"; mainVideo.controls = true; break;
  case "5vid4": mainVideo.src = "./media/vid5/vid4.mp4"; mainVideo.controls = true; break;
  case "5vid5": mainVideo.src = "./media/vid5/vid5.mp4"; mainVideo.controls = true; break;
  case "5vid6": mainVideo.src = "./media/vid5/vid6.mp4"; mainVideo.controls = true; break;
  case "5vid7": mainVideo.src = "./media/vid5/vid7.mp4"; mainVideo.controls = true; break;
  case "5vid8": mainVideo.src = "./media/vid5/vid8.mp4"; mainVideo.controls = true; break;


  case "5intro": loadForm('https://forms.gle/T8vEsoX7Y6Kyc72c8'); break;
  case "5act1": window.open('https://forms.gle/b6mmquvP7oLf9Hgs8', '_self'); break;
  case "5act2": window.open('https://forms.gle/dVtUYvT5daeYCXkK9', '_self'); break;
  case "5act3": window.open('https://forms.gle/d2AWnTPhSbQwjWU78', '_self'); break;
  case "5act16": loadForm('https://forms.gle/Whn1pkLUSLQ9tUd99'); break;
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

export {lesson_five,btn_five,L2UT1};

