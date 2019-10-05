 //Customer requesting a job POST route from /view/customer/
 console.log("JS loaded")
 var string = "Apples, Oranges, Bananas"
 var lowerCaseString = string.toLowerCase();
 console.log(lowerCaseString);
 var splicedArr = lowerCaseString.split(', ')
    console.log(splicedArr);

 $(document).ready( function(){ 
 console.log("doc ready here")
 $("#admin-caption-btn").on("click", function (event) {
    event.preventDefault();
    // console.log("clicked")

  // console.log($("#caption-lyric"))

   var lyricBoolean = document.getElementById("caption-lyric").checked;
    var quoteBoolean = document.getElementById("caption-quote").checked
    // var lyricText = $("#caption-lyric").val().trim()
    // var quoteText = $("#caption-quote").val().trim()
    console.log ()
    console.log ()

    // var captionTags = $("#caption-tags").val().trim();
    // var tagsArr = captionTags.split(",");
    // console.log(tagsArr);

    var newCaption = {
      caption: $("#caption-text").val().trim(),
      category: $("#caption-category").val().trim(),
      author: $("#caption-author").val().trim(),
      tags: $("#caption-tags").val().trim(),
      reference: $("#caption-reference").val().trim(),
      lyric: lyricBoolean,
      quote: quoteBoolean,
      originalAuthor: $("#caption-original-author").val().trim(),
    }

    console.log(newCaption);
    console.log(newCaption.tags);

    $.ajax("admin/submit/caption", {
      type: "POST",
      data: newCaption
    }).then(function () {
      alert("Your caption has been submitted!");
      location.reload();
    })

  })

})

    // $.ajax("/api/customers", {
    //   type: "POST",
    //   data: newCustomer
    // }).then(function () {
    //   alert("Youre request has been submitted!")
    //   location.reload()
    // })
