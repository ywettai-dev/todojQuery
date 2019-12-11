// todolist app
$(function () {
   $("#new-task button").on("click", function () {
      var task = $("#new-task input").val();

      // check empty input
      if (!task) return false;

      // create a task
      buildTask(task).appendTo("#tasks");

      // count tasks
      $("h1 span").html($("#tasks li").length);

      // focus on input text for tasks
      $("#new-task input").val("").focus();
   })

   // catch enter key 
   $("#new-task input").on("keydown", function (e) {
      if (e.which == 13)
         $("#new-task button").click();
   })
})

// create a task as [li element]
function buildTask(msg) {

   // create checkbox for tasks
   var checkBox = $("<input>", {
      type: "checkbox"
   }).on("click", function () {
      if ($(this).is(":checked")) {
         $(this).parent().prependTo("#done");
      } else {
         $(this).parent().appendTo("#tasks");
      }

      // count tasks and show the number of tasks
      $("h1 span").html($("#tasks li").length);
   });

   // create span for tasks
   var task = $("<span>").html(msg);

   // create delete/ done button for tasks
   var delTask = $("<a>", {
      href: "#"
   }).html("&times;").on("click", function () {
      $(this).parent().remove();
      $("h1 span").html($("#tasks li").length);
   });

   return $("<li>").append(checkBox).append(task).append(delTask);
}