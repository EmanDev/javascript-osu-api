# JS OSU API
A javascript file that uses a standard way of fetch API to get data from a custom JSON file.

## get-statistics.json

```json
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
})
```

## CORS Bypass (Heroku)

For the **URL**, I use "cors-anywhere.herokuapp.com" to bypass CORS policy.

Check it out here: https://cors-anywhere.herokuapp.com/