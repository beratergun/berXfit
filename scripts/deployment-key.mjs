export function normalizeDeploymentKey(value) {
  if (typeof value !== 'string') throw new Error('OpenSSH deploy key is required');
  const key = value.trim().replace(/\r\n?/g, '\n') + '\n';
  if (
    !key.startsWith('-----BEGIN OPENSSH PRIVATE KEY-----\n') ||
    !key.endsWith('\n-----END OPENSSH PRIVATE KEY-----\n')
  )
    throw new Error('Invalid OpenSSH deploy key format');
  return key;
}
