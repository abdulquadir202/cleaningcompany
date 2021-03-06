var env = require('../env'),
	config = require('../config/'+env.name),
	Client = require('node-rest-client').Client,
    client = new Client();


module.exports.index = index;

function index(req, res){
	res.render('index', {
		layout:'layout',
		title:'home page'
	});
};

module.exports.about = about;
function about(req, res){
	res.render('about', {
		layout:'layout',
		title:'about page'
	});
};

module.exports.contact = contact;
function contact(req, res){
	res.render('contact', {
         layout:'layout',
         title:'contact page'
	});
};

module.exports.blog = blog;
function blog(req,res) {
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('blog',{
				layout:'layout',
				title:'blog',
				blog: data.data
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/blogs?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			console.log(JSON.stringify(data));
			meCallback(data.error, null);
		}
	});
	
};

module.exports.blogDetail = blogDetail;
function blogDetail(req,res) {
	var uName = req.params.uname;
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('blogDetail',{
				layout:'layout',
				title:'blogDetail',
				blog: data.data
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/blog/"+uName+"?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			meCallback(data.error, null);
		}
	});
	
};

module.exports.services = services;
function services(req,res) {
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('services',{
				layout:'layout',
				title:'services',
				item: data.data
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/items?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			console.log(JSON.stringify(data));
			meCallback(data.error, null);
		}
	});
	
};

// function services(req, res){
// 	res.render('services', {
// 		layout:'layout',
// 		title:'our services page'
// 	});
// };
module.exports.serviceDetail = serviceDetail;

function serviceDetail(req,res) {
	var uName = req.params.uname;
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('serviceDetail',{
				layout:'layout',
				title:'serviceDetail',
				item: data.item
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/items/"+uName+"?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			meCallback(data.error, null);
		}
	});
	
};


module.exports.apartmentCleaning = apartmentCleaning;
function apartmentCleaning(req, res){
	res.render('apartmentCleaning', {
		layout:'layout',
		title:'apartmentCleaning page'
	});
};

module.exports.testimonial = testimonial;
function testimonial(req, res){
	res.render('testimonial', {
		layout:'layout',
		title:'testimonial page'
	});
};

module.exports.carpetCleaning = carpetCleaning;
function carpetCleaning(req, res){
	res.render('carpetCleaning', {
		layout:'layout',
		title:'carpetCleaning page'
	});
};

module.exports.commercialCleaning = commercialCleaning;
function commercialCleaning(req, res){
	res.render('commercialCleaning', {
		layout:'layout',
		title:'commercialCleaning page'
	});
};

module.exports.curtainCleaning = curtainCleaning;
function curtainCleaning(req, res){
	res.render('curtainCleaning', {
		layout:'layout',
		title:'curtainCleaning page'
	});
};

module.exports.houseCleaning = houseCleaning;
function houseCleaning(req, res){
	res.render('houseCleaning', {
		layout:'layout',
		title:'houseCleaning page'
	});
};

module.exports.residentialCleaning = residentialCleaning;
function residentialCleaning(req, res){
	res.render('residentialCleaning', {
		layout:'layout',
		title:'residentialCleaning page'
	});
};

module.exports.order = order;
function order(req, res){
	res.render('order', {
		layout:'layout',
		title:'order page'
	});
};