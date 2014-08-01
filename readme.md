# About Flickrframe

The flickrframe project is an exploration into wrapping a Yahoo media experience up into a
turnkey hardware device.

# Goals

- No wires, just hang it on the wall
- No device configuration
- Low power - battery should last 1 year
- 300 dpi or better display

# Development

We are waiting on dev boards from eInk. In the meantime we have specs for controller chips.

Test harness consists of an Arduino running as an SPI slave and the Raspberry Pi running as SPI master.
We're using [pi-spi](https://www.npmjs.org/package/pi-spi) npm module to access the target over SPI in Nodejs.

# Loopback setup for testing

You will need an Arduino Uno and a Raspberry Pi
The SPI signals can be connected between the RPi GPIO ports and the Arduino using one of the following
schemes. Note that the SPI signals are available on both the ICSP connector and on the shield connectors
on the Arduino.

    Signal      RPi      Uno    ICSP
    ---------------------------------
    MOSI        10       11     4
    MISO        11       12     1
    CLK         12       13     3
    GND         13       GND    6  

# flashing SD card:

## Use the rasbian image 
http://www.raspberrypi.org/downloads/
$ wget http://downloads.raspberrypi.org/raspbian_latest

Double check your disk before flashing

    plantbroad-lm:flickrframe dnuke$ diskutil list
    /dev/disk0
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                        *251.0 GB   disk0
       1:                        EFI EFI                     209.7 MB   disk0s1
       2:          Apple_CoreStorage                         250.1 GB   disk0s2
       3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
    /dev/disk1
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:                  Apple_HFS plantbroad-lm          *249.8 GB   disk1


    $ sudo dd if=2014-06-20-wheezy-raspbian.img of=/dev/disk2 bs=1m


Prebuilt node for ARM:
https://gist.github.com/adammw/3245130

    $ wget https://gist.github.com/raw/3245130/v0.10.24/node-v0.10.24-linux-arm-armv6j-vfp-hard.tar.gz

http://raspberrypi.stackexchange.com/questions/1303/do-ssh-failing-in-initial-setup
    
    $ sudo rm /var/log/regen_ssh_keys.log


## Datasheets and resources
http://vdc.epson.com/
dnuke
tssy5fj5


# Beagle Bone

The board we are getting from eInk is the Boom Board, which is in a "cape" form factor for the Beagle Bone.

www.amazon.com/gp/product/B00K7EEX2U/

## nodejs for the Beagle Bone
http://www.armhf.com/node-js-for-the-beaglebone-black/

