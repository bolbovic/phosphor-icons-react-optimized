var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    s.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    s.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as C } from "react";
import n from "../../lib/OptiBase.mjs";
const B = C((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, l({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M82.33,222.19a12,12,0,0,1-16.5,4.09C64,225.16,20,198,20,128S64,30.84,65.83,29.72A12,12,0,0,1,78.24,50.25C76.71,51.21,44,72.31,44,128s32.85,76.88,34.25,77.75A12,12,0,0,1,82.33,222.19ZM190.17,29.72a12,12,0,1,0-12.42,20.53C179.15,51.12,212,72.19,212,128s-32.85,76.88-34.17,77.7a12,12,0,1,0,12.34,20.58C192,225.16,236,198,236,128S192,30.84,190.17,29.72Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
