import PocketBase from 'pocketbase';

export const pocketbase = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL || 'https://vc234894861160.coderick.net'
);

export function createLead(lead) {
  return pocketbase.collection('leads').create(lead);
}

export function signInAdmin(identity, password) {
  return pocketbase.collection('_superusers').authWithPassword(identity, password);
}

export function signOutAdmin() {
  pocketbase.authStore.clear();
}

export function isAdminAuthenticated() {
  return pocketbase.authStore.isValid && pocketbase.authStore.record?.collectionName === '_superusers';
}

export function listLeads() {
  return pocketbase.collection('leads').getFullList({ sort: '-created' });
}

export function subscribeToLeads(callback) {
  let active = true;
  pocketbase.collection('leads').subscribe('*', event => active && callback(event));
  return () => { active = false; pocketbase.collection('leads').unsubscribe('*'); };
}

export function updateLead(id, data) {
  return pocketbase.collection('leads').update(id, data);
}
