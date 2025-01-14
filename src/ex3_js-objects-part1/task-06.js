function deepCloneObj(obj){
    let newObj = {};
    if (typeof obj === "object"){
        for (let key in obj){
            let prop = obj[key];
            let type = typeof prop;
            switch (type) {
                case "object":
                    if (Array.isArray(prop)) {
                        newObj[key] = [];
                        for (let item of prop){
                            newObj[key].push(deepCloneObj(item))
                        }
                    }
                    else{
                        newObj[key] = deepCloneObj(prop);
                    }
                    break;
                default:
                    newObj[key] = prop;
                    break;
            }
        }
        return newObj
    }
    return obj;
}
module.exports = dClone;