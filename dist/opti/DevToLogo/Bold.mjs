var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M232,52H24A20,20,0,0,0,4,72V184a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V72A20,20,0,0,0,232,52Zm-4,128H28V76H228ZM108,156V100a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24h-8v4a12,12,0,0,1,0,24v4h8a12,12,0,0,1,0,24H120A12,12,0,0,1,108,156Zm52.46-52.7a12,12,0,1,1,23.08-6.6L188,112.32l4.46-15.62a12,12,0,0,1,23.08,6.6l-16,56a12,12,0,0,1-23.08,0ZM52,168H64a36,36,0,0,0,36-36v-8A36,36,0,0,0,64,88H52a12,12,0,0,0-12,12v56A12,12,0,0,0,52,168Zm12-56a12,12,0,0,1,12,12v8a12,12,0,0,1-12,12Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
