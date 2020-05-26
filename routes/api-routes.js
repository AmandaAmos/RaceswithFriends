var db = require("../models")

module.exports = function(app) {
    // route used for checking user info during login
    app.put("/api/user", function(req, res){
        db.User.findOne({
            where: req.body

        }).then(function(user){
            res.json(user.id);
        
        }).catch(function(err){
            //catches error
            console.log(err);
            res.send(false);
        
        })
    })

    // route used to register a new user
    app.post("/api/user", function(req,res){
        db.User.create(req.body)
            .then(function(user){
                res.json(user.id);
            }).catch(function(err){
                console.log(err);
                res.send(false);
            })
    })

    // route used to get information from a specific user
    app.get("/api/user/:id", function(req,res){
        db.User.findOne({
            where: {
                id: req.params.id
            },
            attiributes: ["id","email","name"]
        }).then(function(user){
            res.json(user);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })

    // route used to update information for a specific user
    app.put("/api/user/:id", function(req,res){
        db.User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            // send a truthy statement because client doesn't need DB data back
            res.send(true);
        }).catch(function(err) {
            console.log(err);
            res.send(false);
        })
    })

    // route used to get all runs made by user
    app.get("/api/user/:id/runs", function(req,res){
        db.Run.findAll({
            where: {
                hostId: req.params.id
            }
        }).then(function(runs){
            res.json(runs);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })

    // route used to get all runs
    app.get("/api/runs", function(req,res){
        db.Run.findAll({
            include: [
                {
                    model: db.User,
                    as: "host",
                    attributes: ["name"]
                }
            ]
        }).then(function(runs){
            res.json(runs);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
     })

    // route used to get all running groups the user is in
    app.get("/api/user/:id/group", function(req,res){
        db.Group.findAll({
        where: {
            UserId: req.params.id
        },
        include: {
            model: db.group,
            include: {
            model: db.User,
            as: "host",
            attributes: ["name"]
            }
        }
        }).then(function(users) {
        var data = [];
        users.forEach(function(user) {
            data.push(user.Event)
        })
        res.json(data);
        }).catch(function(err) {
        console.log(err);
        res.send(false);
        })
    })

   // route used to get all running groups
    app.get("/api/group", function(req,res){
        db.Group.findAll({
            include: [
                {
                moel: db.User,
                as: "host",
                attiributes: ["names"]
            }
            ]
        }).then(function(groups){
            res.json(groups);
        }).catch(function(err){
                console.log(err);
                res.send(false);
        })
   })

    // route used to create new group
    app.post("/api/group", function(req,res){
        db.Group.create(req.body).then(function(groupData){
            db.GroupId.create({
                groupId: groupData.id
            }).then(function(){
                res.send(true);
            }).catch(function(err){
                console.log(err);
                res.send(false);
            })
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })

    // route used to delete a run
    app.delete("/api/run/:id", function(req,res){
        db.Run.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.send(true);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })

    // route used to update a run
    app.put("/api/run/:id", function(req,res){
        db.Run.update(req.body,{
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.send(true);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })

    // route used to get runners for a specific group
    app.get("/api/group/:id/users", function(req,res){
        db.Group.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: db.User,
                attributes: ["names"]
            }
        }).then(function(runners){
            res.json(runners);
        }).catch(function(err){
            console.log(err);
            res.send(false)
        })
    })

    // route used to join a group
    app.post("/api/join", function(req,res){
        db.Group.findOne({
            where: req.body
        }).then(function(data){
            if(data){
                res.send(false);
            } else {
                db.Group.create(req.body)
                .then(function(){
                    res.send(true);
                })
            }
        })
    })

    // route used to leave a group
    app.delete("/api/leave", function(req,res){
        db.Group.destroy({
            where: req.body
        }).then(function(){
            res.send(true);
        }).catch(function(err){
            console.log(err);
            res.send(false);
        })
    })
}