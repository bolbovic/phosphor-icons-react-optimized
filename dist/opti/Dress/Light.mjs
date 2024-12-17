var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var L = l, { children: a } = L, t = p(L, ["children"]);
  return /* @__PURE__ */ f.createElement(V, i({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M212.86,210.49a1.08,1.08,0,0,0-.08-.19l-45.94-97.86,21.08-33.1.09-.14a14,14,0,0,0,0-14.4c-.07-.12-.15-.24-.23-.36L166,33.33V8a6,6,0,0,0-12,0V33.12l-5.7,7.12a26,26,0,0,1-40.6,0L102,33.12V8A6,6,0,0,0,90,8V33.33L68.22,64.44c-.08.12-.16.24-.23.36a14,14,0,0,0,0,14.4l.09.14,21.08,33.1L43.22,210.3a1.08,1.08,0,0,0-.08.19A14,14,0,0,0,56,230H200a14,14,0,0,0,12.87-19.51ZM78.26,73a2,2,0,0,1-.05-1.89L96.32,45.23l2,2.51a38,38,0,0,0,59.34,0l2-2.51,18.11,25.86a2,2,0,0,1,0,1.89l-21,33H99.29ZM201.66,217.1a1.93,1.93,0,0,1-1.67.9H56a2,2,0,0,1-1.87-2.72L99.81,118h56.38l45.67,97.28A1.92,1.92,0,0,1,201.66,217.1Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
