App.info({
  id: 'com.pharmagest.marqueverte.chapeau',
  name: 'Chapeau Marque Verte',
  description: 'Les services Marque Verte',
  author: 'Pharmagest Interactive',
  email: 'steeve.fong@pharmagest.mu',
  website: 'http://www.marqueverte.com',
  version: '0.0.1'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/icon-72x72.png',
  'iphone_2x': 'resources/icons/icon-144x144.png',
  'ipad': 'resources/icons/icon-72x72.png',
  'ipad_2x': 'resources/icons/icon-144x144.png',

  // Android
  'android_ldpi': 'resources/icons/icon-29x29.png',
  'android_mdpi': 'resources/icons/icon-58x58.png',
  'android_hdpi': 'resources/icons/icon-72x72.png',
  'android_xhdpi': 'resources/icons/icon-100x100.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/splash-320x480.png',
  //'iphone_2x': 'resources/splash/splash-320x480@2x.png',
  'iphone5': 'resources/splash/splash-320x568h@2x.png',
  // Android
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

App.accessRule('*');

