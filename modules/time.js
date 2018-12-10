'use strict'

var os = require( 'os' );
var uptime = os.uptime();


function changeTimeEl() {
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = uptime - (hours * 3600) - (minutes * 60);

    if(hours > 0) {
        console.log('Uptime ~', hours.toFixed(0), ' hours ' + minutes.toFixed(0), ' minutes ' + seconds.toFixed(0), ' seconds' );
    }
    else if (minutes > 0 ) {
        console.log('Uptime ~', minutes.toFixed(0), ' minutes ' + seconds.toFixed(0), ' seconds');
        
    }
    else if (seconds > 0 ) {
        console.log('Uptime ~', seconds.toFixed(0), ' seconds');
    }
}

exports.print = changeTimeEl;