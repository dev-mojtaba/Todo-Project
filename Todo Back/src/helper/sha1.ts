function sha1(input: string): string {
  const utf8 = new TextEncoder().encode(input);
  const data = new Uint8Array(utf8);
  const hashBuffer = new Uint32Array(5);
  hashBuffer[0] = 0x67452301;
  hashBuffer[1] = 0xefcdab89;
  hashBuffer[2] = 0x98badcfe;
  hashBuffer[3] = 0x10325476;
  hashBuffer[4] = 0xc3d2e1f0;

  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

  function leftRotate(value: number, shift: number): number {
    return (value << shift) | (value >>> (32 - shift));
  }

  function processChunk(chunk: Uint8Array) {
    const words = new Uint32Array(80);
    for (let i = 0; i < 16; i++) {
      words[i] = (chunk[i * 4] << 24) | (chunk[i * 4 + 1] << 16) | (chunk[i * 4 + 2] << 8) | chunk[i * 4 + 3];
    }
    for (let i = 16; i < 80; i++) {
      words[i] = leftRotate(words[i - 3] ^ words[i - 8] ^ words[i - 14] ^ words[i - 16], 1);
    }

    let [a, b, c, d, e] = hashBuffer;

    for (let i = 0; i < 80; i++) {
      const f = i < 20 ? (b & c) | (~b & d) : i < 40 ? b ^ c ^ d : i < 60 ? (b & c) | (b & d) | (c & d) : b ^ c ^ d;
      const temp = (leftRotate(a, 5) + f + e + K[Math.floor(i / 20)] + words[i]) >>> 0;
      e = d;
      d = c;
      c = leftRotate(b, 30);
      b = a;
      a = temp;
    }

    hashBuffer[0] = (hashBuffer[0] + a) >>> 0;
    hashBuffer[1] = (hashBuffer[1] + b) >>> 0;
    hashBuffer[2] = (hashBuffer[2] + c) >>> 0;
    hashBuffer[3] = (hashBuffer[3] + d) >>> 0;
    hashBuffer[4] = (hashBuffer[4] + e) >>> 0;
  }

  const chunkSize = 64;
  const totalBits = data.length * 8;
  const padding = new Uint8Array(((chunkSize - (data.length + 9) % chunkSize) % chunkSize) + 9);
  padding[0] = 0x80;
  padding.set(new Uint8Array(new Uint32Array([totalBits >>> 29, totalBits << 3]).buffer), padding.length - 8);

  for (let i = 0; i < data.length; i += chunkSize) {
    processChunk(data.subarray(i, i + chunkSize));
  }
  processChunk(padding);

  return Array.from(hashBuffer).map(h => h.toString(16).padStart(8, '0')).join('');
}

export default sha1;
