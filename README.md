# SIMPLE TICKET PORTAL
***
Developed by Aaryan D of MAHE (MIT) BLR
***

The main goal of this system is to allow for an easy ticket access, verification and seamless event management.

This system is forked from the Solstice ticketing system made for the solstice tech fest. The source code for the entire website is 
available [here](https://github.com/notarib-catcher/solstice-msite-sveltk/).
That system is much larger, more complex and designed for more involved deployment and maintenance.

The Solstice solution supports many more features than this one, however, this solution is easier to deploy, host and maintain, even for a
non-technical individual with the help of some basic tutorials and reading the documentation.

This particular repository/project only contains the frontend system responsible for showing ticket 
details to an attendee. The system also includes a Node.js based backend for handling ticket data and a mobile app for 
scanning and verifying tickets.

Authentication is handled by Google Social Sign-on and SvelteKitAuth.
***
## The system

This ticketing system has four components:

- A frontend viewer (this repository) that lets people log in with a google account and view their tickets (or "Passes" - terms used interchangeably)
- An [MPTICKET](https://github.com/notarib-catcher/quickTicketGen) server - this is a Node.js server that is responsible for signing and issuing tokens to verify ticket authenticity.
- A [quickTicketGen](https://github.com/notarib-catcher/quickTicketGen) station - which is intended to be used at a stall where tickets are being sold. People would pay (either in cash or digitally using UPI, etc.) after which the quickTicketGen system would make a QR code for them to scan. This code instantly adds a ticket to their account the moment it is scanned (if they are logged in - or else it redirects them to a login page).
- One or more [manipal-ticketing-system](https://github.com/notarib-catcher/manipal-ticketing-system) kiosks intended to scan and verify tickets on event day.
- The kiosks in the previous statement would need to be enrolled before they can scan tickets. Enrollment can be done preferably using a Retool or other Graphical interface, or directly by adding entries on MongoDB.
***

## Setup

Fill up the environment variables in example-env and rename it to .env

Some notable vars:

- EVENT_TYPE is the default pass type that will be issued IF no explicit type is supplied by the qr gen app.
- WEBPRIVKEY is a 1024+ bit RSA key used to sign requests for tickets to the ticketing server.
- Since env vars do not support newlines, but the JWT library needs the key to be formatted as if it came from a pem file, we replace all newline characters in the private key with `$n$`. The program will re-substitute them during execution to restore the standard key format.
- PRESHARED_SECRET is a secret shared between the billing kiosk and this server.
- TICKETING_HOST is the URL of the [MPTICKET](https://github.com/notarib-catcher/MPTICKET) instance that is running the ticket verification system. include only the protocol, hostname and port without any trailing `/`.
- LIMIT_PASSES_TO_ONE stops one Google account from having more than one pass associated with it.
***
