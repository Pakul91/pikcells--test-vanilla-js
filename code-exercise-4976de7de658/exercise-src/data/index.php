<?php
	// This is how they invent paint colours in real life!
	$adverbs = ['always', 'almost', 'too', 'quite', 'very', 'absolutely', 'really', 'completely', 'randomly', 'cheerfully', 'terribly', 'overly', 'extremely', 'kind of', 'some times', 'never', 'typically'];
	$adjectives = [ 'agreeable', 'brave', 'eager', 'mysterious', 'melodic', 'whispy', 'juicy', 'tasteless', 'filthy', 'substantial', 'silly', 'wide-eyed', 'adorable', 'canny', 'confident', 'honest', 'generous', 'pretty', 'eloquent'];
	$colours = ['red', 'blue', 'pink', 'green', 'black', 'silver', 'brown', 'orange'];

	$list = [];
	$colour_array = [];

	// fixed images per layer, won't always use all of them
	$layer_images[0] = ['U1Y.jpg', 'Ogf.jpg', '9VR.jpg', 'jB1.jpg', 'aDn.jpg', 'hk9.jpg', 'BWK.jpg'];
	$layer_images[1] = ['uAS.png', 'EWU.png', '8jD.png', '081.png', '58Z.png', 'VRC.png', 'jeb.png'];
	$layer_images[2] = ['8ls.png', '2UN.png', '020.png', 'Wx4.png', 'L99.png', '2Ks.png', '0Og.png'];

	// shuffle the image orders so we can pop an image off the array and easily get randomised non-dupe images
	shuffle($layer_images);

	// creating our random colour names
	for ($i=0; $i<21;$i++) {
		$str = $adverbs[ array_rand($adverbs)] . " " . $adjectives[ array_rand($adjectives) ]. " " . $colours [ array_rand($colours) ];
		array_push($colour_array, ucwords($str));
	}

	// looping each layer
	for ($i=0; $i<3; $i++) {

		// creating a random number of items
		$rand = rand(2,7);
		// randomise the item order in the json
		$orders = range(0, $rand-1);
		// build a random default config
		$default_config[$i] = rand(0,$rand-1);


		shuffle($orders);

		// layer ordering
		$list['layers'][$i]['order'] = $i;

		// loop through each layer and create the item objects
		for ($n=0; $n<$rand; $n++) {
			$list['layers'][$i]['items'][] =  array('order' => array_pop($orders), 'name'=>array_pop($colour_array), 'imgSrc' =>  array_pop($layer_images[$i]));
		}
	}

	$list['default_configuration'] = $default_config;


	header('Content-Type: application/json');
	echo json_encode($list);