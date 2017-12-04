

# Sample of log collecting tool

## Requirements

* node.js v5.xx or later (using "const" keyword)
* 

## Get Started

Clone this repository, and change directory to project root.


#### install libs and setup

```
npm install
```

#### copy and edit configs

Copy `config/default.js` to `config/development.js`.
Edit `development.js` like following...

```
module.exports = {
  // your connection string to MongoDB
  // [caoution] Credential information included. do not expose,
  mongoURL: "", 
  // Specify the range of date to fetch logs of.
  // YYYYMMDD format. Default value is current date.
  fromDate: "20171130", 
  toDate: "", // YYYYMMDD 指定しない場合は当日日付
  // Specify output file name. default value is "log.txt".
  outFileName: "log.txt",
};
```

#### execute

```
npm start
```

then, checkout your output file (log.txt by default).







