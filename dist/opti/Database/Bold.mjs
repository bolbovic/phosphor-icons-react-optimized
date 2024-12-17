var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (a, c, e) => c in a ? i(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, d = (a, c) => {
  for (var e in c || (c = {}))
    m.call(c, e) && s(a, e, c[e]);
  if (o)
    for (var e of o(c))
      p.call(c, e) && s(a, e, c[e]);
  return a;
};
var l = (a, c) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      c.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as C } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = C((t, e) => {
  var r = t, { children: a } = r, c = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, c), a, /* @__PURE__ */ f.createElement("path", { d: "M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
