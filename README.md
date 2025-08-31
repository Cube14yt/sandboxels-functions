# Using Type Definitions in Sandboxels Mods

**Disclaimer:**  
This is **not full TypeScript support**.  
The `.d.ts` file only provides **parameter hints, autocomplete, and available properties** in element definitions.  
It will not catch all type errors or enforce strict type checking.

---

## Features

- See function parameters while writing mods  
- Autocomplete for properties inside element definitions  
- Helps reduce constant lookups and guesswork  

---

## Notes

- The `.d.ts` file is **incomplete** (work in progress)  
- Some functions and properties are missing  
- Contributions and suggestions are welcome!  

---

## Setup

1. Download or copy the `sandboxels-types.d.ts` file into your **mod folder**.  

2. At the very top of your mod file, add:

```js
/// <reference path="./sandboxels-types.d.ts" />
```

3. Open your mod in VS Code (or another editor with IntelliSense).  
   You should now see parameter hints and autocomplete suggestions while coding.  

---

## Example Result

With the type definitions in place, you’ll get:

- Function hints with parameter names and types  
- Autocomplete suggestions for element definition options  

---

## Contributing

Want to help improve this? You can:  
- Add missing functions or properties  
- Improve type accuracy  
- Suggest better organization  

Pull requests and issues are always appreciated!  
