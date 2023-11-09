var birds = require('../models/birds');
// List of all Costumes
exports.birds_list = async function(req, res) {
try{
thebirds = await birds.find();
res.send(thebirds);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.birds_view_all_Page = async function(req, res) {
    try{
    thebirds = await birds.find();
    res.render('birds', { title: 'birds Search Results', results: thebirds });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
    exports.birds_create_post = async function(req, res) {
    console.log(req.body)
    let document = new birds();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.color = req.body.color;
    document.Age = req.body.Age;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// List of all birds
/*exports.birds_list = function(req, res) {
res.send('NOT IMPLEMENTED: birds list');
};*/
// for a specific birds.
exports.birds_detail = function(req, res) {
res.send('NOT IMPLEMENTED: birds detail: ' + req.params.id);
};
// Handle birds create on POST.
/*exports.birds_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};*/
// Handle birds delete form on DELETE.
exports.birds_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle birds update form on PUT.
exports.birds_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: birds update PUT' + req.params.id);
};
