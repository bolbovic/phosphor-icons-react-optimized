var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var m = l, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236.24,140.24l-32,32a6,6,0,0,1-8.48-8.48L217.51,142h-95l-60,60H96a6,6,0,0,1,0,12H48a6,6,0,0,1-6-6V160a6,6,0,0,1,12,0v33.51l60-60v-95L92.24,60.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L126,38.49V130h91.51l-21.75-21.76a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,236.24,140.24Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
