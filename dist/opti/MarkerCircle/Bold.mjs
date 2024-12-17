var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = v((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM108,140h40v16H108ZM92,203.92V180h72v23.9A84.33,84.33,0,0,1,92,203.92Zm96-17.13V176a20,20,0,0,0-16-19.6V136a20,20,0,0,0-14.85-19.31L147.27,81.2a20,20,0,0,0-38.54,0l-9.88,35.49A20,20,0,0,0,84,136v20.42A20,20,0,0,0,68,176v10.77a84,84,0,1,1,120,0Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
