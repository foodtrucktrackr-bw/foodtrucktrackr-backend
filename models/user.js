const db = require("../config.js");

module.exports = {
  find,
  add,
  findProjects
}

function find() {
  return db('resources');
}

function add(resource) {
  return db("resources")
    .insert(resource);
  }

  function findProjects(id) {
    return db('project_resources as pr')
      .join('resources as r', 'r.id', 'pr.resourceId')
      .join('projects as p', 'p.id', 'pr.projectId')
      .select(
        "p.name as project"
      )
  }
