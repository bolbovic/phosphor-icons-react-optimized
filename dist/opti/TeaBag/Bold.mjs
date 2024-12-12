var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,156a12,12,0,0,1-12-12V64A60,60,0,0,0,92,64v4H76.53a20.1,20.1,0,0,0-17.15,9.71L38.85,111.92A20.07,20.07,0,0,0,36,122.22V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V122.22a20,20,0,0,0-2.85-10.29L148.62,77.71A20.1,20.1,0,0,0,131.47,68H116V64a36,36,0,0,1,72,0v80a36,36,0,0,0,36,36,12,12,0,0,0,0-24ZM129.21,92,148,123.32V212H60V123.32L78.79,92H92v44a12,12,0,0,0,24,0V92Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
