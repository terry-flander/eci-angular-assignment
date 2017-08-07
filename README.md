# eci-angular-assignment
The application Calculator is designed to provide an extendable a browser-based arithmetic calculator.
 
This design implements a fully functional representation of a calculator keyboard. It provides the ability to string together operands, each of which acts on the previous result as shown in the display.

Tests are implemented with both direct calculations, i.e. 1 + 1 = 2, as well as simulating keyboard entry. There is also a separation of binary calculations requiring two Operands (+, -, *, /, x^y) and unary calculations requiring only one Operand (square root).  

### Install

1. Clone or Download from GitHub
2. Unpack in `<work-directory>`
3. `cd to <work-directory>/eci-angular-assignment
4. `npm install`
5. `ng build`

This will download all required libraries and build the web application.

### Run

To run the web app, start a server with:

`ng serve`

You will then be able to access the Calculator at:

`http://localhost:4200`

Then click on the "Calculator" button to see the Keypad

### Test
 
 To run the Karma tests included, execute:

`ng test`