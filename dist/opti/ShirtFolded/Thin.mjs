var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && h(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const c = Z((m, e) => {
  var A = m, { children: a } = A, t = V(A, ["children"]);
  return /* @__PURE__ */ i.createElement(n, H({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M200,44H177.66L162.83,29.17h0A4,4,0,0,0,160,28H96a4,4,0,0,0-2.83,1.17h0L78.34,44H56A12,12,0,0,0,44,56V208a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM128,72.79,103.47,36h49.06Zm32.62-34.51L172,49.66V104a4,4,0,0,1-2.3,3.63,3.93,3.93,0,0,1-4.21-.51l-32.2-27.82ZM84,49.66,95.38,38.28l27.33,41-32.17,27.8A4,4,0,0,1,84,104ZM52,208V56a4,4,0,0,1,4-4H76v52a11.89,11.89,0,0,0,6.91,10.87A12.08,12.08,0,0,0,88,116a11.88,11.88,0,0,0,7.65-2.8l.06,0L124,88.74V212H56A4,4,0,0,1,52,208Zm152,0a4,4,0,0,1-4,4H132V88.74l28.32,24.46A11.9,11.9,0,0,0,168,116a12.08,12.08,0,0,0,5.12-1.15A11.89,11.89,0,0,0,180,104V52h20a4,4,0,0,1,4,4Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
