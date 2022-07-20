# PromisesAndRecursionExample
Code for walkthrough on recursively calling promises

Goal of this code is:

- promise function should keep recursively calling itself until `currentIndex` exceeds a particular value (in this case, `5`)
- if the condition is met, resolve to the initial place that called it with the outcome `"everything is done: "` and the value of the `currentIndex`.