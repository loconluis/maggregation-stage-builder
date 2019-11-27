/**
 * MSB is the abrev
 * to MONGOAGREGGATION STAGE BUILDER
 * CREATED WITH LOVE BY LUIS LOCON TWT: @LOCONLUIS
 */
class MSB {
  constructor() {
    this.PIPELINE = [];
  }
  /**
   *
   * @param {*} item
   */
  pipePush(item) {
    this.PIPELINE.push(item);
    return this;
  }

  /**
   *
   */
  clone() {
    let copy = new queryBuilder();
    copy.PIPELINE = [...this.PIPELINE];
    return Object.assign(Object.getPrototypeOf(copy));
  }

  lookup(from, localField, foreignField, as) {
    return this.pipePush({
      $lookup: {
        from,
        localField,
        foreignField,
        as
      }
    });
  }
  /**
   *
   * @param {*} pathKey
   * @param {*} preserveNullAndEmptyArrays
   */
  unwind(pathKey, preserveNullAndEmptyArrays = false) {
    return this.pipePush({
      $unwind: {
        path: pathKey,
        preserveNullAndEmptyArrays
      }
    });
  }

  /**
   *
   * @param {*} key
   * @param {*} value
   * @param {*} operator
   */
  matchSimple(key, value, operator = "$in") {
    let aux = {};
    if (!key || !value) return this;
    aux[_key] = Array.isArray(value) ? { $in: value } : value;
    return this.pipePush({ $match: aux });
  }

  /**
   *
   * @param {*} query
   */
  groupBy(query) {
    return this.pipePush({ $group: query });
  }

  /**
   *
   * @param {*} number
   */
  limit(number = 1) {
    return isNaN(number) ? this : this.pipePush({ $limit: parseInt(number) });
  }
  /**
   *
   * @param {*} number
   */
  skip(number = 0) {
    return isNaN(number) ? this : this.pipePush({ $skip: parseInt(number) });
  }
  /**
   *
   * @param {*} specifications
   */
  project(specifications = {}) {
    return this.pipePush({ $project: specifications });
  }
  /**
   *
   * @param {*} specifications
   */
  sort(specifications = {}) {
    return this.pipePush({ $sort: specifications });
  }
  /**
   *
   * @param {*} key
   */
  count(key = "") {
    return this.pipePush({ $count: key });
  }
  /**
   *
   * @param {*} _raw
   */
  pushRaw(_raw) {
    return this.pipePush(_raw);
  }
  /**
   *
   */
  getPipe() {
    return this.PIPELINE;
  }
  /**
   *
   */
  addFields(expression = {}) {
    return this.pipePush({ $addFields: expression });
  }
  /**
   *
   * @param {*} groupBy
   * @param {*} boundaries
   * @param {*} defaultKey
   * @param {*} outputDocument
   */
  bucket(
    groupBy,
    boundaries = [],
    defaultKey = undefined,
    outputDocument = {}
  ) {
    return this.pipePush({
      $bucket: {
        groupBy,
        boundaries,
        default: defaultKey,
        output: outputDocument
      }
    });
  }
  /**
   *
   * @param {*} groupBy
   * @param {*} boundaries
   * @param {*} defaultKey
   * @param {*} outputDocument
   * @param {*} granularity
   */
  bucketAuto(
    groupBy,
    boundaries = [],
    defaultKey = undefined,
    outputDocument = {},
    granularity = ""
  ) {
    return this.pipePush({
      $bucket: {
        groupBy,
        boundaries,
        default: defaultKey,
        output: outputDocument,
        granularity
      }
    });
  }
  /**
   *
   * @param {*} specifications
   */
  facet(specifications = {}) {
    return this.pipePush({
      $facet: specifications
    });
  }
  /**
   *
   * @param {*} near
   * @param {*} distanceField
   * @param {*} spherical
   * @param {*} minDistance
   * @param {*} queryDocument
   * @param {*} distanceMultiplier
   * @param {*} includeLocs
   * @param {*} maxDistance
   * @param {*} uniqueDocsBool
   * @param {*} keyField
   */
  geoNear(
    near = { type: "Point", coordinates: [-73.99279, 40.719296] },
    distanceField = "",
    spherical = false,
    minDistance = 1,
    queryDocument = {},
    distanceMultiplier = 1,
    includeLocs = undefined,
    maxDistance = 1,
    uniqueDocsBool = false,
    keyField = undefined
  ) {
    return this.pipePush({
      near,
      spherical,
      query: queryDocument,
      distanceField,
      minDistance,
      maxDistance,
      distanceMultiplier,
      uniqueDocs: uniqueDocsBool,
      key: keyField
    });
  }
  /**
   * 
   * @param {*} from 
   * @param {*} startWithExpr 
   * @param {*} connectFromField 
   * @param {*} connectToField 
   * @param {*} as 
   * @param {*} maxDepth 
   * @param {*} depthField 
   * @param {*} restrictSearchWithMatch 
   */
  graphLookup(
    from = "",
    startWithExpr = "",
    connectFromField,
    connectToField,
    as,
    maxDepth = undefined,
    depthField = undefined,
    restrictSearchWithMatch = undefined
  ) {
    return this.pipePush({
      $graphLookup: {
        from,
        startWith: startWithExpr,
        connectFromField,
        connectToField,
        as,
        maxDistance,
        depthField,
        restrictSearchWithMatch
      }
    });
  }
  /**
   * 
   */
  indexStats() {
    return this.pipePush({
      $indexStats: {}
    })
  }
  /**
   * 
   * @param {*} document 
   */
  listLocalSessions(document = {}) {
    return this.pipePush({
      $listLocalSessions: document
    })
  }
  /**
   * 
   * @param {*} document 
   */
  listSessions(document = {}) {
    return this.pipePush({
      $listLocalSessions: document
    })
  }
  /**
   * 
   * @param {*} intoCollection 
   * @param {*} on 
   * @param {*} letVariables 
   * @param {*} whenMatched 
   * @param {*} whenNoMatched 
   */
  merge(intoCollection = '', on = '', letVariables = undefined, whenMatched= undefined, whenNoMatched = undefined) {
    return this.pipePush({
      $merge: {
        into: intoCollection,
        on,
        let: letVariables,
        whenMatched,
        whenNoMatched
      }
    })
  }
  /**
   * 
   * @param {*} outputCollection 
   */
  out(outputCollection = '') {
    return this.pipePush({
      $out: outputCollection
    })
  }
  /**
   * 
   */
  planCacheStats(){
    return this.pipePush({
      $planCacheStats: {}
    })
  }
  /**
   * 
   * @param {*} replacementDocument 
   */
  replaceRoot(replacementDocument = '') {
    return this.pipePush({
      $replaceRoot: {
        newRoot: replacementDocument
      }
    })
  }
  /**
   * 
   * @param {*} replacementDocument 
   */
  replaceWith(replacementDocument = ''){
    return this.pipePush({
      $replaceWith: {
        newRoot: replacementDocument
      }
    })
  }
  /**
   * 
   * @param {*} sizeNumber 
   */
  sample(sizeNumber = 1){
    return this.pipePush({
      $sample: {
        size: sizeNumber
      }
    })
  }
  /**
   * 
   * @param {*} documentExpression 
   */
  set(documentExpression = {}) {
    return this.pipePush({
      $set: documentExpression
    })
  }
  /**
   * 
   * @param {*} expression 
   */
  sortByCount(expression = undefined) {
    return this.pipePush({
      sortByCount: expression
    })
  }
}


module.exports = MSB;