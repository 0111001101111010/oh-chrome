
Firebase.enableLogging(true);
var f = new Firebase('https://oh.firebaseio.com/categories/visual_design');

f.on('value', function(snapshot){
  $('contents').innerHTML = snapshot.val()
})

