var SPI = require('pi-spi');

var spi = SPI.initialize("/dev/spidev0.0"),
    test = Buffer("Hello, World!");

console.log(spi.clockSpeed());

// reads and writes simultaneously
spi.transfer(test, test.length, function (e,d) {
    if (e) console.error(e);
    else console.log("Got \""+d.toString()+"\" back.");

    if (test.toString() === d.toString()) {
        console.log('read correctly');
    } else {
        // NOTE: this will likely happen unless MISO is jumpered to MOSI
        console.warn('failed');
        process.exit(-2);
    }
});


