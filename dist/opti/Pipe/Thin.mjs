var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    V.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import v, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((h, e) => {
  var r = h, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M232,108H204V52h28a4,4,0,0,0,0-8H203.3A12,12,0,0,0,192,36H176a12,12,0,0,0-11.3,8H144A100.11,100.11,0,0,0,44,144v20.7A12,12,0,0,0,36,176v16a12,12,0,0,0,8,11.3V232a4,4,0,0,0,8,0V204h56v28a4,4,0,0,0,8,0V203.3a12,12,0,0,0,8-11.3V176a12,12,0,0,0-8-11.3V144a28,28,0,0,1,28-28h20.7a12,12,0,0,0,11.3,8h16a12,12,0,0,0,11.3-8H232a4,4,0,0,0,0-8ZM116,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm-8-48v20H52V144a92.1,92.1,0,0,1,92-92h20v56H144A36,36,0,0,0,108,144Zm84-28H176a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h16a4,4,0,0,1,4,4v64A4,4,0,0,1,192,116Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
