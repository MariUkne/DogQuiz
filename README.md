## Bug Reporting

### Bug 1. Timer disappears at quiz start
- **Description**: The timer disappears when the user clicks the start button to begin the quiz.
- **Expected Result**: The timer should be visible and start counting down from 15 seconds when you clicked the start button.
- **Actual Result**: The timer is not visible.
- **Possible Solution**: Ensure that the `#controls`element is correctly visible and that the `startTimer()`function is executed when the quiz starts.
- **Status**: Fixed