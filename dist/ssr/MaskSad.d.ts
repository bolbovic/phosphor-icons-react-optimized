import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTguNjYsMTg4LjQzYTgsOCwwLDAsMS0xMS4wOSwyLjIzQzE0MS4wNywxODYuMzQsMTM2LDE4NCwxMjgsMTg0cy0xMy4wNywyLjM0LTE5LjU3LDYuNjZhOCw4LDAsMCwxLTguODYtMTMuMzJDMTA4LDE3MS43MywxMTYuMDYsMTY4LDEyOCwxNjhzMjAsMy43MywyOC40Myw5LjM0QTgsOCwwLDAsMSwxNTguNjYsMTg4LjQzWk0yMjQsNDh2NTUuNzdjMCwzNS44NC05LjY1LDY5LjY1LTI3LjE4LDk1LjE4LTE4LjE2LDI2LjQ2LTQyLjYsNDEtNjguODIsNDFzLTUwLjY2LTE0LjU3LTY4LjgyLTQxQzQxLjY1LDE3My40NCwzMiwxMzkuNjMsMzIsMTAzLjc5VjQ4QTE2LDE2LDAsMCwxLDUzLjc5LDMzLjA5QzY3Ljg0LDM4LjU1LDk2LjE4LDQ3LjcxLDEyOCw0Ny43MXM2MC4xNS05LjE2LDc0LjIxLTE0LjYyQTE2LDE2LDAsMCwxLDIyNCw0OFptLTE2LDB2MGMtMTUuMSw1Ljg5LTQ1LjU3LDE1LjczLTgwLDE1LjczUzYzLjEsNTMuODcsNDgsNDh2NTUuNzljMCwzMi42NCw4LjY2LDYzLjIzLDI0LjM3LDg2LjEzQzg3LjQ2LDIxMS45LDEwNy4yMSwyMjQsMTI4LDIyNHM0MC41NC0xMi4xLDU1LjYzLTM0LjA4QzE5OS4zNCwxNjcsMjA4LDEzNi40MywyMDgsMTAzLjc5Wm0tMTguNjYsNjZhOCw4LDAsMCwwLTExLjMuNjJjLTIuNjgsMy04Ljg1LDUuMzQtMTQsNS4zNHMtMTEuMzYtMi4zNS0xNC01LjM0QTgsOCwwLDAsMCwxMzgsMTI1LjMzYzUuNzEsNi4zOCwxNi4xNCwxMC42NywyNiwxMC42N3MyMC4yNS00LjI5LDI2LTEwLjY3QTgsOCwwLDAsMCwxODkuMzQsMTE0Wk0xMTgsMTI1LjMzQTgsOCwwLDAsMCwxMDYsMTE0LjY2Yy0yLjY4LDMtOC44NSw1LjM0LTE0LDUuMzRzLTExLjM2LTIuMzUtMTQtNS4zNEE4LDgsMCwwLDAsNjYsMTI1LjMzQzcxLjc1LDEzMS43MSw4Mi4xOCwxMzYsOTIsMTM2UzExMi4yNSwxMzEuNzEsMTE4LDEyNS4zM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTUuMzMsMTg2LjIxYTQsNCwwLDAsMS01LjU0LDEuMTJDMTQyLjgsMTgyLjY5LDEzNywxODAsMTI4LDE4MHMtMTQuOCwyLjY5LTIxLjc5LDcuMzNhNCw0LDAsMSwxLTQuNDItNi42NmM3LjgyLTUuMjEsMTUuMjgtOC42NywyNi4yMS04LjY3czE4LjM5LDMuNDYsMjYuMjEsOC42N0E0LDQsMCwwLDEsMTU1LjMzLDE4Ni4yMVpNMTgxLDExNy4zM2MtMy40LDMuOC0xMC43Miw2LjY3LTE3LDYuNjdzLTEzLjYyLTIuODctMTctNi42N2E0LDQsMCwwLDAtNiw1LjMzYzQuOTIsNS41LDE0LjM3LDkuMzQsMjMsOS4zNHMxOC4wNi0zLjg0LDIzLTkuMzNhNCw0LDAsMSwwLTYtNS4zNFpNMjIwLDQ4djU1Ljc4YzAsMzUtOS40LDY4LTI2LjQ4LDkyLjkyQzE3Ni4xMywyMjIuMDUsMTUyLjg2LDIzNiwxMjgsMjM2cy00OC4xMy0xMy45NS02NS41Mi0zOS4yOUM0NS40LDE3MS44MywzNiwxMzguODMsMzYsMTAzLjc5VjQ4YTEyLDEyLDAsMCwxLDE2LjM0LTExLjJDNjYuNjYsNDIuMzgsOTUuNTMsNTEuNywxMjgsNTEuN3M2MS4zNC05LjMyLDc1LjY2LTE0Ljg4QTEyLDEyLDAsMCwxLDIyMCw0OFptLTgsMGE0LDQsMCwwLDAtNS40NC0zLjc0QzE5MS43Miw1MCwxNjEuNzcsNTkuNywxMjgsNTkuN1M2NC4yOCw1MCw0OS40NCw0NC4yN0E0LjE0LDQuMTQsMCwwLDAsNDgsNDRhMy44NywzLjg3LDAsMCwwLTIuMjMuN0E0LDQsMCwwLDAsNDQsNDh2NTUuNzdDNDQsMTcyLjI4LDgxLjY4LDIyOCwxMjgsMjI4czg0LTU1LjcyLDg0LTEyNC4yMVptLTk3LDc0LjY2YTQsNCwwLDEsMC02LTUuMzRjLTMuNCwzLjgtMTAuNzIsNi42Ny0xNyw2LjY3cy0xMy42Mi0yLjg3LTE3LTYuNjdhNCw0LDAsMCwwLTYsNS4zM2M0LjkyLDUuNSwxNC4zNyw5LjM0LDIzLDkuMzRTMTEwLjA2LDEyOC4xNiwxMTUsMTIyLjY3WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTcsMTg3LjMyYTYsNiwwLDAsMS04LjMyLDEuNjdjLTYuNjctNC40My0xMi4xOS03LTIwLjY4LTdzLTE0LDIuNTYtMjAuNjgsN2E2LDYsMCwxLDEtNi42NC0xMGM4LjEzLTUuNCwxNS44OC05LDI3LjMyLTlzMTkuMTksMy42LDI3LjMyLDlBNiw2LDAsMCwxLDE1NywxODcuMzJaTTE3OS41MywxMTZjLTMuMDYsMy40Mi05Ljc0LDYtMTUuNTMsNnMtMTIuNDctMi41OC0xNS41My02YTYsNiwwLDEsMC04Ljk0LDhjNS4zNSw2LDE1LjE5LDEwLDI0LjQ3LDEwczE5LjEyLTQsMjQuNDctMTBhNiw2LDAsMSwwLTguOTQtOFpNMjIyLDQ4djU1Ljc3YzAsMzUuNDUtOS41Myw2OC44Ni0yNi44Myw5NC4wNkMxNzcuNCwyMjMuNzQsMTUzLjU0LDIzOCwxMjgsMjM4cy00OS40LTE0LjI2LTY3LjE3LTQwLjE2QzQzLjUzLDE3Mi42NCwzNCwxMzkuMjMsMzQsMTAzLjc4VjQ4QTE0LDE0LDAsMCwxLDUzLjA2LDM1QzY3LjI1LDQwLjQ2LDk1Ljg2LDQ5LjcsMTI4LDQ5LjdTMTg4Ljc1LDQwLjQ2LDIwMi45NCwzNUExNCwxNCwwLDAsMSwyMjIsNDhabS0xMiwwYTIsMiwwLDAsMC0yLjcyLTEuODdDMTkyLjMxLDUyLDE2Mi4xLDYxLjcsMTI4LDYxLjdTNjMuNjksNTIsNDguNzIsNDYuMTRhMiwyLDAsMCwwLTEuODUuMjFBMiwyLDAsMCwwLDQ2LDQ4djU1Ljc2QzQ2LDE3MS4xNyw4Mi43OSwyMjYsMTI4LDIyNnM4Mi01NC44Myw4Mi0xMjIuMjJabS05My41Myw3NmE2LDYsMCwxLDAtOC45NC04Yy0zLjA2LDMuNDItOS43NCw2LTE1LjUzLDZzLTEyLjQ3LTIuNTgtMTUuNTMtNmE2LDYsMCwwLDAtOC45NCw4YzUuMzUsNiwxNS4xOSwxMCwyNC40NywxMFMxMTEuMTIsMTMwLDExNi40NywxMjRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMjksMzEuNWEyMCwyMCwwLDAsMC0xOC41Mi0yLjE0QzE4NywzNC43MiwxNTkuMTcsNDMuNywxMjgsNDMuN3MtNTktOS03Mi43Ny0xNC4zNEEyMCwyMCwwLDAsMCwyOCw0OHY1NS43N2MwLDM2LjY0LDkuOSw3MS4yNSwyNy44OCw5Ny40NUM3NC44MSwyMjguODEsMTAwLjQyLDI0NCwxMjgsMjQ0czUzLjE5LTE1LjE5LDcyLjEyLTQyLjc2QzIxOC4xLDE3NSwyMjgsMTQwLjQzLDIyOCwxMDMuNzlWNDhBMjAsMjAsMCwwLDAsMjE5LjI5LDMxLjVaTTIwNCwxMDMuNzljMCwzMS44NC04LjQxLDYxLjYzLTIzLjY3LDgzLjg3QzE2NiwyMDguNTEsMTQ3LjQzLDIyMCwxMjgsMjIwcy0zOC0xMS40OS01Mi4zMy0zMi4zNEM2MC40MSwxNjUuNDIsNTIsMTM1LjYzLDUyLDEwMy43OXYtNTBjMTYuNTksNS45NSw0NC42NywxMy45NCw3NiwxMy45NHM1OS40MS04LDc2LTEzLjk0Wm0tNDUuNjIsODMuNzJhMTIsMTIsMCwwLDEtMTYuNCw0LjM3LDI3LjEzLDI3LjEzLDAsMCwwLTI4LDAsMTIsMTIsMCwxLDEtMTItMjAuNzYsNTEuMTQsNTEuMTQsMCwwLDEsNTIsMEExMiwxMiwwLDAsMSwxNTguMzgsMTg3LjUxWm0tMjAuNDktNzRhMTIsMTIsMCwwLDEsMTYuNTktMy42MSwxOS4xNSwxOS4xNSwwLDAsMCw5LjUyLDIuNzgsMTkuNjQsMTkuNjQsMCwwLDAsNy4yNy0xLjU5LDEyLDEyLDAsMSwxLDkuNDYsMjIuMDYsNDEuNTgsNDEuNTgsMCwwLDEtMzkuMjMtMy4wNkExMiwxMiwwLDAsMSwxMzcuODksMTEzLjUxWk0xMTQuNSwxMzAuMDlhNDEuNTQsNDEuNTQsMCwwLDEtMzkuMjMsMywxMiwxMiwwLDEsMSw5LjQ2LTIyQTE5LjY0LDE5LjY0LDAsMCwwLDkyLDExMi42OGExOS4yMiwxOS4yMiwwLDAsMCw5LjU0LTIuNzgsMTIsMTIsMCwxLDEsMTMsMjAuMTlaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcsMzQuOGExNS45NCwxNS45NCwwLDAsMC0xNC44Mi0xLjcxQzE4OC4xNSwzOC41NSwxNTkuODIsNDcuNzEsMTI4LDQ3LjcxUzY3Ljg0LDM4LjU1LDUzLjc5LDMzLjA5QTE2LDE2LDAsMCwwLDMyLDQ4djU1Ljc3YzAsMzUuODQsOS42NSw2OS42NSwyNy4xOCw5NS4xOCwxOC4xNiwyNi40Niw0Mi42LDQxLDY4LjgyLDQxczUwLjY2LTE0LjU3LDY4LjgyLTQxQzIxNC4zNSwxNzMuNDQsMjI0LDEzOS42MywyMjQsMTAzLjc5VjQ4QTE2LDE2LDAsMCwwLDIxNywzNC44Wk02NiwxMjUuMzNBOCw4LDAsMCwxLDc4LDExNC42NmMyLjY4LDMsOC44NSw1LjM0LDE0LDUuMzRzMTEuMzYtMi4zNSwxNC01LjM0QTgsOCwwLDAsMSwxMTgsMTI1LjMzQzExMi4yNSwxMzEuNzEsMTAxLjgyLDEzNiw5MiwxMzZTNzEuNzUsMTMxLjcxLDY2LDEyNS4zM1ptOTIuNjIsNjMuMUE4LDgsMCwwLDEsMTUyLDE5MmE3LjkyLDcuOTIsMCwwLDEtNC40Mi0xLjM0QzE0MS4wNywxODYuMzQsMTM2LDE4NCwxMjgsMTg0cy0xMy4wNywyLjM0LTE5LjU3LDYuNjZhOCw4LDAsMCwxLTguODYtMTMuMzJDMTA4LDE3MS43MywxMTYuMDYsMTY4LDEyOCwxNjhzMjAsMy43MywyOC40Myw5LjM0QTgsOCwwLDAsMSwxNTguNjYsMTg4LjQzWm0zMS4zLTYzLjFjLTUuNzEsNi4zOC0xNi4xNCwxMC42Ny0yNiwxMC42N3MtMjAuMjUtNC4yOS0yNi0xMC42N0E4LDgsMCwwLDEsMTUwLDExNC42NmMyLjY4LDMsOC44NSw1LjM0LDE0LDUuMzRzMTEuMzYtMi4zNSwxNC01LjM0QTgsOCwwLDAsMSwxOTAsMTI1LjMzWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDh2NTUuNzdDMjE2LDE3NC42LDE3Ni42LDIzMiwxMjgsMjMyUzQwLDE3NC42LDQwLDEwMy43OVY0OGE4LDgsMCwwLDEsMTAuODktNy40N0M2Niw0Ni40MSw5NS4xMSw1NS43MSwxMjgsNTUuNzFzNjItOS4zLDc3LjExLTE1LjE2QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTU4LjY2LDE4OC40M2E4LDgsMCwwLDEtMTEuMDksMi4yM0MxNDEuMDcsMTg2LjM0LDEzNiwxODQsMTI4LDE4NHMtMTMuMDcsMi4zNC0xOS41Nyw2LjY2YTgsOCwwLDAsMS04Ljg2LTEzLjMyQzEwOCwxNzEuNzMsMTE2LjA2LDE2OCwxMjgsMTY4czIwLDMuNzMsMjguNDMsOS4zNEE4LDgsMCwwLDEsMTU4LjY2LDE4OC40M1pNMTg5LjM0LDExNGE4LDgsMCwwLDAtMTEuMy42MmMtMi42OCwzLTguODUsNS4zNC0xNCw1LjM0cy0xMS4zNi0yLjM1LTE0LTUuMzRBOCw4LDAsMCwwLDEzOCwxMjUuMzNjNS43MSw2LjM4LDE2LjE0LDEwLjY3LDI2LDEwLjY3czIwLjI1LTQuMjksMjYtMTAuNjdBOCw4LDAsMCwwLDE4OS4zNCwxMTRaTTIyNCw0OHY1NS43N2MwLDM1Ljg0LTkuNjUsNjkuNjUtMjcuMTgsOTUuMTgtMTguMTYsMjYuNDYtNDIuNiw0MS02OC44Miw0MXMtNTAuNjYtMTQuNTctNjguODItNDFDNDEuNjUsMTczLjQ0LDMyLDEzOS42MywzMiwxMDMuNzlWNDhBMTYsMTYsMCwwLDEsNTMuNzksMzMuMDlDNjcuODQsMzguNTUsOTYuMTgsNDcuNzEsMTI4LDQ3LjcxczYwLjE1LTkuMTYsNzQuMjEtMTQuNjJBMTYsMTYsMCwwLDEsMjI0LDQ4Wm0tMTYsMHYwYy0xNS4xLDUuODktNDUuNTcsMTUuNzMtODAsMTUuNzNTNjMuMSw1My44Nyw0OCw0OHY1NS43OWMwLDMyLjY0LDguNjYsNjMuMjMsMjQuMzcsODYuMTNDODcuNDYsMjExLjksMTA3LjIxLDIyNCwxMjgsMjI0czQwLjU0LTEyLjEsNTUuNjMtMzQuMDhDMTk5LjM0LDE2NywyMDgsMTM2LjQzLDIwOCwxMDMuNzlabS05MCw3Ny4zMUE4LDgsMCwwLDAsMTA2LDExNC42NmMtMi42OCwzLTguODUsNS4zNC0xNCw1LjM0cy0xMS4zNi0yLjM1LTE0LTUuMzRBOCw4LDAsMCwwLDY2LDEyNS4zM0M3MS43NSwxMzEuNzEsODIuMTgsMTM2LDkyLDEzNlMxMTIuMjUsMTMxLjcxLDExOCwxMjUuMzNaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as MaskSad };