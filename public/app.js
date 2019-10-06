//Customer requesting a job POST route from /view/customer/
console.log("JS loaded")



$(document).ready(function () {
  console.log("doc ready here")


  // Hide Admin Tools
  $('.caption-input-form').hide();
  $('.category-input-form').hide();


  // Show Admin Tools
  // Show Create Caption Tool
  $("#createCaption").on("click", function () {
    $('.category-input-form').hide();
    $('.caption-input-form').show();
  })

  // Show Create Category Tool
  $("#createCategory").on("click", function () {
    $('.caption-input-form').hide();
    $('.category-input-form').show();
  })

  //Return from any foreign view back to Admin dashboard
  $("#adminBtn").on("click", function (event) {
    event.preventDefault();
    console.log("You are now going to admin view");
    window.location.assign("/admin")
  })

  //from manager view, on click view jobs button
  $("#viewMainCaptions").on("click", function (event) {
    event.preventDefault();
    console.log("view list of all main captions");
    window.location.assign("/admin/view/maincaptions")

  })

  $("#editMainCaptions").on("click", function (event) {
    event.preventDefault();
    console.log("edit list of all main captions");
    window.location.assign("/admin/view/live/maincaptions")
  })


  ///////////////////////////////////////////////////////////////////
  /////// ADMIN CREATE CAPTION FORM HANDLER /////////////////////////
  ///////////////////////////////////////////////////////////////////

  $("#admin-caption-btn").on("click", function (event) {
    event.preventDefault();
    // console.log("clicked")

    // console.log($("#caption-lyric"))

    var lyricBoolean = document.getElementById("caption-lyric").checked;
    var quoteBoolean = document.getElementById("caption-quote").checked
    // var lyricText = $("#caption-lyric").val().trim()
    // var quoteText = $("#caption-quote").val().trim()
    console.log()
    console.log()

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

  ////////////////////////////////////////////////////////////////////
  /////////// ADMIN CREATE CATEGORY FORM HANDLER /////////////////////
  ////////////////////////////////////////////////////////////////////

  $("#admin-category-btn").on("click", function (event) {
    event.preventDefault();

    var newCategory = {
      category: $("#category-text").val().trim()
    }

    $.ajax("admin/submit/category", {
      type: "POST",
      data: newCategory
    }).then(function () {
      alert("Your category has been submitted!");
      location.reload();
    })

  })





    // $.ajax("/api/customers", {
    //   type: "POST",
    //   data: newCustomer
    // }).then(function () {
    //   alert("Youre request has been submitted!")
    //   location.reload()
    // })

    //////////////////////////////////////////////////////////////////////
    ////////////////////// LIVE TABLE EDIT FUNCTIONS /////////////////////
    //////////////////////////////////////////////////////////////////////
    $(".edit-main-button").on("click", function(event) {
      event.preventDefault();
      console.log("Edit button pressed:" + $(this).val())
      var i = $(this).val()
      var lyricBooleanEdit = document.getElementById(`lyric-${i}`).checked;
      var quoteBooleanEdit = document.getElementById(`quote-${i}`).checked
      var likeNum = parseInt($(`.likes-${i}`).val().trim())

      var newEdits = {
        caption: $(`.caption-${i}`).val().trim(),
        category: $(`.category-${i}`).val().trim(),
        tags: $(`.tags-${i}`).val().trim(),
        author: $(`.author-${i}`).val().trim(),
        reference: $(`.reference-${i}`).val().trim(),
        lyric: lyricBooleanEdit,
        quote: quoteBooleanEdit,
        originalAuthor: $(`.originalAuthor-${i}`).val().trim(),
        likes: likeNum
      }

      console.log(newEdits)

      $.ajax("/admin/maincaptions/edit/" + i, {
        type: "PUT",
        data: newEdits
      }).then(function(){
        alert("You've updated this caption!");
        location.reload();
      })

    })


    $(".delete-main-button").on("click", function(event) {
      event.preventDefault();
      console.log("Delete button pressed:" + $(this).val());

      var id = $(this).val();

      var confirmDeleteCaption = confirm("Are you sure you want to delete this caption?");

      if (confirmDeleteCaption) {
        $.ajax("/admin/maincaptions/delete/" + id, {
          type: "POST"
        }).then(function(response){
          alert("This caption has been deleted.")
          location.reload()
        })
      };


    })



























  })