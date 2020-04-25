/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j,
                    2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function (a) {
                var c = this._data,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this._doReset()
        },
        update: function (a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        _createHmacHelper: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a,
                    e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this._map;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length,
                s = this._map,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w <
                l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                } return p.create(t, r)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        _doReset: function () {
            this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this._hash.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f,
                    m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m,
                    E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        _doFinalize: function () {
            var b = this._data,
                n = b.words,
                a = 8 * this._nDataBytes,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a /
                4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this._process();
            b = this._hash;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b._hash = this._hash.clone();
            return b
        }
    });
    t.MD5 = v._createHelper(r);
    t.HmacMD5 = v._createHmacHelper(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d,
            l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this._ENC_XFORM_MODE, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this._DEC_XFORM_MODE, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this._xformMode = e;
                this._key = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this._doReset()
            },
            process: function (e) {
                this._append(e);
                return this._process()
            },
            finalize: function (e) {
                e && this._append(e);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        _doFinalize: function () {
            return this._process(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this._iv;
            c ? this._iv = u : c = this._prevBlock;
            for (var d = 0; d < b; d++) e[a + d] ^=
                c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this._cipher = e;
                this._iv = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this._cipher,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this._prevBlock = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this._cipher,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this,
                e, a, c);
            this._prevBlock = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
            else c = a.createDecryptor, this._minBufferSize = 1;
            this._mode = c.call(a,
                this, b && b.words)
        },
        _doProcessBlock: function (a, b) {
            this._mode.processBlock(a, b)
        },
        _doFinalize: function () {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else b = this._process(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            },
            toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684,
                    1701076831
                ]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            _parse: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d,
                    b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this._parse(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8,
            16, 32, 64, 128, 27, 54
        ],
        d = d.AES = p.extend({
            _doReset: function () {
                for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    } c = this._invKeySchedule = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
                    8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            _doCryptBlock: function (a, b, c, d, e, j, l, f) {
                for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t =
                    d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p._createHelper(d)
})();

/*! secrets.js-grempe 2019-09-07 */

! function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return t.secrets = e()
    }) : "object" == typeof exports ? module.exports = e(require("crypto")) : t.secrets = e(t.crypto)
}(this, function (n) {
    "use strict";
    var u, b, i, a, s;

    function h() {
        u = {
            bits: 8,
            radix: 16,
            minBits: 3,
            maxBits: 20,
            bytesPerChar: 2,
            maxBytesPerChar: 6,
            primitivePolynomials: [null, null, 1, 3, 3, 5, 3, 3, 29, 17, 9, 5, 83, 27, 43, 3, 45, 9, 39, 39, 9, 5, 3, 33, 27, 9, 71, 39, 9, 5, 83]
        }, b = {}, i = new Array(1024).join("0"), a = !0, s = ["nodeCryptoRandomBytes", "browserCryptoGetRandomValues", "testRandom"]
    }

    function f() {
        return !(!b || !b.rng || "function" != typeof b.rng)
    }

    function g(t, e) {
        var r;
        if (0 === e || 1 === e) return t;
        if (e && 1024 < e) throw new Error("Padding must be multiples of no larger than 1024 bits.");
        return e = e || b.bits, t && (r = t.length % e), r ? (i + t).slice(-(e - r + t.length)) : t
    }

    function c(t) {
        var e, r, n = "";
        for (r = t.length - 1; 0 <= r; r--) {
            if (e = parseInt(t[r], 16), isNaN(e)) throw new Error("Invalid hex character.");
            n = g(e.toString(2), 4) + n
        }
        return n
    }

    function m(t) {
        var e, r, n = "";
        for (r = (t = g(t, 4)).length; 4 <= r; r -= 4) {
            if (e = parseInt(t.slice(r - 4, r), 2), isNaN(e)) throw new Error("Invalid binary character.");
            n = e.toString(16) + n
        }
        return n
    }

    function o() {
        return !(!n || "object" != typeof n || "function" != typeof n.getRandomValues && "object" != typeof n.getRandomValues || "function" != typeof Uint32Array && "object" != typeof Uint32Array)
    }

    function l() {
        return "object" == typeof n && "function" == typeof n.randomBytes
    }

    function p(t) {
        function a(t, e, r, n) {
            var i, a = 0,
                o = "";
            for (e && (i = e.length - 1); a < i || o.length < t;) o += g(Math.abs(parseInt(e[a], r)).toString(2), n), a++;
            return ((o = o.substr(-t)).match(/0/g) || []).length === o.length ? null : o
        }

        function e(t) {
            var e, r = null;
            for (16, 4, e = Math.ceil(t / 8); null === r;) r = a(t, n.randomBytes(e).toString("hex"), 16, 4);
            return r
        }

        function r(t) {
            var e, r = null;
            for (10, 32, e = Math.ceil(t / 32); null === r;) r = a(t, n.getRandomValues(new Uint32Array(e)), 10, 32);
            return r
        }
        return t && "testRandom" === t ? (b.typeCSPRNG = t, function (t) {
            var e, r, n = null;
            r = Math.ceil(t / 32), e = new Uint32Array(r);
            for (var i = 0; i < e.length; i++) e[i] = 123456789;
            for (; null === n;) n = a(t, e, 10, 32);
            return n
        }) : t && "nodeCryptoRandomBytes" === t ? (b.typeCSPRNG = t, e) : t && "browserCryptoGetRandomValues" === t ? (b.typeCSPRNG = t, r) : l() ? (b.typeCSPRNG = "nodeCryptoRandomBytes", e) : o() ? (b.typeCSPRNG = "browserCryptoGetRandomValues", r) : void 0
    }

    function d(t, e) {
        var r, n = [];
        for (e && (t = g(t, e)), r = t.length; r > b.bits; r -= b.bits) n.push(parseInt(t.slice(r - b.bits, r), 2));
        return n.push(parseInt(t.slice(0, r), 2)), n
    }

    function w(t, e) {
        var r, n = b.logs[t],
            i = 0;
        for (r = e.length - 1; 0 <= r; r--) i = 0 !== i ? b.exps[(n + b.logs[i]) % b.maxShares] ^ e[r] : e[r];
        return i
    }

    function y(t, e, r) {
        var n, i, a, o, s = 0;
        for (a = 0, n = e.length; a < n; a++)
            if (r[a]) {
                for (i = b.logs[r[a]], o = 0; o < n; o++)
                    if (a !== o) {
                        if (t === e[o]) {
                            i = -1;
                            break
                        }
                        i = (i + b.logs[t ^ e[o]] - b.logs[e[a] ^ e[o]] + b.maxShares) % b.maxShares
                    } s = -1 === i ? s : s ^ b.exps[i]
            } return s
    }

    function x(t, e, r) {
        var n, i, a = [],
            o = [t];
        for (n = 1; n < r; n++) o[n] = parseInt(b.rng(b.bits), 2);
        for (i = e + (n = 1); n < i; n++) a[n - 1] = {
            x: n,
            y: w(n, o)
        };
        return a
    }

    function v(t, e, r) {
        var n, i, a, o;
        if (e = parseInt(e, b.radix), n = (t = parseInt(t, 10) || b.bits).toString(36).toUpperCase(), o = (a = Math.pow(2, t) - 1).toString(b.radix).length, i = g(e.toString(b.radix), o), "number" != typeof e || e % 1 != 0 || e < 1 || a < e) throw new Error("Share id must be an integer between 1 and " + a + ", inclusive.");
        return n + i + r
    }
    var t = {
        init: function (t, e) {
            var r, n, i = [],
                a = [],
                o = 1;
            if (h(), t && ("number" != typeof t || t % 1 != 0 || t < u.minBits || t > u.maxBits)) throw new Error("Number of bits must be an integer between " + u.minBits + " and " + u.maxBits + ", inclusive.");
            if (e && -1 === s.indexOf(e)) throw new Error("Invalid RNG type argument : '" + e + "'");
            for (b.radix = u.radix, b.bits = t || u.bits, b.size = Math.pow(2, b.bits), b.maxShares = b.size - 1, r = u.primitivePolynomials[b.bits], n = 0; n < b.size; n++) i[a[n] = o] = n, (o <<= 1) >= b.size && (o ^= r, o &= b.maxShares);
            if (b.logs = i, b.exps = a, e && this.setRNG(e), f() || this.setRNG(), !(f() && b.bits && b.size && b.maxShares && b.logs && b.exps && b.logs.length === b.size && b.exps.length === b.size)) throw new Error("Initialization failed.")
        },
        combine: function (t, e) {
            var r, n, i, a, o, s, h, u = "",
                f = [],
                l = [];
            for (e = e || 0, r = 0, i = t.length; r < i; r++) {
                if (s = this.extractShareComponents(t[r]), void 0 === o) o = s.bits;
                else if (s.bits !== o) throw new Error("Mismatched shares: Different bit settings.");
                if (b.bits !== o && this.init(o), -1 === f.indexOf(s.id))
                    for (f.push(s.id), n = 0, a = (h = d(c(s.data))).length; n < a; n++) l[n] = l[n] || [], l[n][f.length - 1] = h[n]
            }
            for (r = 0, i = l.length; r < i; r++) u = g(y(e, f, l[r]).toString(2)) + u;
            return m(1 <= e ? u : u.slice(u.indexOf("1") + 1))
        },
        getConfig: function () {
            var t = {};
            return t.radix = b.radix, t.bits = b.bits, t.maxShares = b.maxShares, t.hasCSPRNG = f(), t.typeCSPRNG = b.typeCSPRNG, t
        },
        extractShareComponents: function (t) {
            var e, r, n, i, a, o = {};
            if ((e = parseInt(t.substr(0, 1), 36)) && ("number" != typeof e || e % 1 != 0 || e < u.minBits || e > u.maxBits)) throw new Error("Invalid share : Number of bits must be an integer between " + u.minBits + " and " + u.maxBits + ", inclusive.");
            if (i = Math.pow(2, e) - 1, n = (Math.pow(2, e) - 1).toString(b.radix).length, (a = new RegExp("^([a-kA-K3-9]{1})([a-fA-F0-9]{" + n + "})([a-fA-F0-9]+)$").exec(t)) && (r = parseInt(a[2], b.radix)), "number" != typeof r || r % 1 != 0 || r < 1 || i < r) throw new Error("Invalid share : Share id must be an integer between 1 and " + b.maxShares + ", inclusive.");
            if (a && a[3]) return o.bits = e, o.id = r, o.data = a[3], o;
            throw new Error("The share data provided is invalid : " + t)
        },
        setRNG: function (t) {
            var e = "Random number generator is invalid ",
                r = " Supply an CSPRNG of the form function(bits){} that returns a string containing 'bits' number of random 1's and 0's.";
            if (t && "string" == typeof t && -1 === s.indexOf(t)) throw new Error("Invalid RNG type argument : '" + t + "'");
            if ((t = t || p()) && "string" == typeof t && (t = p(t)), a) {
                if (t && "function" != typeof t) throw new Error(e + "(Not a function)." + r);
                if (t && "string" != typeof t(b.bits)) throw new Error(e + "(Output is not a string)." + r);
                if (t && !parseInt(t(b.bits), 2)) throw new Error(e + "(Binary string output not parseable to an Integer)." + r);
                if (t && t(b.bits).length > b.bits) throw new Error(e + "(Output length is greater than config.bits)." + r);
                if (t && t(b.bits).length < b.bits) throw new Error(e + "(Output length is less than config.bits)." + r)
            }
            return b.rng = t, !0
        },
        str2hex: function (t, e) {
            var r, n, i, a, o, s, h = "";
            if ("string" != typeof t) throw new Error("Input must be a character string.");
            if ("number" != typeof (e = e || u.bytesPerChar) || e < 1 || e > u.maxBytesPerChar || e % 1 != 0) throw new Error("Bytes per character must be an integer between 1 and " + u.maxBytesPerChar + ", inclusive.");
            for (r = 2 * e, n = Math.pow(16, r) - 1, o = 0, s = t.length; o < s; o++) {
                if (a = t[o].charCodeAt(), isNaN(a)) throw new Error("Invalid character: " + t[o]);
                if (n < a) throw i = Math.ceil(Math.log(a + 1) / Math.log(256)), new Error("Invalid character code (" + a + "). Maximum allowable is 256^bytes-1 (" + n + "). To convert this character, use at least " + i + " bytes.");
                h = g(a.toString(16), r) + h
            }
            return h
        },
        hex2str: function (t, e) {
            var r, n, i, a = "";
            if ("string" != typeof t) throw new Error("Input must be a hexadecimal string.");
            if ("number" != typeof (e = e || u.bytesPerChar) || e % 1 != 0 || e < 1 || e > u.maxBytesPerChar) throw new Error("Bytes per character must be an integer between 1 and " + u.maxBytesPerChar + ", inclusive.");
            for (n = 0, i = (t = g(t, r = 2 * e)).length; n < i; n += r) a = String.fromCharCode(parseInt(t.slice(n, n + r), 16)) + a;
            return a
        },
        random: function (t) {
            if ("number" != typeof t || t % 1 != 0 || t < 2 || 65536 < t) throw new Error("Number of bits must be an Integer between 1 and 65536.");
            return m(b.rng(t))
        },
        share: function (t, e, r, n) {
            var i, a, o, s, h, u = new Array(e),
                f = new Array(e);
            if (n = n || 128, "string" != typeof t) throw new Error("Secret must be a string.");
            if ("number" != typeof e || e % 1 != 0 || e < 2) throw new Error("Number of shares must be an integer between 2 and 2^bits-1 (" + b.maxShares + "), inclusive.");
            if (e > b.maxShares) throw i = Math.ceil(Math.log(e + 1) / Math.LN2), new Error("Number of shares must be an integer between 2 and 2^bits-1 (" + b.maxShares + "), inclusive. To create " + e + " shares, use at least " + i + " bits.");
            if ("number" != typeof r || r % 1 != 0 || r < 2) throw new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 (" + b.maxShares + "), inclusive.");
            if (r > b.maxShares) throw i = Math.ceil(Math.log(r + 1) / Math.LN2), new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 (" + b.maxShares + "), inclusive.  To use a threshold of " + r + ", use at least " + i + " bits.");
            if (e < r) throw new Error("Threshold number of shares was " + r + " but must be less than or equal to the " + e + " shares specified as the total to generate.");
            if ("number" != typeof n || n % 1 != 0 || n < 0 || 1024 < n) throw new Error("Zero-pad length must be an integer between 0 and 1024 inclusive.");
            for (o = 0, h = (t = d(t = "1" + c(t), n)).length; o < h; o++)
                for (a = x(t[o], e, r), s = 0; s < e; s++) u[s] = u[s] || a[s].x.toString(b.radix), f[s] = g(a[s].y.toString(2)) + (f[s] || "");
            for (o = 0; o < e; o++) u[o] = v(b.bits, u[o], m(f[o]));
            return u
        },
        newShare: function (t, e) {
            var r;
            if (t && "string" == typeof t && (t = parseInt(t, b.radix)), r = t.toString(b.radix), t && r && e && e[0]) return v(this.extractShareComponents(e[0]).bits, r, this.combine(e, t));
            throw new Error("Invalid 'id' or 'shares' Array argument to newShare().")
        },
        _reset: h,
        _padLeft: g,
        _hex2bin: c,
        _bin2hex: m,
        _hasCryptoGetRandomValues: o,
        _hasCryptoRandomBytes: l,
        _getRNG: p,
        _isSetRNG: f,
        _splitNumStringToIntArray: d,
        _horner: w,
        _lagrange: y,
        _getShares: x,
        _constructPublicShareString: v
    };
    return t.init(), t
});

