 //Customer requesting a job POST route from /view/customer/
 $("#caption-input-form").on("submit", function (event) {
    event.preventDefault();
    console.log("clicked")

   var lyricBoolean = false;
    var quoteBoolean = false;
    var lyricText = $("#caption-lyric").val().trim()
    var quoteText = $("#caption-quote").val().trim()
    

    var newCaption = {
      caption: $("#caption-text").val().trim(),
      category: $("#caption-category").val().trim(),
      tags: $("#caption-tags").val().trim(),
      author: $("#caption-author").val().trim(),
      reference: $("#caption-reference").val().trim(),
      lyric: $("#caption-lyric").val(),
      quote: $("#caption-quote").val(),
      originalAuthor: $("#caption-original-author").val().trim(),
    }

    console.log(newCaption);

    // $.ajax("/api/customers", {
    //   type: "POST",
    //   data: newCustomer
    // }).then(function () {
    //   alert("Youre request has been submitted!")
    //   location.reload()
    // })
  });