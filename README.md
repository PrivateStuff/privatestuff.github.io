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
