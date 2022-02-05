// const os=require('os');  
// console.log("os.freemem(): \n",os.freemem());  
// console.log("os.homedir(): \n",os.homedir());  
// console.log("os.hostname(): \n",os.hostname());  
// console.log("os.endianness(): \n",os.endianness());  
// console.log("os.loadavg(): \n",os.loadavg());  
// console.log("os.platform(): \n",os.platform());  
// console.log("os.release(): \n",os.release());  
// console.log("os.tmpdir(): \n",os.tmpdir());  
// console.log("os.totalmem(): \n",os.totalmem());  
// console.log("os.type(): \n",os.type());  
// console.log("os.uptime(): \n",os.uptime());  

// Time
// setInterval(function () {
//     console.log("setInterval: Hey! 1 millisecond completed!..");
// }, 1000);  

// var i = 0;
// console.log(i);
// setInterval(function () {
//     i++;
//     console.log(i);
// }, 1000);  

// setTimeout(function () {
//     console.log("setTimeout: Hey! 1000 millisecond completed!..");
// }, 1000);  

// Throws with a ReferenceError because b is undefined  
// try {
//     const a = 1;
//     const c = a + b;
// } catch (err) {
//     console.log(err);
// }  

const dns = require('dns');  
dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  