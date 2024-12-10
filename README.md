# JavaScript NaN Comparison Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to comparing NaN values.  The issue stems from the fact that NaN is never equal to itself, regardless of whether you use the loose equality operator (==) or the strict equality operator (===).

## The Bug

The `bug.js` file contains a simple function, `foo`, that attempts to compare two numbers for equality.  However, when the inputs are both NaN, the function incorrectly returns `false`, even though the strict comparison `NaN === NaN` also evaluates to `false`.

## The Solution

The `bugSolution.js` file provides a corrected version of the function that uses the `Number.isNaN()` method to reliably check for NaN values. This method is specifically designed to handle NaN comparisons accurately.