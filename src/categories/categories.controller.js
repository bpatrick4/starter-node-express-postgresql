const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const categoriesService = require("./categories.service");

async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};