## Michroma Blog
### Why this?
##### Michroma needed to add a new section to their official site (Wordpress). This Press section was to be built in React. For this reason, the Michroma code is composed between native HTML and a built version of this React site.

### Maintenance & Improvements
##### If Michroma Press section needs any change, the life cycle should be:
###### 1. Code in this Repo.
###### 2. Run ```npm run start``` to test the section
###### 3. Build the section by running ```npm run build```
###### 4. Once built, copy favicon.ico, logo192.png, logo512.png and manifest.json into `static` folder (static/favicon.ico).
###### 5. Finally, copy all content of the `build` folder into "palta.tech" project, inside the following folder: `server/pages/michroma/press`
