
import CONSTANTS from './vtex-autocomplete.constants.js';
import vtexCatalogMethods from './vtex-autocomplete.methods.js';

/**
 * Create a VtexAutocomplete class
 * Vtex utilities methods
 */
class VtexAutocomplete {
    constructor(vtexUtils, vtexCatalog, catalogCache = false) {
        /**
         * Version
         * @type {String}
         */
        this.version = '0.0.1';

        /**
         * Package name
         * @type {String}
         */
        this.name = '@VtexAutocomplete';

        // Validate Vtex Utils
        if ( vtexUtils === undefined ) {
            throw new TypeError(CONSTANTS.MESSAGES.vtexUtils);
        }

        if ( vtexUtils.name !== '@VtexUtils' ) {
            throw new TypeError(CONSTANTS.MESSAGES.vtexUtils);
        }

        if ( vtexUtils.version < CONSTANTS.MESSAGES.vtexUtilsVersion ) {
            throw new Error(CONSTANTS.MESSAGES.vtexUtilsVersionMessage);
        }

        /**
         * Global Helpers instance
         * @type {GlobalHelpers}
         */
        this.globalHelpers = vtexUtils.globalHelpers;

        /**
         * Vtex Helpers instance
         * @type {VtexHelpers}
         */
        this.vtexHelpers = vtexUtils.vtexHelpers;

        /**
         * Vtex Catalog instance
         * @type {VtexCatalog}
         */
        this.vtexCatalog = new VtexCatalog(vtexUtils, catalogCache);

        /**
         * Extend public methods
         * @type {Method}
         */
        this.globalHelpers.extend(VtexAutocomplete.prototype, vtexCatalogMethods);
    }
}

export default VtexAutocomplete;
