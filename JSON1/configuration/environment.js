import Constants from "expo-constants";

const MAP_ZIP_URL = 'https://us-central1-isla-mujeres-app.cloudfunctions.net/islaMujeresServiceApi/tiles';

const ENV = {
    dev: {
        islaMujeresServiceUrl: 'https://us-central1-isla-mujeres-app-dev.cloudfunctions.net/islaMujeresServiceApi',
        mapZipUrl: MAP_ZIP_URL,
        mapBackgroundUrl: 'https://firebasestorage.googleapis.com/v0/b/isla-mujeres-app.appspot.com/o/tiles%2Fbackground.png?alt=media&token=a95489c3-a409-4286-acdf-5b5504005fa9'
    },
    staging: {
        islaMujeresServiceUrl: 'https://us-central1-isla-mujeres-app.cloudfunctions.net/islaMujeresServiceApi',
        mapZipUrl: MAP_ZIP_URL,
        mapBackgroundUrl: 'https://firebasestorage.googleapis.com/v0/b/isla-mujeres-app.appspot.com/o/tiles%2Fbackground.png?alt=media&token=a95489c3-a409-4286-acdf-5b5504005fa9'
    },
    prod: {
        islaMujeresServiceUrl: 'https://us-central1-isla-mujeres-app.cloudfunctions.net/islaMujeresServiceApi',
        mapZipUrl: MAP_ZIP_URL,
        mapBackgroundUrl: 'https://firebasestorage.googleapis.com/v0/b/isla-mujeres-app.appspot.com/o/tiles%2Fbackground.png?alt=media&token=a95489c3-a409-4286-acdf-5b5504005fa9'
    }
};

const RELEASE_CHANNEL = {
    STAGING: 'staging',
    PRODUCTION: 'production'
};

const getEnvVars = (env = Constants.manifest.releaseChannel || RELEASE_CHANNEL.PRODUCTION) => {
    // What is __DEV__ ?
    // This variable is set to true when react-native is running in Dev mode.
    // __DEV__ is true when run locally, but false when published.
    if (__DEV__) {
        return ENV.dev;
    } else if (env === RELEASE_CHANNEL.STAGING) {
        return ENV.prod;
    } else if (env === RELEASE_CHANNEL.PRODUCTION) {
        return ENV.prod;
    } else {
        return ENV.prod
    }
};

export default getEnvVars;