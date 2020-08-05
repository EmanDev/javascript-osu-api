$.ajax({
            dataType: "json",
            url: "https://cors-anywhere.herokuapp.com/http://emandev-osu.herokuapp.com/pp_raw/data.json", // CORS Bypass for Heroku APP
            success: function (data) {
                var jsonString = JSON.stringify(data);
                var jsonParsed = JSON.parse(jsonString);
                var arrayParsed = jsonParsed[0];
                var myPPraw = arrayParsed.pp_raw;
                $("#pp-data-rank").html(myPPraw);
                console.log(myPPraw);
            }
        });
