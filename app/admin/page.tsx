import { notFound } from 'next/navigation';

/**
 * The default /admin route has been deprecated, blocked, and hardened against exposure.
 * Any attempt to access this URL triggers a clean 404 (Not Found) error response.
 */
export default function AdminRouteBlocked() {
  notFound();
}
