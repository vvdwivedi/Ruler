/**
 *
 * Asynchronously loads the component for ViewRule
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
