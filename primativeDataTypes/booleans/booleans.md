# What is a Boolean?

In JavaScript, a **boolean** is a primitive data type that represents **true** or **false** values. Booleans are often used in conditional statements and logical operations.

## Boolean Methods and Properties

### Properties on the `Boolean` Object
Booleans **do not have unique properties**, but they are often used in control flow.

### Methods on the `Boolean` Object
- `.toString()` – Converts a boolean to a string (`"true"` or `"false"`).
- `Boolean(value)` – Converts a value to a boolean (`true` or `false`).

### Truthy and Falsy Values
Some values in JavaScript are treated as **truthy** or **falsy** when used in a boolean context.

#### Falsy Values
The following values evaluate to `false` in a boolean context:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

#### Truthy Values
Everything else evaluates to `true`, including:
- `"Hello"`
- `42`
- `[]` (empty array)
- `{}` (empty object)
- `function() {}` (empty function)

### Example
Let's look at some examples in `./primitiveDataTypes/booleans/booleans.js`.