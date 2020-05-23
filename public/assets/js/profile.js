//for addFriends.html

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('addtoGroups');
    var instances = M.FormSelect.init(elems, options);
  });

//submit button in profileindex.handlebars
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, options);
});