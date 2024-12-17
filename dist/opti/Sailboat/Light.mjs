var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((m, e) => {
  var o = m, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M245.41,173.4A6,6,0,0,0,240,170H142V142h74a6,6,0,0,0,4.44-10L142,45.68V8a6,6,0,0,0-10.66-3.78l-104,128A6,6,0,0,0,32,142h98v28H16a6,6,0,0,0-4.69,9.75l29.6,37A14,14,0,0,0,51.84,222H204.16a14,14,0,0,0,10.93-5.25l29.6-37A6,6,0,0,0,245.41,173.4Zm-43-43.4H142V63.52ZM44.61,130,130,24.9V130Zm161.11,79.25a2,2,0,0,1-1.56.75H51.84a2,2,0,0,1-1.56-.75L28.48,182h199Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
