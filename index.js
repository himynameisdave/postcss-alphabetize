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
    },
    //  takes in a prop
    //  returns an object with a boolean (if there is a prefix)
    //    and it returns what prefix
    checkPrefixes = ( prop ) => {
      const prefixes = [ '-webkit-', '-moz-', '-ms-', '-o-' ];
      let prefix = {
        isPrefixed: false
      };
      prefixes.forEach( pre => {
        if( prop.indexOf( pre ) > -1 ){
          prefix.isPrefixed = true;
          prefix.prefix = pre;
        }
      });
      return prefix;
    };

    return function (css, result) {
      css.walkRules( rule => {
        //  store our dirty (non-alphabetical) declarations
        let dirtyDecls = [];
        rule.nodes.forEach( decl => {
          let dirtyDeclare = {
            prop: decl.prop,
            val:  decl.value,
            prefixed: checkPrefixes(decl.prop)
          };
          if(dirtyDeclare.prefixed.isPrefixed){
            dirtyDeclare.sortName = decl.prop.split(dirtyDeclare.prefixed.prefix)[1];
          }else{
            dirtyDeclare.sortName = decl.prop;
          }
          dirtyDecls.push(dirtyDeclare);
        })
        let cleanDecls = sortArr( dirtyDecls, 'sortName' );
        //  set those nodes?
        rule.nodes.forEach( function(decl, index) {
          rule.nodes[index].prop = cleanDecls[index].prop;
          rule.nodes[index].value = cleanDecls[index].val;
        });

      });

    };
});
