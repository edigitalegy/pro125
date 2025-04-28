import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L1UT1 ="";
/*************************************elements******************************************/
const lesson_one = [
  { type: "button", id: "1vid0", text: "الأهداف", icon: "bi bi-camera-video" ,time:""},
  { type: "button", id: "1intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "1act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid1", text: "التطورات السياسية في فرنسا", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid2", text: "لويس الثامن عشر ", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid3", text: "نتائج الدستور ", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid4", text: "شارل العاشر (1824- 1830)", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid5", text: " مراسيم 1830م", icon: "bi bi-camera-video" },
  { type: "button", id: "1act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1act9", text: "التقويم", icon: "bi bi-clipboard-check" },

];

function btn_one(button) {
  let num = lesson_one.findIndex(b => b.id === button.id);
  if (num !== -1) {
      btn_txt = lesson_one[num].text;
  }

  switch (button.id) {
      case "1vid0": mainVideo.src = "./media/vid1/vid0.mp4"; mainVideo.controls = true; break;
      case "1vid1": mainVideo.src = "./media/vid1/vid1.mp4"; mainVideo.controls = true; break;
      case "1vid2": mainVideo.src = "./media/vid1/vid2.mp4"; mainVideo.controls = true; break;
      case "1vid3": mainVideo.src = "./media/vid1/vid3.mp4"; mainVideo.controls = true; break;
      case "1vid4": mainVideo.src = "./media/vid1/vid4.mp4"; mainVideo.controls = true; break;
      case "1vid5": mainVideo.src = "./media/vid1/vid5.mp4"; mainVideo.controls = true; break;



      case "1intro": loadForm('https://forms.gle/65t84YdR97A1kJX87'); break;
      case "1act1": window.open('https://forms.gle/Zs8mEhJSFRL9hMip7', '_self'); break;
      case "1act2": window.open('https://forms.gle/oeZhRmnMZPiqrrSW7', '_self'); break;
      case "1act3": window.open('https://forms.gle/8fwHB4VLX5pzFwgs9', '_self'); break;      
      case "1act9": loadForm('https://forms.gle/y2Vv9vNm1zF6X7qDA'); break;
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
export {lesson_one, btn_one,L1UT1};
