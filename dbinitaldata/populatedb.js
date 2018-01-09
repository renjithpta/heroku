module.exports= function(chatMongoHistoryModel,customerIssueModel,logger){
chatMongoHistoryModel.remove().exec(function(err, data) {
var newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Renjith',
      msgTo :'Hilton Bot' ,
	  msgFromId:'1',
	  msgToId:'ert45',
      msg: "Hi",
      });

    newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
	newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Hilton Bot',
      msgTo :'Renjith' ,
	  msgFromId:'2',
	  msgToId:'ert45',
      msg: "Hi Renjith, How are you doing today?",
      });

    newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });

	
	newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Renjith',
      msgTo :'Hilton Bot' ,
	  msgFromId:'3',
	  msgToId:'ert45',
      msg: "I am doing good",
      });
	  
	   newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
	  
 newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Hilton Bot',
      msgTo :'Renjith' ,
	  msgFromId:'4',
	  msgToId:'ert45',
      msg: "Great Renjith! Let us 'Get Started', How can I help you today?",
      });
newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });

	  
	  
 newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Renjith',
      msgTo :'Hilton Bot' ,
	  msgFromId:'5',
	  msgToId:'ert45',
      msg: "Please change towel in my room",
      });

    newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
	
newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Hilton Bot',
      msgTo :'Renjith' ,
	  msgFromId:'7',
	  msgToId:'ert45',
      msg: "Sure.I have transfered your request to help desk.They will arive shortly.",
      });

    newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Renjith',
      msgTo :'Hilton Bot' ,
	  msgFromId:'8',
	  msgToId:'ert45',
      msg: "Thanks",
      });

    newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
newChat = new chatMongoHistoryModel({
      id: 12,
      msgFrom: 'Hilton Bot',
      msgTo :'Renjith' ,
	  msgFromId:'9',
	  msgToId:'ert45',
      msg: "Thanks Renjith It was nice talking to you.Have a nice day!!",
      });

 newChat.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Chat Is Not Saved.");
      } else {
        console.log("Chat Saved.");
        //console.log(result);
      }
    });
});
	
customerIssueModel.remove().exec(function(err, data) {

var issue = new customerIssueModel({
        issueId:12,
        issueDetails: "Towel change request ",
        customerName: "Renjith ",
        chatHistoryId:12
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
 issue = new customerIssueModel({
        issueId: 16,
        issueDetails: "Light not  working ",
        customerName: "John ",
        chatHistoryId: 1
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
	issue = new customerIssueModel({
        issueId: 17,
        issueDetails: "Window glass broken",
        customerName: "Adam",
        chatHistoryId: 134
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
		issue = new customerIssueModel({
        issueId: 18,
        issueDetails: "Window glass broken",
        customerName: "Job ",
        chatHistoryId: 1
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
		issue = new customerIssueModel({
        issueId: 19,
        issueDetails: "Window glass need replavement",
        customerName: "Emmanual",
        chatHistoryId: 1
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
	
	issue = new customerIssueModel({
        issueId: 19,
        issueDetails: "Need new glass in the room",
        customerName: "Jibson",
        chatHistoryId: 121
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
	
	issue = new customerIssueModel({
        issueId: 20,
        issueDetails: "Window glass need replavement",
        customerName: "Sam ",
        chatHistoryId: 122
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
		
	issue = new customerIssueModel({
        issueId: 21,
        issueDetails: "Replace comb",
        customerName: "Emma",
        chatHistoryId: 123
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
	issue = new customerIssueModel({
        issueId: 22,
        issueDetails: "Replace kettle",
        customerName: "Emili",
        chatHistoryId: 123
      });

    issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	
	issue = new customerIssueModel({
        issueId: 23,
        issueDetails: "Replace kettle",
        customerName: "Santoski",
        chatHistoryId: 124
      });

  issue.save(function(err, result) {
      if (err) {
        console.log("Error : " + err);
      } else if (result == undefined || result == null || result == "") {
        console.log("Issue Is Not Saved.");
      } else {
        console.log("Issue Saved.");
        //console.log(result);
      }
    });
	});
	
};

