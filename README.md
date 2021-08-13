Very basic webpage to make it easier to put together infographics on Injustice 2 Mobile solo raids. 

Will maybe write more on the format but as it stands input json file has to match a certain format otherwise it won't work

Look at the available .json files to get an understanding

Basic Overview of the json file:

	{
		sub_boss_1{...},
		sub_boss_2{...},
		sub_boss_3{...},
		sub_boss_4{...},
		boss{...}
	}
  
Each Boss/Sub-boss part contains this format:

	{
		"name": "NAME",
		"summary": "description summary",
		"abilities": {
			"ability_1": "ability 1 decription",
			"ability_2": "ability 2 decription",
			"ability_3": "ability 3 decription",
		},
		"teams": [
			"TEAMS"
		],
		"artifacts": [
			"ARTIFACTS"
		],
		"avoid": [
			"TEAMS"
		],
		"notes": "any additional notes"
	}

The format is generally: key: value

Keys are given in strings, value can be any kind of variable. Most common used here are strings, lists and dictionaries (given as key:value)

Dictionaries are denoted by their use of { } brackets and key:value pairings

Lists are denoted by use of their [ ] brackets and listing individual variables 

Once you fill in the .json file with the relevent data (you'll need one for each tier) then you can go ahead and upload it.

You can access the webpage hosted on github <a href="https://privatestuff.github.io">here</a>

There you will find in the top left two submission options for the banner and the .json file for the infographic. 

<img width="186" alt="Screenshot 2021-08-14 at 07 47 50" src="https://user-images.githubusercontent.com/41133498/129427634-c4507116-a748-438e-bdc8-85f04663157e.png">

So long as the syntax of the json file is working and inline with the format described above you should be able to get something that looks like this:

<img width="1440" alt="Screenshot 2021-08-14 at 07 51 06" src="https://user-images.githubusercontent.com/41133498/129427768-406d2d6f-1943-497e-a96a-76d4348eaded.png">

It is recommended you use the Firefox web browser so you can get a 'scrolling screenshot' of the webpage

On MacOS this is done with the shortcut `cmd + shift + s`

<img width="1269" alt="Screenshot 2021-08-14 at 07 51 55" src="https://user-images.githubusercontent.com/41133498/129427828-58c57fed-442e-44a6-ab75-a6752b072837.png">

<img width="1267" alt="Screenshot 2021-08-14 at 07 52 05" src="https://user-images.githubusercontent.com/41133498/129427833-69f40327-0b8e-4e96-88cc-a8c6fa674cec.png">
