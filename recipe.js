$(document).ready(function() {
  $( window ).on( "load", function() {
   // $("input:hidden#recipes").val("pizza");
   //$("#recipes").val("");
    //console.log("#cuisine");
    findRecipes();
  })


  $("#button").on("click", function(e) {
  e.preventDefault();
  $("#search-content").empty();
  //console.log(word ,"esta es la palabra");
  findRecipes();
  })


  function findRecipes()
  {
  var word = $("#recipes").val();
  // var queryURL = "https://www.food2fork.com/api/get?key=1da509da23ed2e8894b619e4e4dc25bb&rId=35382";
  var queryURL = "https://www.food2fork.com/api/search?key=05873da63fa0fa406e14216e4ded97ff&q="+ word +"&page=2";
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType:"json",
  
    success: function(response) {
      console.log(response);
      var result = response.recipes;
      console.log(result[0].f2f_url);
      // var image = $("<img>").attr("src", result[0].image_url);
      // $("#image").append(image);
      for (var i = 0; i< result.length; i++)
        {

         
          var image = $("<img>").attr({src:result[i].image_url, id: "pic"});
          var url = $("<a>").attr("href", result[i].f2f_url).html(image);
        //  $("#search").attr("href", result[i].f2f_url).html(image);
        //url.attr("href", result[i].f2f_url).html(image);
        $("#search-content").append(url);
        }
    }
  })
 // $("#recipes").val("").trim();
}

})