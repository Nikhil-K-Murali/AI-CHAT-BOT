var http = require('http');

exports.handler = (event, context, callback) => {
	
	var STATUS= "false";
	var lookItem = event.currentIntent.slots.item;
	var msg = event.currentIntent.slots.target_countrys;
	msg = msg.charAt(0).toUpperCase() + msg.slice(1);
    var url = "http://restcountries.eu/rest/v2/name/"+msg;
	
    var res = http.get(url, function(res){
		var body = '';
		
		res.on('data', function(chunk){
			body += chunk;	
		});
		res.on('end', function(){
			var responce = JSON.parse(body);
			console.log("Got a what is responce: "+responce);
			
			for(var i = 0; i < responce.length; i++){
			    if(responce[i]['name'] == msg){
			        if(lookItem == "capital")
			        {
			        	var result="The capital of "+msg+" is "+responce[i]['capital'];
			        	STATUS= "true";
			        }
			        else if(lookItem == "currency"){
			        	var result="The currency of "+msg+" is "+responce[i]['currencies'][0]['name'];
			        	STATUS= "true";
			        }
			        else if(lookItem == "language"){
			        	var result="The language of "+msg+" is "+responce[i]['languages'][0]['name'];
			        	STATUS= "true"
			        	
			        }
			        else if(lookItem == "flag"){
			        	var result = responce[i]['flag'];
			        	STATUS= "true"
			        }
			    }
			}
			
			if(STATUS == "false"){
				result =lookItem+" of "+msg+" not found.!";
			}
			if(lookItem == "flag"){
				var capital ={
						"dialogAction": {
		            	"type": "Close",
		            	"fulfillmentState":"Fulfilled",
		            	"message": {
    					"contentType": "PlainText",
    					 "content": msg
						 },

            			"responseCard": {
            			 "contentType": "application/vnd.amazonaws.card.generic",
            			 "genericAttachments": [
                    		{
                        		 "imageUrl": result,
                    		}
            			 ] 
            			}
        			}
				}
			}
			else{
				
				var capital ={
	            
					"dialogAction": {
            
						"type":"Close",
            
						"fulfillmentState":"Fulfilled",
                
						"message": {
                    
							"contentType":"PlainText",
                    
							"content" : result          
						}
            
			
					}
				}
			}
			
			callback(null, capital);
		});
		});
    
};