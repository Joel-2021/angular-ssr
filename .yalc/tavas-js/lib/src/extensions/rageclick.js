var RAGE_CLICK_THRESHOLD_PX = 30;
var RAGE_CLICK_TIMEOUT_MS = 1000;
var RAGE_CLICK_CLICK_COUNT = 3;
var RageClick = /** @class */ (function () {
    function RageClick(instance, enabled) {
        if (enabled === void 0) { enabled = instance.get_config('rageclick'); }
        this.clicks = [];
        this.instance = instance;
        this.enabled = enabled;
    }
    RageClick.prototype.click = function (x, y, timestamp) {
        if (!this.enabled) {
            return;
        }
        var lastClick = this.clicks[this.clicks.length - 1];
        if (lastClick &&
            Math.abs(x - lastClick.x) + Math.abs(y - lastClick.y) < RAGE_CLICK_THRESHOLD_PX &&
            timestamp - lastClick.timestamp < RAGE_CLICK_TIMEOUT_MS) {
            this.clicks.push({ x: x, y: y, timestamp: timestamp });
            if (this.clicks.length === RAGE_CLICK_CLICK_COUNT) {
                this.instance.capture('$rageclick');
            }
        }
        else {
            this.clicks = [{ x: x, y: y, timestamp: timestamp }];
        }
    };
    return RageClick;
}());
export default RageClick;
//# sourceMappingURL=rageclick.js.map