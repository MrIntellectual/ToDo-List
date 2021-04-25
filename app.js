//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const day = date.getDay();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});

app.get('/work', (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get('/about', (req, res) => {
  res.render("about", {

  });
});
app.post('/', (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect('/work');
  }else {
    items.push(item);
    res.redirect('/');
  }
});

app.post("/del",(req,res) => {
	const item = items[req.body.value];
	const itemsArray = items;
	items = [];
	var once = false;
	for (let i = 0; i < itemsArray.length; i++) {
		if(itemsArray[i] != item || once === true) {
			items.push(itemsArray[i]);
		}
		else {
			once = true;
		}
	}
	res.redirect('/');
});

app.listen(3000, () => console.log('Server is running on port 3000.'));
