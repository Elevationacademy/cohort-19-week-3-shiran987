$("#btn").on("click", function(){
    const human = $('#inp').val()
    $('#inp').val('')
    $('#human-list').append(`<li>${human}</li>`)

  })

  // ex2
  $("#human-list").on("click",".name",  function(){
    $(this).remove(".name")
   })

  //  ex4
  $("#items").on("click",".item", function(){
    const name =$(this).text()
    const data =$(this).data()
    if(data.instock==true){
        $("#cart").append(`<div class=cart-item>${name}</div>`)

        }   
    })