"use strict";

const postcss = require('postcss');

module.exports = postcss.plugin('postcss-alphabetize', function (opts) {
    opts = opts || {};

    // Work with options here




    //  Returns an array that is alphabatized by a given prop
    const sortArr = (arr, prop) => {
      return arr.sort( (a1, a2) => {
        if( a1[prop] < a2[prop] ) return -1;
        if( a1[prop] > a2[prop] ) return 1;
        return 0;
      });
    };

    return function (css, result) {
      css.walkRules( rule => {
        //  store our dirty (non-alphabetical) declarations
        let dirtyDecls = [];
        rule.nodes.forEach( decl => {
          dirtyDecls.push({
            prop: decl.prop,
            val:  decl.value
          });
        })
        let cleanDecls = sortArr( dirtyDecls, 'prop' );
        //  set those nodes?
        rule.nodes.forEach( function(decl, index) {
          rule.nodes[index].prop = cleanDecls[index].prop;
          rule.nodes[index].value = cleanDecls[index].val;
        });

      });

    };
});
