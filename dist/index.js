'use strict';

const bps_env = require('babel-preset-env').default;
const bps_stage_3 = require('babel-preset-stage-3');
const bpi_offside_js = require('babel-plugin-offside-js').default;
const bpi_class_props = require('babel-plugin-transform-class-properties');
const bpi_async_gen_fns = require('babel-plugin-transform-async-generator-functions');

module.exports = exports = function preset(context, opts = {}) {
  const opts_stage_3 = 'stage_3' in opts ? opts.stage_3 : !opts.no_stage_3;
  delete opts.stage_3;delete opts.no_stage_3;
  const opts_offside = opts.offside;
  delete opts.offside;

  if (!opts.targets) {
    opts.targets = { node: 'current' };
  }

  if (true === opts.targets.browser) {
    opts.targets.browser = 'last 1 versions, > 2% in US';
  }

  let presets = [],
      plugins = [];

  presets.push([bps_env, opts]);
  if (opts_stage_3) {
    presets.push([bps_stage_3]);
  } else {
    // However, generator async * functions should still be supported
    plugins.push([bpi_async_gen_fns]);
  }

  plugins.push([bpi_class_props]);
  plugins.push([bpi_offside_js, opts_offside]);

  return { presets, plugins };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvaW5kZXguanMiXSwibmFtZXMiOlsiYnBzX2VudiIsInJlcXVpcmUiLCJkZWZhdWx0IiwiYnBzX3N0YWdlXzMiLCJicGlfb2Zmc2lkZV9qcyIsImJwaV9jbGFzc19wcm9wcyIsImJwaV9hc3luY19nZW5fZm5zIiwibW9kdWxlIiwiZXhwb3J0cyIsInByZXNldCIsImNvbnRleHQiLCJvcHRzIiwib3B0c19zdGFnZV8zIiwic3RhZ2VfMyIsIm5vX3N0YWdlXzMiLCJvcHRzX29mZnNpZGUiLCJvZmZzaWRlIiwidGFyZ2V0cyIsIm5vZGUiLCJicm93c2VyIiwicHJlc2V0cyIsInBsdWdpbnMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLFVBQVVDLFFBQVEsa0JBQVIsRUFBNEJDLE9BQTVDO0FBQ0EsTUFBTUMsY0FBY0YsUUFBUSxzQkFBUixDQUFwQjtBQUNBLE1BQU1HLGlCQUFpQkgsUUFBUSx5QkFBUixFQUFtQ0MsT0FBMUQ7QUFDQSxNQUFNRyxrQkFBa0JKLFFBQVEseUNBQVIsQ0FBeEI7QUFDQSxNQUFNSyxvQkFBb0JMLFFBQVEsa0RBQVIsQ0FBMUI7O0FBRUFNLE9BQU9DLE9BQVAsR0FBaUJBLFVBQVUsU0FBU0MsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUJDLE9BQUssRUFBOUIsRUFBa0M7QUFDM0QsUUFBTUMsZUFBZSxhQUFhRCxJQUFiLEdBQW9CQSxLQUFLRSxPQUF6QixHQUFtQyxDQUFDRixLQUFLRyxVQUE5RDtBQUNBLFNBQU9ILEtBQUtFLE9BQVosQ0FBcUIsT0FBT0YsS0FBS0csVUFBWjtBQUNyQixRQUFNQyxlQUFlSixLQUFLSyxPQUExQjtBQUNBLFNBQU9MLEtBQUtLLE9BQVo7O0FBRUEsTUFBRyxDQUFDTCxLQUFLTSxPQUFULEVBQW1CO0FBQ2pCTixTQUFLTSxPQUFMLEdBQWUsRUFBSUMsTUFBTSxTQUFWLEVBQWY7QUFBa0M7O0FBRXBDLE1BQUcsU0FBU1AsS0FBS00sT0FBTCxDQUFhRSxPQUF6QixFQUFtQztBQUNqQ1IsU0FBS00sT0FBTCxDQUFhRSxPQUFiLEdBQXVCLDZCQUF2QjtBQUFvRDs7QUFFdEQsTUFBSUMsVUFBVSxFQUFkO0FBQUEsTUFBa0JDLFVBQVUsRUFBNUI7O0FBRUFELFVBQVFFLElBQVIsQ0FBZSxDQUFFdEIsT0FBRixFQUFXVyxJQUFYLENBQWY7QUFDQSxNQUFHQyxZQUFILEVBQWtCO0FBQ2hCUSxZQUFRRSxJQUFSLENBQWUsQ0FBRW5CLFdBQUYsQ0FBZjtBQUE4QixHQURoQyxNQUVLO0FBQ0g7QUFDQWtCLFlBQVFDLElBQVIsQ0FBZSxDQUFFaEIsaUJBQUYsQ0FBZjtBQUFvQzs7QUFFdENlLFVBQVFDLElBQVIsQ0FBZSxDQUFFakIsZUFBRixDQUFmO0FBQ0FnQixVQUFRQyxJQUFSLENBQWUsQ0FBRWxCLGNBQUYsRUFBa0JXLFlBQWxCLENBQWY7O0FBRUEsU0FBTyxFQUFJSyxPQUFKLEVBQWFDLE9BQWIsRUFBUDtBQUEyQixDQXhCN0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBicHNfZW52ID0gcmVxdWlyZSgnYmFiZWwtcHJlc2V0LWVudicpLmRlZmF1bHRcbmNvbnN0IGJwc19zdGFnZV8zID0gcmVxdWlyZSgnYmFiZWwtcHJlc2V0LXN0YWdlLTMnKVxuY29uc3QgYnBpX29mZnNpZGVfanMgPSByZXF1aXJlKCdiYWJlbC1wbHVnaW4tb2Zmc2lkZS1qcycpLmRlZmF1bHRcbmNvbnN0IGJwaV9jbGFzc19wcm9wcyA9IHJlcXVpcmUoJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tY2xhc3MtcHJvcGVydGllcycpXG5jb25zdCBicGlfYXN5bmNfZ2VuX2ZucyA9IHJlcXVpcmUoJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tYXN5bmMtZ2VuZXJhdG9yLWZ1bmN0aW9ucycpXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uIHByZXNldChjb250ZXh0LCBvcHRzPXt9KSA6OlxuICBjb25zdCBvcHRzX3N0YWdlXzMgPSAnc3RhZ2VfMycgaW4gb3B0cyA/IG9wdHMuc3RhZ2VfMyA6ICFvcHRzLm5vX3N0YWdlXzNcbiAgZGVsZXRlIG9wdHMuc3RhZ2VfMzsgZGVsZXRlIG9wdHMubm9fc3RhZ2VfMzsgXG4gIGNvbnN0IG9wdHNfb2Zmc2lkZSA9IG9wdHMub2Zmc2lkZVxuICBkZWxldGUgb3B0cy5vZmZzaWRlXG5cbiAgaWYgIW9wdHMudGFyZ2V0cyA6OlxuICAgIG9wdHMudGFyZ2V0cyA9IEB7fSBub2RlOiAnY3VycmVudCdcblxuICBpZiB0cnVlID09PSBvcHRzLnRhcmdldHMuYnJvd3NlciA6OlxuICAgIG9wdHMudGFyZ2V0cy5icm93c2VyID0gJ2xhc3QgMSB2ZXJzaW9ucywgPiAyJSBpbiBVUydcblxuICBsZXQgcHJlc2V0cyA9IFtdLCBwbHVnaW5zID0gW11cblxuICBwcmVzZXRzLnB1c2ggQCBbIGJwc19lbnYsIG9wdHMgXVxuICBpZiBvcHRzX3N0YWdlXzMgOjpcbiAgICBwcmVzZXRzLnB1c2ggQCBbIGJwc19zdGFnZV8zIF1cbiAgZWxzZSA6OlxuICAgIC8vIEhvd2V2ZXIsIGdlbmVyYXRvciBhc3luYyAqIGZ1bmN0aW9ucyBzaG91bGQgc3RpbGwgYmUgc3VwcG9ydGVkXG4gICAgcGx1Z2lucy5wdXNoIEAgWyBicGlfYXN5bmNfZ2VuX2ZucyBdXG5cbiAgcGx1Z2lucy5wdXNoIEAgWyBicGlfY2xhc3NfcHJvcHMgXVxuICBwbHVnaW5zLnB1c2ggQCBbIGJwaV9vZmZzaWRlX2pzLCBvcHRzX29mZnNpZGUgXVxuXG4gIHJldHVybiBAe30gcHJlc2V0cywgcGx1Z2luc1xuXG4iXX0=