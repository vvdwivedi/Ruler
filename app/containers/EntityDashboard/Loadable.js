/**
 *
 * Asynchronously loads the component for EntityDashboard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
