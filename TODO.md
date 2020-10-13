# Vuesax clone
Made for solving bugs or improve things that we need in our projects.

## TODOs: detected bugs or improvements
- Fix button in vsUpload has no type="button" so it causes submit if inside a form: https://github.com/lusaxweb/vuesax/blob/master/src/components/vsUpload/vsUpload.vue#L28.
- VsButton throws an error `Console error: Error in nextTick: “TypeError: Cannot read property ‘clientWidth’ of undefine”` because it triggers on click a `this.$nextTick(callback)` and element may not exist when `callback` is executed (for example, when closing dialogs or navigating between router views): https://github.com/lusaxweb/vuesax/commit/a6506834d90b8b96ece5bcc4554e212277b75318.
- Update dependencies.
- Fix component vsUpload does not work on iOS 13.7 on iPhone 7 (still working on it).
