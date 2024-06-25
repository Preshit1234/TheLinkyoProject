/**
     * Function to import all modules from a folder.
     * Copied from https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
     * 
     * Example:
     * const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));
     * 
     * @param {Object} r Imported data of modules from a certain directory
     * @returns {Object} Filtered data of modules
     */
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export {importAll};