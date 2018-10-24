// https://sushi-hunt.herokuapp.com/

// use this link: https://developers.zomato.com/api/v2.1/location_details?entity_id=302&entity_type=city


$(document).ready(function () {
  $( window ).on( "load", function() {
    
   // $("input:hidden#cuisine").val("");
    $("#cuisine").val("");
    //console.log("#cuisine");
    findRestaurants();
  })

  $("#submit").on("click", function (event) {
    console.log("submit clicked")
    event.preventDefault();
   $("#tbody").empty();
    findRestaurants();
  });

  // find restaurants 


  function findRestaurants() {

    var cuisine = $("#cuisine").val().trim();
    // var cuisine = $("#sel1");


    // =302 - city code 216 + country code
    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&q=" + cuisine;


    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "user-key": "4293f75ed134cc3dc7f4f497a4a7a0ae" },
      dataType: "json",
    })

      // API response
      .then(function (response) {
        
        console.log(response);
        var restaurantData = response.restaurants
        
       //var urlText = $("#url").attr("src", restaurantData[i].restaurant.events_url);
       // var urlAnchor = $("<a>").attr("href", restaurantData[i].restaurant.events_url.html).html("Website");

        for (var i = 0; i < restaurantData.length; i++) { 
         
    
        var tableRow = $("<tr>");
        tableRow.append($("<td>").text(restaurantData[i].restaurant.name));
        tableRow.append($("<td>").text(restaurantData[i].restaurant.location.address));
        
        tableRow.append($("<td>").html("<a target='_blank' href='"+restaurantData[i].restaurant.events_url+"'>Visit</a>"));

        // tableRow.append($("<td>").html(urlAnchor));
                  //     ($("<a>","#url").attr(, restaurantData[i].restaurant.events_url);
                       


        tableRow.append($("<td>").text(restaurantData[i].restaurant.user_rating.rating_text));
        // tableRow.append($("<td>").text(restaurantData[i].restaurant.price_range));

        $("#tbody").append(tableRow);
        
      }
     
      






        // Get API TO PRINT
        database.reg().on("child_added", function (snapshot) {
          //var to store input data -- maybe later define limit to display
          
          
          
          
          
          /*{ FIRE BASE USE LATER create VAR
            name: snapshot.val().name,
            address: snapshot.val().address,
            cuisines: snapshot.val().cuisines,
            events_url: snapshot.val().events_url,
            rating_text: snapshot.val().rating_text,
            price_range: snapshot.val().price_range,
          }; */

        /*  var tableRow = $("<tr>");
          tableRow.append($("<td>").text(restaurantData.name));
          tableRow.append($("<td>").text(restaurantData.address));
          tableRow.append($("<td>").text(restaurantData.cuisines));
          tableRow.append($("<td>").text(restaurantData.events_url));
          tableRow.append($("<td>").text(restaurantData.events_url));
          tableRow.append($("<td>").text(restaurantData.events_url));

          $("#tbody").append(tableRow); */

        });
      });

  };
});