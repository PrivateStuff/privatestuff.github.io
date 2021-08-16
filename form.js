$(document).ready(function(){
    $('textarea').keyup(function() {
        // $('.hiddenp').text($('textarea#name').val());
        json = updateJSON();
        drawPreview(".preview", json);
    });

    function updateJSON() {
        abilities_lines = $("#ability_list").val().split("\n");
        var abilities = {}
        for (var i=0; i<abilities_lines.length; i++){
            line = abilities_lines[i];
            line = line.split(":");
            abilities[line[0]] = line[1]
        }
        teams = $("#teams_list").val().split("\n");
        artifacts = $("#artifacts_list").val().split("\n");
        avoid = $("#avoid_list").val().split("\n");
        var data = [{
            name: $("#name").val(), 
            summary: $("#summary").val(),
            abilities: abilities,
            teams: teams,
            artifacts: artifacts,
            avoid: avoid,
            notes: $("#notes").val(),
        }]

        var myJSON = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var jsonObj = JSON.stringify(data)
        if ($("#download").length != 0) {
            $("#download").remove();
        }
        $('<a id="download" href="data:' + myJSON + '" download="data.json">download JSON</a>').appendTo('.form');

        return jsonObj;
    }

    function drawPreview(bossClass, json){
        var data = JSON.parse(json); // Parse the result into an object 
        var boss = '';

        if ($(".boss-container").length != 0){
             $(".boss-container").remove();
        }
        $.each(data, function(key, value) {
            boss += '<div class="boss-container"><div class="boss"><h1>BOSS ';
            boss += value.name;
            boss += '</h1><div class="left"><h2>FIGHT SUMMARY</h2><p class="summary">';
            boss += value.summary;
            boss += '</p><div class="abilities">';
            $.each(value.abilities, function(ability, desc) {
                boss += '<h3>';
                boss += ability;
                boss += '</h3><p>';
                boss += desc;
                boss += '</p>';
            });
            boss += '</div></div><div class="right">'
            boss += '<h3>';
            boss += 'TEAMS:';
            boss += '</h3>';
            $.each(value.teams, function(index, team) {
                boss += '<p>';
                boss += team;
                boss += '</p>';
            });
            boss += '<h3>';
            boss += 'ARTIFACTS:';
            boss += '</h3>';
            $.each(value.artifacts, function(index, artifact) {
                boss += '<p>';
                boss += artifact;
                boss += '</p>';
            });
            boss += '<h3>';
            boss += 'AVOID:';
            boss += '</h3>';
            $.each(value.avoid, function(index, team) {
                boss += '<p>';
                boss += team;
                boss += '</p>';
            });
            if (value.notes != "") {
                boss += '<h3>';
                boss += 'NOTES:';
                boss += '</h3><p>';
                boss += value.notes;
                boss += '</p>';
            }
            boss += '</div></div>';
        });

        boss += '<div id="watermark"><div id="watermark-text">';
        for (var i = 0; i < 10; i++) {
            boss += '<p>•Δ₭ BATMAN INC•Δ₭ BATMAN INC•Δ₭ BATMAN INC•Δ₭ BATMAN INC•Δ₭ BATMAN INC•</p>';
        }
        boss += '</div></div></div>'

        $(bossClass).append(boss);
        
    }


});
