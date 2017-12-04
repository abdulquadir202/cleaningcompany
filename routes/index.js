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
function blog(req, res){
	res.render('blog', {
		layout:'layout',
		title:'blog page'
	});
};

module.exports.services = services;
function services(req, res){
	res.render('services', {
		layout:'layout',
		title:'our services page'
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