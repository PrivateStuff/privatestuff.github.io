window.addEventListener('load', function() {
    var upload = document.getElementById('jsonFileInput');
    // Make sure the DOM element exists
    if (upload) {
        upload.addEventListener('change', function() {
            // Make sure a file was selected
            if (upload.files.length > 0) {
                var reader = new FileReader(); // File reader to read the file 

                // This event listener will happen when the reader has read the file
                reader.addEventListener('load', function() {
                    var data = JSON.parse(reader.result); // Parse the result into an object 
                    var boss = '';

                    $.each(data, function(key, value) {
                        boss += '<div class="boss"><h1>BOSS ';
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
                            boss += '<p class="list-items">';
                            boss += team;
                            boss += '</p>';
                        });
                        boss += '<h3>';
                        boss += 'ARTIFACTS:';
                        boss += '</h3>';
                        $.each(value.artifacts, function(index, artifact) {
                            boss += '<p class="list-items">';
                            boss += artifact;
                            boss += '</p>';
                        });
                        boss += '<h3>';
                        boss += 'AVOID:';
                        boss += '</h3>';
                        $.each(value.avoid, function(index, team) {
                            boss += '<p class="list-items">';
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
                    boss += '</div></div>'

                    $('#bosses').append(boss);

                });

                reader.readAsText(upload.files[0]); // Read the uploaded file
            }
        });
    }
});


$("#imgFileInput").change(function(e) {
    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i];
        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#banner").append(img);
    }
});
