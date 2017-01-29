# What this bird say?
A simple React app that presents sounds and photos of birds. Built with love for my two-year-old, who is always asking "what this bird say?"

There are other similar resources, better in their own ways. For example, the Cornell Ornithology Lab has [a great search tool](https://www.allaboutbirds.org/) that provides video, maps of a bird's range, habitat and behavior information, and lots and lots of text. The intention of this project is to create a resource that is simple to learn, and simple to use. There is a single input field which returns a photo, pulled from Bing image search, and birdcall recording, pulled from [Xeno Canto](http://www.xeno-canto.org/). Clicking or tappping on the image cycles through to another image and recording.

[Demo](https://drouhard.github.io/what-this-bird-say/)

## Installation/Usage
1. Clone this repo
2. Run `npm i`
3. Run `npm run webpack`
4. Open `/srv/index.html`

## TODO
* History/pushstate (perhaps leveraging React Router?) so users can use the back button to get to the input page again
* Speech-to-text (maybe look into Alexa?) so bird names can be input by voice
* Run photo results through visual AI to ensure that they are actually photos of birds