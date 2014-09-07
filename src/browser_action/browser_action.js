/**
Data Model:
Category {
    QuestionID:{
    avatarURL
    name
    text
    tweetID
    twitter
  }
}
*/

var stuff;
Firebase.enableLogging(true);
var f = new Firebase('https://oh.firebaseio.com/categories/visual_design');

f.on('value', function(snapshot){
  $('contents').innerHTML = stuff;
});

$.ajax("https://api.twitter.com/1/statuses/oembed.json?id=99530515043983360",{
  type: 'GET',
  //url: "https://api.twitter.com/1/statuses/oembed.json?id=99530515043983360",
  dataType: "jsonp",
  success: function(res){
    console.log(res);
    console.log(res.html);
    stuff = res.html;
    $("#mainPopup").append($(res.html));
    twttr.widgets.createTweet(
      '99530515043983360',
      document.getElementById('first-tweet'),
      {
        align: 'left'
      }).then(function (el) {
        console.log("@ev's Tweet has been displayed.");
      });
  }
});
