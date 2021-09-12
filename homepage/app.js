const what = document.querySelector('#newwhat');
const listcover=document.querySelector('.new_list');
const bagli=document.querySelector('.bag_list');
const bagwhat = document.querySelector('#bagwhat');
const landingcolor=document.querySelector('.langdingbar');
const girlwhat = document.querySelector('#girlwhat');
const menwhat = document.querySelector('#menwhat');
const lockwhat = document.querySelector('#lockwhat');
const juwhat = document.querySelector('#juwhat');
const butywhat = document.querySelector('#butywhat');
const decowhat = document.querySelector('#decowhat');
const girlli=document.querySelector('.girl_list');
const menli=document.querySelector('.men_list');
const lockli=document.querySelector('.lock_list');
const juli=document.querySelector('.ju_list');
const butyli=document.querySelector('.buty_list');
const decoli=document.querySelector('.deco_list');




what.addEventListener('mouseenter', () => {
    listcover.classList.toggle('active');

});
what.addEventListener('mouseleave', () => {
    listcover.classList.toggle('active');
});

landingcolor.addEventListener('mouseenter',() => {
    landingcolor.classList.toggle('ative');
});
landingcolor.addEventListener('mouseleave',() => {
    landingcolor.classList.toggle('ative');
});


bagwhat.addEventListener('mouseenter', () => {
    bagli.classList.toggle('active');
});
bagwhat.addEventListener('mouseleave', () => {
    bagli.classList.toggle('active');
});
girlwhat.addEventListener('mouseenter', () => {
    girlli.classList.toggle('active');
});
girlwhat.addEventListener('mouseleave', () => {
    girlli.classList.toggle('active');
});
menwhat.addEventListener('mouseenter', () => {
    menli.classList.toggle('active');
});
menwhat.addEventListener('mouseleave', () => {
    menli.classList.toggle('active');
});
juwhat.addEventListener('mouseenter', () => {
    juli.classList.toggle('active');
});
juwhat.addEventListener('mouseleave', () => {
    juli.classList.toggle('active');
});
lockwhat.addEventListener('mouseenter', () => {
    lockli.classList.toggle('active');
});
lockwhat.addEventListener('mouseleave', () => {
    lockli.classList.toggle('active');
});
butywhat.addEventListener('mouseenter', () => {
    butyli.classList.toggle('active');
});
butywhat.addEventListener('mouseleave', () => {
    butyli.classList.toggle('active');
});
decowhat.addEventListener('mouseenter', () => {
    decoli.classList.toggle('active');
});
decowhat.addEventListener('mouseleave', () => {
    decoli.classList.toggle('active');
});