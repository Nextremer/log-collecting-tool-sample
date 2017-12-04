const mongoLog = require("instant-mongo-log");
const moment = require("moment");
const config = require("config");

const url = config.mongoURL;
if( !url ){
  return console.error("mongoURL must be specified in config file. check out config directory and files. ");
}

const fromDateString = config.fromDate || undefined;
const toDateString = config.toDate || undefined;
const outFileName = config.outFileName || "log.txt";

putLog(`STARTED`);

mongoLog.getLog( {
  fromDate: moment( fromDateString ).set("hour",0).set("minute", 0).set("secondes",0).toDate(),
  toDate: moment( toDateString ).set("hour",23).set("minute", 59).set("secondes",59).toDate(),
}, url ).then((results)=>{

  putLog(`found ${results.length} records.`);

  const formedResults = results.map( ( r )=>{
    const arr = [
      moment(r.timestamp).format("YYYY/MM/DD hh:mm:ss"),
      r.utterance,
      r.botMessage.value
    ];
    return arr.join("\t");
  }).join("\n");

  const fs=require("fs");
  putLog(`writing result to ${outFileName}.`);
  fs.writeFileSync( outFileName , formedResults);

  putLog( `DONE!! checkOut ${outFileName}.` );
  exit();
});

function exit(){
  setTimeout( process.exit, 1000);
}
function putLog( object ){
  console.log( "#######################" );
  console.log( object );
  console.log( "#######################" );
}

