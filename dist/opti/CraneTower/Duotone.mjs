var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && c.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as l } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = l((H, e) => {
  var r = H, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M104,88V216H48V40H80Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M240,80H108.94L87.16,36.42A8,8,0,0,0,80,32H48a8,8,0,0,0-8,8V80H24a8,8,0,0,0,0,16H40V208H24a8,8,0,0,0,0,16H128a8,8,0,0,0,0-16H112V96h96v88H192v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V96h16a8,8,0,0,0,0-16ZM56,48H75.06l16,32H56Zm0,160V160H96v48Zm40-64H56V96H96Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
