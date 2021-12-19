import{r as o,R as e,a as i}from"./vendor.28230b76.js";const s=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};s();var m="/assets/mathApp.f9ab6ab4.jpg",p="/assets/movieAPI.d7b268e5.jpg",d="/assets/the shoe store.759479e6.jpg",h="/assets/canadaCountryRoad.f3a34a63.jpg",u="/assets/todos.27ea31ca.jpg",E="/assets/amazon-clone.4e062e44.jpg";const v=()=>(o.exports.useState(!1),e.createElement("div",{className:"project-container",id:"projects"},e.createElement("div",{className:"project-wrapper"},e.createElement("h1",{className:"project-title"},"Projects"),e.createElement("div",{className:"project-card first"},e.createElement("div",{className:"project-images"},e.createElement("a",{href:"https://github.com/viviannrydh/ProjectLeverans"},e.createElement("img",{src:d,alt:"shoeStore",className:"project-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("h3",null,"E-commerce Web Application"),e.createElement("p",null,"An e-commerce website with our own backend. Group project in school;"))),e.createElement("div",{className:"project-card second "},e.createElement("a",{href:"https://github.com/viviannrydh/Photonic"},e.createElement("div",{className:"project-images"},e.createElement("img",{src:E,alt:"amazon",className:"project-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("h3",null,"Social Media Application"),e.createElement("p",null,"A social photo sharing app with our own backend."))),e.createElement("div",{className:"project-card third"},e.createElement("div",{className:"project-images"},e.createElement("a",{href:"https://canada-immigration.herokuapp.com/"},e.createElement("img",{src:h,alt:"shoeStore",className:"project-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("a",{href:"https://canada-immigration.herokuapp.com/"},e.createElement("h3",null," Service Web Application")),e.createElement("p",null,"A company website built with React and deployed on hiroku.")))),e.createElement("div",{className:"project-wrapper second-wrapper"},e.createElement("div",{className:"project-card fourth"},e.createElement("div",{className:"project-images"},e.createElement("a",{href:"https://github.com/viviannrydh/Todo-App"},e.createElement("img",{src:u,alt:"todoapp",className:"math-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("a",{href:"https://github.com/viviannrydh/Todo-App"},e.createElement("h3",null,"Todo App")),e.createElement("p",null,"A todo app that I built with React for my children to plan their daily life."))),e.createElement("div",{className:"project-card fifth"},e.createElement("div",{className:"project-images"},e.createElement("a",{href:"https://github.com/viviannrydh/Math-app-for-kids"},e.createElement("img",{src:m,alt:"mathapp",className:"math-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("a",{href:"https://github.com/viviannrydh/Math-app-for-kids"},e.createElement("h3",null," Math Web App")),e.createElement("p",null,"A math web application that I built with React for my children to learn multiplication\uFF0Cdivision\uFF0Caddition and subtraction."))),e.createElement("div",{className:"project-card sixth"},e.createElement("div",{className:"project-images"},e.createElement("a",{href:"https://github.com/viviannrydh/movieapi"},e.createElement("img",{src:p,alt:"movieapp",className:"math-img"}))),e.createElement("div",{className:"project-intro"},e.createElement("a",{href:"https://github.com/viviannrydh/movieapi"},e.createElement("h3",null," IMDb API Movie App")),e.createElement("p",null,"This project is a practice for fetching data from http://www.omdbapi.com ;"))))));var f="/assets/selfie.d8300708.jpg";const g=()=>e.createElement("div",{className:"wrapper",id:"aboutme"},e.createElement("h1",{className:"aboutme-title"},"About me"),e.createElement("div",{className:"aboutme-wrapper"},e.createElement("div",{className:"aboutme-self-info"},e.createElement("p",null,"Hello. I am a front-end web developer with a passion for building web applications with React."),e.createElement("p",null,"With ten years of experience in marketing and the sales field, I am drilled to prioritize customer demands."),e.createElement("p",null,"Working with JavaScript, React, HTML, CSS, MaterialUI, Node, RestAPI, MongoDB(Database)")),e.createElement("img",{src:f,alt:"selfie",className:"aboutme-selfie"})));function b(){return e.createElement("div",{className:"App"},e.createElement(g,null),e.createElement(v,null))}i.render(e.createElement(e.StrictMode,null,e.createElement(b,null)),document.getElementById("root"));
