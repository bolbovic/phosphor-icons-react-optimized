var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ n.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M218.27,201.83,156,98V36h12a4,4,0,0,0,0-8H88a4,4,0,0,0,0,8h12V98L37.73,201.83A12,12,0,0,0,48,220H208a12,12,0,0,0,10.29-18.17ZM107.43,101.2a4.07,4.07,0,0,0,.57-2.06V36h40V99.14a4.07,4.07,0,0,0,.57,2.06l41,68.33c-12.76,3.94-32.54,4.68-59.75-9.1-18-9.14-35-13.24-50.54-12.29ZM211.46,210a3.94,3.94,0,0,1-3.48,2H48a4,4,0,0,1-3.43-6.06l29.53-49.21c15.54-2.43,33.05,1.21,52.07,10.84C144.54,176.86,160,180,172.42,180a65,65,0,0,0,21.36-3.46l17.63,29.38A3.92,3.92,0,0,1,211.46,210Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
