var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-48-96v48a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h38.34L93.17,98.83a4,4,0,0,1,5.66-5.66L156,150.34V112a4,4,0,0,1,8,0Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
