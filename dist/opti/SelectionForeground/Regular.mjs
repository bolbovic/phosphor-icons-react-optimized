var p = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var v = (a, r, e) => r in a ? p(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, o = (a, r) => {
  for (var e in r || (r = {}))
    A.call(r, e) && v(a, e, r[e]);
  if (h)
    for (var e of h(r))
      V.call(r, e) && v(a, e, r[e]);
  return a;
};
var H = (a, r) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((t, e) => {
  var m = t, { children: a } = m, r = H(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, o({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M64,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,64,216Zm48-8H96a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM40,168a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v16A8,8,0,0,0,40,168Zm128,24a8,8,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Zm0-80a8,8,0,0,0,8-8V96a16,16,0,0,0-16-16h-8a8,8,0,0,0,0,16h8v8A8,8,0,0,0,168,112ZM56,80H48A16,16,0,0,0,32,96v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16ZM208,32H96A16,16,0,0,0,80,48V88a4.44,4.44,0,0,0,0,.55A8,8,0,0,0,88,96h24a8,8,0,0,0,0-16H96V48H208V160H176V144a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8h40a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
