var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var A = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && A(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && A(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, r = h(o, ["children"]);
  return /* @__PURE__ */ l.createElement(i, Z({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
