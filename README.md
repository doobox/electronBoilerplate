# Electron Bolierplate (for Mac)

## With build in auto updater.


Clone and run for a quick way to get up and running.

## Use

To clone and run this repository you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:


**Clone this repository git clone**
```
https://github.com/doobox/electronBoilerplate
```
**Go into the repository**
```
cd electronBolierplate
```
**Install dependencies**
```
npm install
npm install electron-builder --save-dev
npm install electron-default-menu --save
npm install fs-jetpack" --save
npm install jquery --save
npm install local-storage --save
npm install semver --save
npm install axios --save
```

**Run the app**
```
npm start
```

## Remote JSON file for app updates
```
{
	"version": "1.0.1",
	"url": "https://www.yourdomain.co.uk/boilerplate-1.0.1-mac.zip",
	"name": "bolierplate",
	"notes": "release notes go here",
	"pub-date": "24-09-2017"
}
```

## License

CC0 1.0 (Public Domain)
