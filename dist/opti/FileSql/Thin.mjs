var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, c, e) => c in a ? s(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, h = (a, c) => {
  for (var e in c || (c = {}))
    o.call(c, e) && m(a, e, c[e]);
  if (r)
    for (var e of r(c))
      A.call(c, e) && m(a, e, c[e]);
  return a;
};
var i = (a, c) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      c.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const M = Z((t, e) => {
  var l = t, { children: a } = l, c = i(l, ["children"]);
  return /* @__PURE__ */ p.createElement(n, h({ ref: e }, c), a, /* @__PURE__ */ p.createElement("path", { d: "M48,116a4,4,0,0,0,4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88a4,4,0,0,0-1.17-2.83l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72A4,4,0,0,0,48,116ZM156,41.65,198.35,84H156ZM224,208a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V152a4,4,0,0,1,8,0v52h24A4,4,0,0,1,224,208ZM87.85,195.8a17,17,0,0,1-7.43,12.41C76,211.12,70.38,212,65.2,212A57.89,57.89,0,0,1,51,210.11a4,4,0,0,1,2.15-7.7c4.22,1.17,16.56,3.29,22.83-.88a8.94,8.94,0,0,0,3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94-9.68-2.8-21.72-6.28-20.14-18.77a16.66,16.66,0,0,1,7.22-12.13c4.56-3.07,11-4.36,19.1-3.82a61.11,61.11,0,0,1,10.47,1.61,4,4,0,0,1-2,7.74c-4.3-1.13-16.81-3.12-23.06,1.11a8.53,8.53,0,0,0-3.75,6.49c-.66,5.17,3.89,7,14.42,10.08C76.27,178,89.65,181.84,87.85,195.8ZM136,148c-15.44,0-28,14.35-28,32s12.56,32,28,32a25.56,25.56,0,0,0,16.31-6l4.86,4.85a4,4,0,0,0,5.65-5.66l-5.06-5.06A34.82,34.82,0,0,0,164,180C164,162.35,151.44,148,136,148Zm0,56c-11,0-20-10.77-20-24s9-24,20-24,20,10.77,20,24a27.16,27.16,0,0,1-4,14.36l-5.19-5.19a4,4,0,1,0-5.65,5.66l5.47,5.47A17.5,17.5,0,0,1,136,204Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
