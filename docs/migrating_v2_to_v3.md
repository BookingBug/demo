# BESPOKE PROJECTS

## Migrating SDK v2 to SDK v3

## These instructions assume that you have downloaded the demo project from here: https://github.com/BookingBug/demo ##

We want to keep all projects created for one client inside one repository.  

If you're migrating a bespoke 'studio' project, take  [studio](https://github.com/BookingBug/demo/tree/master/src/studio) as an example.
If you're migrating a bespoke 'public' project, take  [public](https://github.com/BookingBug/demo/tree/master/src/public) as an example.
Migration of any other type of project should be very similar to the above.

For the purpose of this example migration, let's assume we're migrating an existing 'studio' project: 
 - PROJECT_ROOT is a path leading to the existing v2 'studio' project we want to migrate
 - EXAMPLE_ROOT is a path leading to the example v3 '[studio](https://github.com/BookingBug/demo/tree/master/src/studio) we want to use as a guide for migration.
 
 
1) Move all existing directories from PROJECT_ROOT/src into new directory PROJECT_ROOT/src/studio.  

2) Move PROJECT_ROOT/config.json file into PROJECT_ROOT/src/studio.

3) Remove any files or directories available in PROJECT_ROOT directory except the following: 
    - PROJECT_ROOT/bower.json 
    - PROJECT_ROOT/src
    - PROJECT_ROOT/.git
    - PROJECT_ROOT/.youIDESpecific
    
4) Copy over the following files | directories into PROJECT_ROOT

    ```
    EXAMPLE_ROOT/helpers 
    EXAMPLE_ROOT/.gitignore
    EXAMPLE_ROOT/gulpfile.js
    EXAMPLE_ROOT/package.json
    EXAMPLE_ROOT/src/studio/version
    EXAMPLE_ROOT/src/studio/entry.js
    EXAMPLE_ROOT/src/studio/tests.webpack.js
    ```    
    
5) Create new directory PROJECT_ROOT/src/studio/sdk-templates

6) Make sure project has following 3 files:

    ```
    PROJECT_ROOT/src/studio/main.module.js
    PROJECT_ROOT/src/studio/main.config.js
    PROJECT_ROOT/src/studio/main.run.js
    ```    
    They may already exists inside PROJECT_ROOT/src/studio/javascripts directory so move them out of the javascripts directory and into PROJECT_ROOT/src/studio/. You can also delete the version folder inside the javascripts folder if it exists, as this was copied over from the EXAMPLE_ROOT in step 4.
            
    Make sure that main.config.js does't register anything on angular but instead exports one 'config' function. 
    Make sure that main.run.js does't register anything on angular but instead exports one 'run' function. 
    Make sure that main.module.js does nothing, but import 'run' and 'config' functions. and registers them on angular module.
    
7)  Please import SDK dependencies on top of main.module.js. 
    
    ```javascript
    import bbAdminDashboardModule from 'bookingbug-angular/src/admin-dashboard/main.module';
    import 'bookingbug-angular/src/admin-dashboard/globs_to_remove';//TODO remove once globs removed on sdk
    ```
    
8)  To load the rest of existing project add following line in the bottom of PROJECT_ROOT/src/studio/entry.js
    
    ```javascript
    import './javascripts/**/!(*.spec).js'; 
    ```
    

9)  If your project loads angular translations by configuring 'release.copy' section in PROJECT_ROOT/bower.json file, then replace with the following imports on top of PROJECT_ROOT/src/studio/main.module.js file:           
    
    ```javascript
    import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_en.js';
    import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_fr.js';
    ```
   
10) Move any 3rd party public dependencies from PROJECT_ROOT/bower.json into PROJECT_ROOT/package.json.

11) Remove PROJECT_ROOT/bower.json file.
   
12) Update PROJECT_ROOT/src/studio/config.json file so general.build section has new property named "distribution_chunk_hash" and set it to false.
   If you set this value to true, the release version of js and css assets will be suffixed with a hash like below. 
   
   ```
   booking-widget.172be67b98b57f00bc10a4e57922a6fa.css
   booking-widget.e89c62a40c05043e5d00.js
   booking-widget-dependencies.27e0322764ab1b2db361.js
   ```
   
   The decision to enable it must be taken carefully, as clients may refer directly to the standard asset path in other projects.
   
13) Update html files inside PROJECT_ROOT/src/studio/www so they refer to proper assets.
     
   ```html
   <script src="./<%= chunks.bookingWidgetDependenciesJS %>" type="text/javascript"></script>
   <script src="./<%= chunks.bookingWidgetJS %>" type="text/javascript"></script>
   <link href="./<%= chunks.bookingWidgetCSS %>" type="text/css" media="all" rel="stylesheet"/>
   ```
   
14) Install dev dependencies on SDK.
    Make sure you've checked out branch with webpack setup (w-3-tmpls) if it wasn't merged into master yet.
    
  ```
  npm run i
  ```     

15) Install dev dependencies on project which will point to local sdk. 

  ```
  npm run il
  ```    
     
16) In the command line go to PROJECT_ROOT of your bespoke project and run the gulp task which will relocate the project templates to new directory structure inside PROJECT_ROOT/src/studio/sdk-templates.  
  
  `gulp relocate-templates --root studio`
  
  '--root' flag tells gulp which project you want to run, from the projects available inside PROJECT_ROOT/src directory

17) Any HTML files left in PROJECT_ROOT/src/templates directory are your bespoke templates, so you have to find your bespoke code and import templates where required. Example below: 
    
    ```javascript
    import fileUploadTemplate from './file_upload.html';

    console.log(fileUploadTemplate.id); //will output path starting from PROJECT_ROOT/src/studio/ for example 'myComponent/file_upload.html'
    
    ```
18) Please move PROJECT_ROOT/src/studio/stylesheets/main.scss to PROJECT_ROOT/src/studio/main.scss.


19) Make sure your PROJECT_ROOT/src/studio/main.scss file has correct imports - compare with EXAMPLE_ROOT/src/studio/main.scss    

    In _bootstrap-variables.scss, make sure $icon-font-path is set to following if($bootstrap-sass-asset-helper, "~bootstrap-sass/assets/fonts/bootstrap/", "/fonts/") !default; 
    
    Make sure any images|fonts are not referred with leading slash in stylesheets ( example: url("../_images/BB_wait.gif" ) ).
    
    Please remove PROJECT_ROOT/src/studio/stylesheets/_adminlte.scc as it's moved into sdk level.     


20) Compare you PROJECT_ROOT/src/studio/main.module.js with EXAMPLE_ROOT/src/studio/main.module.js
    Make sure you have following imports after sdk imports:
    ```javascript
    import './sdk-templates/**/*.html';
    import '../../tmp/config.constants';

    import './main.scss';

    ``` 
    
21) Try to run project and fix any outstanding issues by following errors in console: 
   ```
    gulp --root studio
   ```    
    
22) All references to font-awesome (font-awesome.config.js, font-awesome.config.scss, font-awesome.scss) can deleted as it was moved to SDK.
