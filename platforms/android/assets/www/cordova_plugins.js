cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.Coordinates",
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.PositionError",
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.Position",
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.geolocation",
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "com.pbakondy.sim2.Sim",
        "file": "plugins/com.pbakondy.sim2/www/sim.js",
        "pluginId": "com.pbakondy.sim2",
        "clobbers": [
            "Sim"
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge",
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-background-mode": "0.7.2",
    "cordova-plugin-globalization": "1.11.0",
    "org.apache.cordova.geolocation": "0.3.6",
    "com.pbakondy.sim2": "1.0.16",
    "cordova-plugin-badge": "0.8.7"
};
// BOTTOM OF METADATA
});