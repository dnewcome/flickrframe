# About Flickrframe

The flickrframe project is an exploration into wrapping a Yahoo media experience up into a
turnkey hardware device.

# Goals

No wires
No device configuration
Last 1 year unattended

# Development

We are waiting on dev boards from eInk. In the meantime we have specs for controller chips.

Test harness consists of an Arduino running as an SPI slave and the Raspberry Pi running as SPI master.
We're using pi-spi npm module to access the target over SPI in Nodejs.

