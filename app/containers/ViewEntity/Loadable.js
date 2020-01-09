/**
 *
 * Asynchronously loads the component for ViewEntity
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
