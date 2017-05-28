'use strict';

const projectNameList = projectData.title.reduce(function(perv,next){
    return perv.join(next);
});
console.log(projectNameList);