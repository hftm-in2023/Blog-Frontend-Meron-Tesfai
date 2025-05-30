# Projekt setup

## Install Angular

1. Open a terminal
2. **npm install -g @angular/cli**

## Create a new Angular-Projekt

1. Open the folder that you want to use as your projekt folder.
2. Copy the folder path
3. Open a terminal.
4. Change to your folder with **"cd YOUR-FOLDER"**
5. Create the new project with **"ng new YOUR-PROJECT-NAME"**.
6. Select **SCSS**.
7. Disable **server-side rendering**.
8. Wait until your project is created, then open it in your IDE.

## Set up a Github repository

1. Go to Github.com.
2. Log in to your account.
3. Create a new repository. make sure it is public and that the name is in the format "projectname-firstname-lastname".
4. Copy the example code from your repository.
5. Execute the code in your project terminal in your IDE.

## Set up code qualitytools

### Add ESLint to your project

- ESLint is a tool that helps improve code quality by identifying potential issues.

#### How to install ESLint

- **"ng add @angular-eslint/schematics"**

### Add Prettier for Codeformatting

- Prettier is a code formatter that helps you maintain a consistent coding style.

#### How to install Prettier

1. Install Prettier with "npm install prettier --save-dev".
2. Add the following script to your package.json.
   **"scripts": {
   "format": "npx prettier --write ./src/app/\*"
   }**

### Adding Environments in your Angular-Project

- Environments are useful for adding different configurations for your production or IDE.

#### How to install Environments in Angular

- Generate environments configurations with **"ng generate environments"**.

### Set up Commitlint

- Commitlint is responsible for ensuring that commits adhere to standard conmit style.

#### How to install Commitlint

1. Install Commitlint with **"npm install @commitlint/cli @commitlint/config-conventional"**.
2. Add the following configuration to your package.json.
   **"commitlint": {
   "extends": [
   "@commitlint/config-conventional"
   ]
   }**

### Set up lint-staged

- Lint-staged allows you to forrmat only the code that has changed, so you can commit your Code much faster.

#### How to install lint-staged

1. Install lint-staged with **"npm install --save-dev lint-staged"**.
2. Add the following Code to your package.json.
   **"lint-staged": {
   "_.{ts,js,html}": "eslint --cache --fix",
   "_.{ts,js,html,css,scss,less,md}": "prettier --write"
   }**

### Set up Husky

- Husky helps you to execute code formatting and ESLint before you push it to GitHub.

#### Adding Husky to your Project

1. Install Husky with **"npm install --save-dev husky"**.
2. Initialize Husky with **"npx husky init"**.
3. Add the following script to your package.json.
   **"scripts": {
   "prepare": "husky"
   }**
4. Excute the prepare-script with **"npm run prepare"**.
5. Add the commit-hook for commitlint.

   - Create "commit-msg" file in the husky folder (**".husky/commit-msg"**).
   - Add the following code to your commit-msg file.
   - **#!/usr/bin/env sh
     . "$(dirname -- "$0")/\_/husky.sh"
     npx --no-install commitlint --edit "$1"**

6. Add Pre-Commit-Hook for lint-staged.
   - Add a pre-commit file to the husky folder (**" .husky/pre-commit"**)
   - Add the following code to your _pre-commit_ file.
   - **#!/usr/bin/env sh
     . "$(dirname -- "$0")/\_/husky.sh"
     npx --no-install lint-staged**

## Deploy your application to Azure

- Make sure you have the right subscription or, in my case a student account.

1. Add the azure extension to your Visual Studio Code
2. Go to the azure extension
3. Select the right subscription
4. Add a **Static Web App**
5. Select the region. In my case, it is **West Europe**.
6. Enter a name for your static web app.
7. Select **Angular**.
8. Enter **"/"** for the directory.
9. Delete the text and leave it **Blank**.
10. Enter **dist/yout-app-name/browser**.

## Set up CI/CD-Pipeline

### Set up Workflow permissions

1. Go to your repository
2. Go to settings
3. Click on Actions --> General
4. Scroll to workflow permissions
5. Enable Read and write permissions
6. Click on **Allow GitHub Actions to crate and approve pull requests** and save the changes.

### Enable Dependebot

1. Go to settings
2. click on **Advanced Security**
3. Enable Dependabot alerts
4. Enable Dependabot security updates

### Enable Dependabot version updates

1. Click on Enable
2. Configure the dependabot.yml
3. To configure dependabot.yml, refer to my example in my GitHub repository.
4. Commit the changes.

### Add Node.js Workflow

1. Go to Actions.
2. Click on **New workflow**.
3. Search for Angular and choose Node.js.
4. Click configure.
5. Rename the file to **"build.yml"**
6. Cofigure the file like my build.yml file.

#### Add the riquired Scripts

1. Add ng test like this **"test": "ng test"**.
2. Add test:ci script like this **"test:ci": "ng test --no-watch --no-progress --browsers=ChromeHeadless"**
3. Commit your changes and push it to your repository.

## Set up ng-update

1. Go to the Github Marketplace and search for **"ng update"**.
2. Go to the Usage section and copy the contents.
3. Open your repository and go to the **.github/workflows** folder.
4. Click _Add file_ and choose **Create new file**.
5. Name your file **"ng-update.yml"**.
6. Paste the content.
7. Set up the cron job like my ng-update.yml file.
8. **Make sure you are runnig v1 and not the master**
9. Commit the changes and add a **new branch**.
10. After the tests run successfully, merge the pull request.
11. Delete the branch.
