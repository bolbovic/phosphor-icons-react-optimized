var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
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
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M251,147.27l-48-112A12,12,0,0,0,192,28H64a12,12,0,0,0-11,7.27l-48,112A12,12,0,0,0,16,164H116v40H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V164h48v28a12,12,0,0,0,24,0V164h28a12,12,0,0,0,11-16.73ZM34.2,140,71.91,52H184.09l37.71,88Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
