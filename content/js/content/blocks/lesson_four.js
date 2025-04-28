import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_four = [
  { type: "button", id: "4vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "4intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "4act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "4act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "4vid1", text: " ثورات عام 1848م في أوروبا ", icon: "bi bi-camera-video" },
  { type: "button", id: "4vid2", text: " الثورة الفرنسية ", icon: "bi bi-camera-video" },
  { type: "button", id: "4vid3", text: " الثورة في النمسا ", icon: "bi bi-camera-video" },
  { type: "button", id: "4vid4", text: " الثورة في إيطاليا ", icon: "bi bi-camera-video" },
  { type: "button", id: "4vid5", text: " الثورة في المانيا  ", icon: "bi bi-camera-video" },
  { type: "button", id: "4vid7", text: " أسباب فشل ثورات 1848م ", icon: "bi bi-camera-video" },
  { type: "button", id: "4act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "4act16", text: "التقويم", icon: "bi bi-clipboard-check" },
];
/**************************************************************************/
function btn_four(button)
{
let num =lesson_four.findIndex(b => b.id === button.id);
btn_txt=lesson_four[num].text;

switch (button.id) {
  case "4vid0": mainVideo.src = "./media/vid4/vid0.mp4"; mainVideo.controls = true; break;
  case "4vid1": mainVideo.src = "./media/vid4/vid1.mp4"; mainVideo.controls = true; break;
  case "4vid2": mainVideo.src = "./media/vid4/vid2.mp4"; mainVideo.controls = true; break;
  case "4vid3": mainVideo.src = "./media/vid4/vid3.mp4"; mainVideo.controls = true; break;
  case "4vid4": mainVideo.src = "./media/vid4/vid4.mp4"; mainVideo.controls = true; break;
  case "4vid5": mainVideo.src = "./media/vid4/vid5.mp4"; mainVideo.controls = true; break;
  case "4vid6": mainVideo.src = "./media/vid4/vid6.mp4"; mainVideo.controls = true; break;
  case "4vid7": mainVideo.src = "./media/vid4/vid7.mp4"; mainVideo.controls = true; break;


  case "4intro": loadForm('https://forms.gle/oHUUTKBrwNC2xN2J8'); break;
  case "4act1": window.open('https://forms.gle/tJxdGp7HFZjHj9RT8', '_self'); break;
  case "4act2": window.open('https://forms.gle/4ffpJKiRjK2MiFUN8', '_self'); break;
  case "4act3": window.open('https://forms.gle/MGXAbFgoaxyAeffd9', '_self'); break;
  case "4act16": loadForm('https://forms.gle/rQ3ujuxx51vVx8Ni7'); break;
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

export {lesson_four,btn_four,L2UT1};

