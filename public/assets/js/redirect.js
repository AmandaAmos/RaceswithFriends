if (window.localStorage.getItem("user")) {

    $("#content").load("/views/feature.html");

  } else {

    $("#content").load("/views/login.html");

  }