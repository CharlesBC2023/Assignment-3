function upload_file()
{
    var regex_file = document.getElementById('regex_file');
    var status = document.getElementById('status');
    var result = document.getElementById('result');
	var file = regex_file.files[0];
	var form_data = new FormData();
	form_data.append("regex_file", file);
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', './upload.php', true);
	xhttp.onload = function()
	{
		if (xhttp.status == 200)
		{
			var json_data = JSON.parse(this.responseText, function (key, value) { return value; });
			//status.innerHTML = json_data; // json_data is [object Object] original
			status.innerHTML = json_data.status_code;//new
			
			// FILL IN YOUR CODE BELOW
			// ...
			// ...
			// ...
			// FILL IN YOUR CODE ABOVE
		}
	};

	// send the data.
	xhttp.send(form_data);
}

function match_pattern()
{
    var regex_file = document.getElementById('regex_file');
    var regex_text = document.getElementById('regex_text');
    var status = document.getElementById('status');
    var result = document.getElementById('result');
    if (regex_file.files.length == 0)
    	return false;
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', './regex.php?filename=' + regex_file.files[0].name + '&pattern=' + regex_text.value, true);
	xhttp.onload = function()
	{
		if (xhttp.status == 200)
		{
			var json_data = JSON.parse(this.responseText, function (key, value) { return value; });
			status.innerHTML = json_data; // json_data is [object Object]

			// FILL IN YOUR CODE BELOW
			// ...
			// ...
			// ...
			// FILL IN YOUR CODE ABOVE
		}
	};

	// send the data.
	xhttp.send();
}

// this method is reserved for extra credit
function hide_unmatched_results()
{
	// FILL IN YOUR CODE BELOW
	// ...
	// ...
	// ...
	// FILL IN YOUR CODE ABOVE
}

document.getElementById('submit').onclick = upload_file;
document.getElementById('filter').onchange = hide_unmatched_results;

