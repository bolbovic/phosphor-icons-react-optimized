import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTYwSDQwVjU2SDIxNlYyMDBaTTE3Niw4OGE0OCw0OCwwLDAsMS05NiwwLDgsOCwwLDAsMSwxNiwwLDMyLDMyLDAsMCwwLDY0LDAsOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTQsMTU2YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFY1NmE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0Wk0xNzIsODhhNDQsNDQsMCwwLDEtODgsMCw0LDQsMCwwLDEsOCwwLDM2LDM2LDAsMCwwLDcyLDAsNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJabTIsMTU4YTIsMiwwLDAsMS0yLDJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwyWk0xNzQsODhhNDYsNDYsMCwwLDEtOTIsMCw2LDYsMCwwLDEsMTIsMCwzNCwzNCwwLDAsMCw2OCwwLDYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZabS00LDE2MEg0NFY2MEgyMTJaTTc2LDg4YTEyLDEyLDAsMCwxLDI0LDAsMjgsMjgsMCwwLDAsNTYsMCwxMiwxMiwwLDAsMSwyNCwwQTUyLDUyLDAsMCwxLDc2LDg4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabS04OCw5NkE0OC4wNSw0OC4wNSwwLDAsMSw4MCw4OGE4LDgsMCwwLDEsMTYsMCwzMiwzMiwwLDAsMCw2NCwwLDgsOCwwLDAsMSwxNiwwQTQ4LjA1LDQ4LjA1LDAsMCwxLDEyOCwxMzZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMjAwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxNjBINDBWNTZIMjE2VjIwMFpNMTc2LDg4YTQ4LDQ4LDAsMCwxLTk2LDAsOCw4LDAsMCwxLDE2LDAsMzIsMzIsMCwwLDAsNjQsMCw4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as ShoppingBag };