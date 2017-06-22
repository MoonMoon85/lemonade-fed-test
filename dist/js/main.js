const cats = [
	{ 
		"id": 3,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat1.jpg",
		"heading": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
		"content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"link": "http://www.lemonade.com.au/"
	},{ 
		"id": 6,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat2.jpg",
		"heading": "It has survived not only five centuries and typesetting tempus ut erat vitae",
		"content": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.",
		"link": "http://www.lemonade.com.au/"
	},{ 
		"id": 5,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat3.jpg",
		"heading": "Contrary to popular belief, Lorem Ipsum is not simply random text eleifend",
		"content": "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. pellentesque volutpat nunc, ullamcorper pellentesque volutpat nunc.",
		"link": "http://www.lemonade.com.au/"
	},{ 
		"id": 1,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat4.jpg",
		"heading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend venenatis",
		"content": "Integer mattis, sapien eu facilisis varius, dolor erat malesuada erat, tincidunt accumsan turpis lacus sed lorem. Maecenas pellentesque volutpat nunc, ullamcorper tempus ante.",
		"link": "http://www.lemonade.com.au/"
	},{ 
		"id": 4,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat5.jpg",
		"heading": "Curabitur sapien lacus, consectetur sit amet neque ut, auctor consectetur metus",
		"content": "Maecenas at eros at odio aliquam elementum in ultrices massa. Aliquam quis neque dolor. Maecenas mi est, accumsan nec gravida dapibus, pellentesque dictum lacus.",
		"link": "http://www.lemonade.com.au/"
	},{ 
		"id": 2,
		"image": "http://staging.lemonade.com.au/FrontEndTest/images/cat6.jpg",
		"heading": "Maecenas ac dapibus erat amet neque ut, auctor consectetur metus amet neque ut",
		"content": "Curabitur tincidunt dictum ante, at congue tortor sagittis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nam eleifend turpis vel. ",
		"link": "http://www.lemonade.com.au/"
	}
]

/* Sort cats by ID */
const sort = cats.sort(function(a, b) {
	if(a.id > b.id) {
		return 1;
	} else {
		return -1;
	}  
});

/* Display cats */
const getCats = cats.forEach(function(cat) {
	const showCats = $('.cats');
    showCats.append(`
    	<div class="grid-12 grid-md-6">
    		<img src="${cat.image}" alt="${cat.id}">  
            <h2>${cat.heading}</h2>
            <p>${cat.content}</p> 
        </div>
    `); 
});