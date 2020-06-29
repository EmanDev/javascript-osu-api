$.ajax({
            dataType: "json",
            url: "https://osu.ppy.sh/api/get_user?u=8283257&k=bda01b101c1d25e0b737f2e90c3fe60be0a28b3f",
            success: function (data) {
                var jsonString = JSON.stringify(data);
                var jsonParsed = JSON.parse(jsonString);
                var arrayParsed = jsonParsed[0];
                var myPPraw = arrayParsed.pp_raw;
                $("#pp-data-rank").html(myPPraw);
                console.log(myPPraw);
            }
        });
