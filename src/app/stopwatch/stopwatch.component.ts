// Import CommonModule for common Angular directives
import { CommonModule } from '@angular/common';
// Import Component decorator from Angular core
import { Component } from '@angular/core';

/**
 * StopwatchComponent provides a simple stopwatch functionality.
 * - Displays elapsed time
 * - Allows start, stop, and reset actions
 */
@Component({
  selector: 'app-stopwatch', // Component selector for use in templates
  imports: [CommonModule], // Import CommonModule for template usage
  templateUrl: './stopwatch.component.html', // HTML template for the component
  styleUrl: './stopwatch.component.scss', // SCSS styles for the component
})
export class StopwatchComponent {
  /**
   * Tracks the elapsed time in seconds (with 0.1s precision)
   */
  elapsedTime = 0;
  /**
   * Indicates whether the stopwatch is currently running
   */
  isRunning = false;
  /**
   * Reference to the interval timer (setInterval)
   */
  intervalRef: any;

  /**
   * Toggles the stopwatch between running and stopped states
   */
  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  /**
   * Starts the stopwatch and updates elapsedTime every 0.1 seconds
   */
  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1; // Increment elapsed time by 0.1 seconds
    }, 100); // Interval set to 100ms
    console.log('Stopwatch started.');
  }

  /**
   * Stops the stopwatch and clears the interval timer
   */
  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped.');
  }

  /**
   * Resets the stopwatch to its initial state
   */
  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log('Stopwatch reset.');
  }
}
