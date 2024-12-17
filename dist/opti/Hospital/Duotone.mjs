var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      h.call(t, e) && r(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && V)
    for (var H of V(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import o, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((H, e) => {
  var m = H, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ o.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M160,48V216H128V160H80v56H48V48a8,8,0,0,1,8-8h96A8,8,0,0,1,160,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
