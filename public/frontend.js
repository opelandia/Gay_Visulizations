$(function(){


  $.get('/twitter',function(data){

    console.log(data)

    data.forEach(function(tweet){
      $('body').append(tweet.text + "<br>")
    })



  })
})
