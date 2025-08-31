## Using Type Definitions in Sandboxels Mods

**Note**:
* **This is not full typescript support. This only shows parameter hints and whats availble in the element definition**
* This .d.ts file is incomplete.
* Some functions arent done yet.
* Contributions and suggestions are welcome!

If you want to see function parameters and what’s available inside an element definition while modding Sandboxels, you can use the provided .d.ts file.

**Setup**:

* Put the sandboxels-functions.d.ts file in your mod folder.

* Add this line at the top of your mod file:

```js
/// <reference path="./sandboxels-functions.d.ts" />
```

**Result**:

* Functions will now show their parameters and expected values.

* You’ll also see the properties and options available in an element definition when you’re writing mods.
