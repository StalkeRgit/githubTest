var path = require('path')
var express = require('express');
var app = express();
var mongoose = require('mongoose');
function logger(req, res , next){
    switch (req.url) {
        case '/':
            console.log("Hier gibt es einen Aufruf");
            break;
    
            case '/test':
            console.log("UHHH");
            break;
    
        default:
            console.log("not implemeted");
            break;
    }
    next();
}
mongoose.connect('mongodb://localhost:27017/bank');
var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));


db.on('open',function(){
    console.log("Connection successfull");
    var WalletSchema = mongoose.Schema({
        walletid: Number,
        owner: String,
        amount: Number,
    });

    // var wallet = mongoose.model('Bank',BookSchema,'Sparkasse');
    var Wallet = mongoose.model('wallet',WalletSchema,'Sparkasse');
    // var wallet = Wallet.findOne({walletid: 0 }, function (err,wallet) {
    //     if (err){
    //         return console.error(err);
    //     }else{
    //         console.log(wallet);
    //     }
        
    // });

        
    });


//     var wallets = [
//         {walletid: 0,owner: "Chris",account: 1000000000},
//         {walletid: 1,owner: "Abdul",account: 1000000000000000000},
//         {walletid: 2,owner: "Zardasht",account: 100000000},
//     ]
    
    
//     wallet.collection.insertMany(wallets, function (err, wallets) {
//         if (err) return console.error(error);
//         console.log(wallets.length + " saved to account.");
//       });
});
app.use(logger);
app.use(express.static(path.join(__dirname,"Public")));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname,"/Taschenrechner/projekt.html"));
    
});

app.get('/test',function(req, res){
    res.send("UHHHH");
});


var server=app.listen(8080);
console.log("Started server on Port 8080");