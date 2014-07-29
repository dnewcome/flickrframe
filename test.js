var SPI = require('pi-spi');

var spi = SPI.initialize("/dev/spidev0.0"),
    test = Buffer("Hello, this is flickrframe!!!!");

// set to 1MHz, data loss occurs at 4MHz
spi.clockSpeed(1000000);

// reads and writes simultaneously
spi.transfer(test, test.length, function (e,d) {
    if (e) console.error(e);
    else console.log("Got \""+d.toString()+"\" back.");

    if (test.toString() === d.toString()) {
        console.log('read correctly');
    } else {
        console.warn('failed');
        process.exit(-2);
    }
});

