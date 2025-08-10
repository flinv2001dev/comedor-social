// util functions for all pages
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

function save(key, data){
  localStorage.setItem(key, JSON.stringify(data));
}
function load(key){
  return JSON.parse(localStorage.getItem(key) || "null");
}
function ensureArrayKey(key){
  let a = load(key);
  if(!Array.isArray(a)){ a = []; save(key,a); }
  return a;
}