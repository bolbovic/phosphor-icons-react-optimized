import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjQ4SDIwOFYyMDhaTTEyOCw2NGE2NCw2NCwwLDEsMCw2NCw2NEE2NC4wNyw2NC4wNywwLDAsMCwxMjgsNjRabTAsMTEyYTQ4LDQ4LDAsMSwxLDQ4LTQ4QTQ4LjA1LDQ4LjA1LDAsMCwxLDEyOCwxNzZaTTIwMCw2OGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwyMDAsNjhabS03NC4zNCw0OS42Ni0xNiwxNmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsMTYtMTZhOCw4LDAsMCwxLDExLjMyLDExLjMyWm0zMi0zLjMyYTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsMzItMzJBOCw4LDAsMCwxLDE1Ny42NiwxMTQuMzRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wk0xMjgsNjhhNjAsNjAsMCwxLDAsNjAsNjBBNjAuMDcsNjAuMDcsMCwwLDAsMTI4LDY4Wm0wLDExMmE1Miw1MiwwLDEsMSw1Mi01MkE1Mi4wNiw1Mi4wNiwwLDAsMSwxMjgsMTgwWk0xOTYsNjhhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTk2LDY4Wm0tNzMuMTcsNDYuODMtMTYsMTZhNCw0LDAsMCwxLTUuNjYtNS42NmwxNi0xNmE0LDQsMCwwLDEsNS42Niw1LjY2Wm0zMiwyLjM0YTQsNCwwLDAsMSwwLDUuNjZsLTMyLDMyYTQsNCwwLDAsMS01LjY2LTUuNjZsMzItMzJBNCw0LDAsMCwxLDE1NC44MywxMTcuMTdaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWk0xMjgsNjZhNjIsNjIsMCwxLDAsNjIsNjJBNjIuMDcsNjIuMDcsMCwwLDAsMTI4LDY2Wm0wLDExMmE1MCw1MCwwLDEsMSw1MC01MEE1MC4wNiw1MC4wNiwwLDAsMSwxMjgsMTc4Wk0xOTgsNjhhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTk4LDY4Wm0tNzMuNzYsNDguMjQtMTYsMTZhNiw2LDAsMCwxLTguNDgtOC40OGwxNi0xNmE2LDYsMCwwLDEsOC40OCw4LjQ4Wm0zMi0uNDhhNiw2LDAsMCwxLDAsOC40OGwtMzIsMzJhNiw2LDAsMCwxLTguNDgtOC40OGwzMi0zMkE2LDYsMCwwLDEsMTU2LjI0LDExNS43NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODBhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTYwLDgwWm03Mi0zNlYyMTJhMjAsMjAsMCwwLDEtMjAsMjBINDRhMjAsMjAsMCwwLDEtMjAtMjBWNDRBMjAsMjAsMCwwLDEsNDQsMjRIMjEyQTIwLDIwLDAsMCwxLDIzMiw0NFptLTI0LDRINDhWMjA4SDIwOFptLTY4LjQ5LDc1LjUxLTE2LDE2YTEyLDEyLDAsMCwwLDE3LDE3bDE2LTE2YTEyLDEyLDAsMSwwLTE3LTE3Wm0tMTUtMTZhMTIsMTIsMCwwLDAtMTcsMGwtOCw4YTEyLDEyLDAsMCwwLDE3LDE3bDgtOEExMiwxMiwwLDAsMCwxMjQuNDksMTA3LjUxWk0xMjgsMTk2YTY4LjA1LDY4LjA1LDAsMCwwLDY3LjE5LTc4LjUyLDEyLDEyLDAsMCwwLTIzLjcyLDMuNjksNDQsNDQsMCwxLDEtMzYuNjQtMzYuNjQsMTIsMTIsMCwwLDAsMy42OS0yMy43MkE2OCw2OCwwLDEsMCwxMjgsMTk2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCwxODRhNTYsNTYsMCwxLDEsNTYtNTZBNTYsNTYsMCwwLDEsMTI4LDE4NFpNMTg4LDgwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE4OCw4MFptLTU0LjM0LDI5LjY2LTMyLDMyYTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJabTMyLTMuMzJhOCw4LDAsMCwxLDAsMTEuMzJsLTQ4LDQ4YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw0OC00OEE4LDgsMCwwLDEsMTY1LjY2LDEwNi4zNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTI4YTU2LDU2LDAsMSwxLTU2LTU2QTU2LDU2LDAsMCwxLDE4NCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0wLDE3Nkg0OFY0OEgyMDhWMjA4Wk0xMjgsNjRhNjQsNjQsMCwxLDAsNjQsNjRBNjQuMDcsNjQuMDcsMCwwLDAsMTI4LDY0Wm0wLDExMmE0OCw0OCwwLDEsMSw0OC00OEE0OC4wNSw0OC4wNSwwLDAsMSwxMjgsMTc2Wk0yMDAsNjhhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMjAwLDY4Wm0tNzQuMzQsNDkuNjYtMTYsMTZhOCw4LDAsMCwxLTExLjMyLTExLjMybDE2LTE2YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlptMzItMy4zMmE4LDgsMCwwLDEsMCwxMS4zMmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLTExLjMybDMyLTMyQTgsOCwwLDAsMSwxNTcuNjYsMTE0LjM0WiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as WashingMachine };