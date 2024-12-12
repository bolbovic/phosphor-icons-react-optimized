var l = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var v = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && v(a, e, t[e]);
  if (h)
    for (var e of h(t))
      V.call(t, e) && v(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as p } from "react";
import f from "../../lib/OptiBase.mjs";
const s = p((r, e) => {
  var m = r, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M64,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,64,216Zm48-8H96a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM40,168a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v16A8,8,0,0,0,40,168Zm128,24a8,8,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Zm0-80a8,8,0,0,0,8-8V96a16,16,0,0,0-16-16h-8a8,8,0,0,0,0,16h8v8A8,8,0,0,0,168,112ZM56,80H48A16,16,0,0,0,32,96v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16ZM208,32H96A16,16,0,0,0,80,48V88a4.44,4.44,0,0,0,0,.55A8,8,0,0,0,88,96h24a8,8,0,0,0,0-16H96V48H208V160H176V144a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8h40a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" }));
});
s.displayName = "Regular";
export {
  s as Regular,
  s as default
};
