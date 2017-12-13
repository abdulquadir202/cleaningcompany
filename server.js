var express = require('express'),
partials = require('express-partials'),
app = express(),
errorHandlers = require('./middleware/errorHandlers'),
routes = require('./routes'),
env = require('./env'),
config = require('./config/' + env.name)
;

app.set('view engine', 'ejs');
app.set('view options', {defoultLayout:'layout'});
// app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/testimonial', routes.testimonial);
app.get('/services', routes.services);
app.get('/apartmentCleaning', routes.apartmentCleaning);
app.get('/blog', routes.blog);
app.get('/carpetCleaning', routes.carpetCleaning);
app.get('/commercialCleaning', routes.commercialCleaning);
app.get('/curtainCleaning', routes.curtainCleaning);
app.get('/houseCleaning', routes.houseCleaning);
app.get('/residentialCleaning', routes.residentialCleaning);
app.get('/services/:uname', routes.serviceDetail);
app.get('/blog/:uname', routes.blogDetail);
app.get('/order', routes.order);


app.get('/error', function(req, res, next){
	next(new Error('A contrived error'));
});
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(config.port);
	console.log('server running port '+ config.port);
