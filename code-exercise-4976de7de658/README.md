# Image Interview Code Test

## What is this?

A Pikcells code test for job applicants to demonstrate their ability to construct a dynamic client side interface built using Javascript. Any code snippets used should reference original source in comments. Original code is absolutely preferred.

We are specifically interested in the way you handle, load, manage and filter data. UI design is *not* a priority.

You can use any flavour of JS you wish and at a *minimum* it must run in the browser it was developed with. Any possible compatibility issues should be noted in the comments, full cross browser testing is *not* a requirement.

## What should it do?

We want the site visitor to flex their design and creativity skills and create a good looking kitchen. It's most definitely not that our stylists are too busy and we're trying to offload the work onto the user.

1. Fetch the configuration file and present/build a clickable menu to change the layers. The menu should use the names from the json file
2. The items in the menu should be ordered according to the "order" value in the items array
3. It should initialise showing a pre-determined default configuration which is in the json file
4. The user should be able to save their configured image to their computer somehow and the client doesn't want to pay for another server to merge the images :(


## How should it do it?

Everything should run locally in the users browser, images and configuration data should be loaded from the URLs listed below.

The configuration data is available as a json file served from https://lab.pikcells.com/code-exercise/data.json .

Please prefix all image requests with https://lab.pikcells.com/code-exercise/images/

Sadly our database administrator didn't order the items in the json results, that's going to need sorting client side. Darn DB administrators right?

An example JSON output is:

```

{
	"layers": [
		{
			"order": 0,
			"items": [
				{
					"order": 1,
					"name": "Almost Silly Silver",
					"imgSrc": "BWK.jpg"
				},
				{
					"order": 0,
					"name": "Typically Pretty Blue",
					"imgSrc": "hk9.jpg"
				},
				{
					"order": 2,
					"name": "Terribly Honest Black",
					"imgSrc": "aDn.jpg"
				}
			]
		},{
			"order": 1,
			"items": [
				{
					"order": 0,
					"name": "Really Eloquent Blue",
					"imgSrc": "0Og.png"
				},
				{
					"order": 1,
					"name": "Extremely Honest Silver",
					"imgSrc": "2Ks.png"
				},
				{
					"order": 2,
					"name": "Terribly Confident Pink",
					"imgSrc": "L99.png"
				}
			]
		},{
			"order": 2,
			"items": [
				{
					"order": 2,
					"name": "Too Melodic Silver",
					"imgSrc": "jeb.png"
				},
				{
					"order": 0,
					"name": "Never Generous Silver",
					"imgSrc": "VRC.png"
				},
				{
					"order": 1,
					"name": "Terribly Juicy Green",
					"imgSrc": "58Z.png"
				}
			]
		}
	],
	"default_configuration": [
		2,
		1,
		0
	]
}

```

This should render a menu like below.

```

Layer 0  <-- layers
------------
- Almost Silly Silver <--- items
- Typically Pretty Blue
- Terribly Honest Black *selected*

Layer 1
------------
- Really Eloquent Blue
- Extremely Honest Silver *selected*
- Terribly Confident Pink

Layer 2
------------
- Too Melodic Silver *selected*
- Never Generous Silver
- Terribly Juicy Green

```

Only one image/item per layer should be selectable and a visual cue should highlight the currently selected item. The images are transparent and should be layered up by some means. The order of layering can be determined by the "layers" -> "order" property.


## Special Notes

The json file will randomise the number of options, names and order on every fetch.

Both the images and JSON file have CORS access control headers set to all (\*) origins.

The folders /exercise-src/data and /exercise-src/images are included *only* for reference purposes, your code should load the images and json file from our lab.pikcells.com server.

## Code submission

Please either
- compress your work into a single file and send a download link (Google Drive, dropbox, wetransfer etc) to pete@pikcells.com
- send us a link to a repository of your choosing.

## Ownership of code

You will always retain the ownership of code written for this test.