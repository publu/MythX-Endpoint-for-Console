var cmd=require('node-cmd');
var express = require('express')
  , http = require('http');
var fs = require('fs') 

var app = express(); 
var server = http.createServer(app);

app.get('/', function(req, res){
	var o = req.query.sol;
	o = o.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, '/\n');

	fs.writeFile('Output.sol', o, (err) => { 	      
	    // In case of a error throw err. 
	    if (err) throw err; 
	    cmd.get(
        'mythx --api-key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NTg0NGVhNy1jN2JhLTRiMWUtOWFlYi0wNzU0ZjEwNzAwNmQiLCJpYXQiOjE1ODE4MDM1NTUuOTM5LCJpc3MiOiJNeXRoWCBBUEkiLCJleHAiOjE4OTczNzk1NTUuOTMzLCJ1c2VySWQiOiI1ZTQ4MmE1NzNjM2ViNzAwMTI2N2E1MmUifQ.vpcAF5JpqzJEEGtUmp_mv0puXtm0SDT8w_JjFLd3doE analyze hello.sol',
        function(err, data, stderr){
            console.log('response :\n\n',data)
			res.send(data);
        	}
		);
	})
	// store into 
});

app.listen(3000);