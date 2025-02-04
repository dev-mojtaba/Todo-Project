import sha1 from "./sha1";

function uuidv5(name: string, namespace: string): string {
  const value = namespace + name;
  const hash = sha1(value);
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    '5' + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16) + hash.substring(18, 20),
    hash.substring(20, 32)
  ].join('-');
}

export default uuidv5;
