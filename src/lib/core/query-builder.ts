export default interface QueryBuilder<Params, QueryObject> {
  select(params: Params): QueryObject
  update(params: Params): QueryObject
  insert(params: Params): QueryObject
  delete(params: Params): QueryObject
}
