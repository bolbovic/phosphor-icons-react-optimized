var l = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var t = (a, H, e) => H in a ? l(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && t(a, e, H[e]);
  if (h)
    for (var e of h(H))
      v.call(H, e) && t(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var V in a)
    m.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && h)
    for (var V of h(a))
      H.indexOf(V) < 0 && v.call(a, V) && (e[V] = a[V]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((V, e) => {
  var r = V, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, o({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96ZM176,48h32V80H176ZM48,48H80V63.9a.51.51,0,0,0,0,.2V80H48ZM80,208H48V176H80v15.9a.51.51,0,0,0,0,.2V208Zm128,0H176V176h32Zm-24-48h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
