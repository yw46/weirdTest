A simple function that prints x and y value and runs function "run()" every 1
  second. run() prints the current x and y value and runs the function
  "printTime()" after 3 seconds. x is incremented by 1 for each run(), and y
  is incremented by 1 for each printTime(). printTime() prints the value of x
  and y along with the current time.

Function:
  main(): calls the function run() every 1000 milliseconds

  run(): prints the current x and y value as well as the current time.
         Calls the function printTime() after 3000 milliseconds.
	 Increments x by 1

  printTime(): prints the current x and y value and the current time

  displayResult(): prints the results on the screen

  stop(): stops the run() function

  empty(): clears the results

  setStatus(s): @param s: current status (Start, Pause, Clear, Reset)
                set the current status

Variable:
  x: number of times that run() gets called

  y: number of times that printTime() gets called

  tmpstr: result string

  refreshIntervalId: return value of setInterval in run(), used in stop() to
                       stops the setInterval

Button:
  Run: starts the program

  Stop: stop the program. Note that multiple results may added to the screen
          after stopping the program as it stops the refreshIntervalId and
	  before the point it stops, printTime() has been called multiple
	  times. And for each time printTime() gets called it delays 3 seconds
	  to print the results

  Clear: clear the result area. Note that it does not stop the program

  Reset: resets the value of x and y to 0. Note that it does not stop the
           program, nor clear the result area

Usage:
  Hit "Run" button to start the program. Hit "Stop" button to stop the program
    at any time. Hit "Clear" to clear the result area and "Reset" to reset the
    value of x and y to zero.
  Note that user may also hit "Clear" or "Reset" when the program is running.
