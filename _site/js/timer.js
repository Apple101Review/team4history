var id = "timercount";		// id of the div tag
var idfull = "timer";		// id of the entire timer box to change text

var end = new Date("2/21/2012 11:59:59 PM");

//effort...
String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

function timeleft(){
	var now = new Date();
	if (end.getTime() > now.getTime()) {
		var diff = new Date(end.getTime() - now.getTime());
		var secs = Math.round(diff.getTime () / 1000);
		var days = Math.floor( secs / (3600*24));
		var hours = Math.floor(secs / 3600) - (days * 24);
		var mins = Math.floor((secs / 60) - (hours * 60) - (days * 60*24));
		var seconds = Math.floor(secs - (mins * 60) - (hours * 3600) - (days * 3600*24));
		var date_string = "{0} days {1} hours {2} minutes {3} seconds".format(
			days,
			hours,
			mins,
			seconds)
		$("#"+id).html(date_string)
		timerID = setTimeout("timeleft()", 1000); 
	} else {
		$("#"+id).html("<strong>RIGHT NOW!</strong>")
	}
}
$(document).ready(timeleft)