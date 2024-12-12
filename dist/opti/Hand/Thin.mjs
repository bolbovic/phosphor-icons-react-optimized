var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M188,52a23.9,23.9,0,0,0-16,6.13V44a24,24,0,0,0-47.93-1.8A24,24,0,0,0,84,60v78L72.75,119.94a24,24,0,0,0-41.62,23.92C64.44,214.12,82.17,236,128,236a84.09,84.09,0,0,0,84-84V76A24,24,0,0,0,188,52Zm16,100a76.09,76.09,0,0,1-76,76c-37.29,0-53.59-11.51-89.71-87.71l-.15-.29a16,16,0,0,1,27.71-16,.75.75,0,0,1,.07.12l18.68,30A4,4,0,0,0,92,152V60a16,16,0,0,1,32,0v60a4,4,0,0,0,8,0V44a16,16,0,0,1,32,0v76a4,4,0,0,0,8,0V76a16,16,0,0,1,32,0Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
