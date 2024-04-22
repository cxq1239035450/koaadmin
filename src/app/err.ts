const analyzeError = (err: any) => {
  if (typeof err === 'string') {
    return err
  } else if (err instanceof Object) {
  }
  return err
}

export default (err: any, ctx: any) => {
  ctx.status = 500
  ctx.body = {
    code: 500,
    message: analyzeError(err),
    data: null,
  }
}
