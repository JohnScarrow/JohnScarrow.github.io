'use strict';
var app = app || {};

(function (module){


const projectNameList = projectData.title.reduce(function(perv,next){
    return perv.join(next);
});
console.log(projectNameList);

})(app);