var userId = localStorage.getItem("user");

var isObjEmpty = function(obj){
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
}
  
var renderFeaturePage = function(){
    renderSideNav();

    renderRuns()
}

var renderRuns = function(content){
    switch (content){
        case "myruns":
            getRunsByUserId(userId).then(function(runs){
                renderMyRuns(runs);
            })
        break;
        default:
            getRunInfo().then(function(runs){
                renderRuns(runs);   
            })
    }
}

var renderRuns = function(runs){
    var content = $("#runhistory");
    content.empty().append($("<h1>").text("Your Run History"), $("<ul>").addclass("collection"));
    var image = "../assets/images/location.png";
    runs.forEach(function(user){
        var itembody = $("<div>").addclass("item-body");
        var img = $("img").attr("src", image);
        getRuns(user.id).then(function(runs){
            var date = $("span").addclass("dateRun").text("Date: " + runs.Run.date);
            var distance = $("span").addclass("Distance").text("Distance(miles): " + runs.Run.distance);
            var time = $("span").addclass("time").text("Total Time: " + runs.Run.time);

            itembody.append(img,date,distance,time);    
            var item = $("<li>").addclass("collection-item avatar").append(itembody);
            content.append(item);
        })
    })
}

var renderSideNav = function(user){
    var friends = $("#friendGroupList");
    friends.empty().append($("<h4>").text("Friends"), $("<ul>"));
    user.forEach(function(group){
        var listbody = $("<div>").addclass("list-body");
        var friendgroup = $("span").addclass("name").text("Group Name: " + group.name);
        
        getParticipants(group.id).then(function(participants){
            var part = $("span").addclass("participants").text("Friends: " + participants.length);
            var friendslist = $("<ul>").addclass("friendslist");
            participants.forEach(function(runner){
                var li = $("<li>").text(runner.User.name);
                friendslist.append(li);
            })
            part.append(friendslist);
            listbody.append(friendgroup, part);
            var item = $("<li>").addclass("collection-item avatar").append(listbody);
            content.append(item);
        })
    })
}

var newUser = function(user){

}

var getParticipants = function(userId){
    return $.ajax({
      url: "/api/user/" + userId + "/group",
      type: "GET"
    })
}

var createGroup = function(data){
    return $.ajax({
      url: "/api/group/",
      type: "POST",
      data: data
    })
}



