# Process:
1. Create an empty dir
2. Init **wxt** - `npx wxt@latest init`
3. Run `npm install`
4. Disable browser auto opening in 'wxt.config.ts' 
5. Manually load extension in browser - enable Dev Mode
6. For WXT related files, check documentation. Get the boilerplate from there (eg: in Content Scripts/index.jsx)
7. 


# Notes:
1. `index.jsx` in entrypoints is needed if you want to make changes to the webpage your extension interacts with.
2. To change CSS values of Original page components, we can inject CSS into DOCUMENT head as shown:
    1. ```get doc by id, text input, append to head```
3. 
   