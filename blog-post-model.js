const uuidv4 = require('uuid/v4');

let postArray = [
					{
						id: uuidv4(),
						title: "The coral reef",
						content: "This sti nto eisooa thaoska",
						author: "Marcos Salazar",
						publishDate: new Date(2017,11,31)
					},
					{
						id: uuidv4(),
						title: "Coral reef",
						content: "This sti nto eisooa thaoska",
						author: "Marcos Salazar",
						publishDate: new Date(2018,11,31)
					},
					{
						id: uuidv4(),
						title: "The coral",
						content: "This sti nto eisooa thaoska",
						author: "Eugenia Lua",
						publishDate: new Date(2017,11,31)
					},
					{
						id: uuidv4(),
						title: "The reef",
						content: "This sti nto eisooa thaoska",
						author: "Eugenia Lua",
						publishDate: new Date(2018,11,31)
					}
				];


const ListPosts = {
	get : function(){
		return postArray;
	},
	post : function(item){
		postArray.push(item);
		return item;
	},
	delete : function(id){
		postArray.forEach(item => {
			if(id == item.id){
				postArray.splice(item, 1);
				return true;
			}
		});

		return false;
	},
	put : function(editedItem, id){
		postArray.forEach((item, index) => {
			if(id == item.id){
				if(editedItem.title)
					{postArray[index].title = editedItem.title;}
				if(editedItem.content)
					{postArray[index].content = editedItem.content;}
				if(editedItem.author)
					{postArray[index].author = editedItem.author;}
				if(editedItem.publishDate)
					{postArray[index].publishDate = new Date(editedItem.publishDate);}
				return true;
			}
		});
		return false;
	}
}

module.exports = {ListPosts};	