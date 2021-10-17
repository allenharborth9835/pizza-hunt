let db;

const request = indexedDB.open('pizza_hunt', 1);

request.onupgradeneeded =function(event){
  const db = event.target.result;
  db.createObjectStore('new_pizza', { autoIncrement: true});
};

request.onsuccess = function(event){
  db = event.target.result;

  if(navigator.onLine){

  }
};

request.onerror = function(event){
  console.log(event.target.errorCode);
};