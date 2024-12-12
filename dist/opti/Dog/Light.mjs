var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && h.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm65.77,10.72a14.24,14.24,0,0,1-5.89,1.29,13.72,13.72,0,0,1-9.88-4.23V184a38,38,0,0,1-38,38H80a38,38,0,0,1-38-38V137.78A13.76,13.76,0,0,1,32.11,142a14.23,14.23,0,0,1-5.88-1.29,13.82,13.82,0,0,1-8-15.34l16.42-88a14,14,0,0,1,17.16-11l.24.07L104.86,42h46.28l52.79-15.51.24-.07a14,14,0,0,1,17.16,11l16.42,88A13.81,13.81,0,0,1,229.77,140.72ZM93.88,51.27,48.84,38a1.9,1.9,0,0,0-1.49.27,2,2,0,0,0-.88,1.32l-16.42,88a2,2,0,0,0,3.54,1.61ZM202,184V122.43L149.06,54H106.94L54,122.43V184a26,26,0,0,0,26,26h42V194.48l-14.24-14.24a6,6,0,0,1,8.48-8.48L128,183.51l11.76-11.75a6,6,0,0,1,8.48,8.48L134,194.48V210h42A26,26,0,0,0,202,184ZM226,127.6l-16.42-88a2,2,0,0,0-.88-1.31,2.07,2.07,0,0,0-1.49-.27l-45,13.23,60.32,78A2,2,0,0,0,226,127.6Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
