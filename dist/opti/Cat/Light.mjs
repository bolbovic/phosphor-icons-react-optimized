var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as s } from "react";
import f from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var V = l, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ A.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M221.36,35.07a14,14,0,0,0-15.26,3l-.29.3L187.42,59.58a109.16,109.16,0,0,0-118.84,0L50.19,38.41l-.29-.3A14,14,0,0,0,26,48v88c0,51.83,45.76,94,102,94s102-42.17,102-94V48A14,14,0,0,0,221.36,35.07ZM218,136c0,43.38-37.16,79-84,81.81V194.48l14.24-14.24a6,6,0,0,0-8.48-8.49L128,183.51l-11.76-11.76a6,6,0,0,0-8.48,8.49L122,194.48v23.33C75.16,215,38,179.38,38,136V48a1.91,1.91,0,0,1,1.23-1.85,2.28,2.28,0,0,1,.82-.17,1.87,1.87,0,0,1,1.26.5l21.76,25a6,6,0,0,0,8.11.88A91.52,91.52,0,0,1,90,61.68V88a6,6,0,1,0,12,0V57.51a97.85,97.85,0,0,1,20-3.32V88a6,6,0,1,0,12,0V54.19a97.85,97.85,0,0,1,20,3.32V88a6,6,0,1,0,12,0V61.68a91.52,91.52,0,0,1,18.82,10.73,6,6,0,0,0,8.11-.88l21.76-25A2,2,0,0,1,218,48ZM94,140a10,10,0,1,1-10-10A10,10,0,0,1,94,140Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,140Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
