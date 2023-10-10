const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const { projectValidator } = require("../middleware/validation");

router.get("/getProjects", async (req, res) => {
  try {
    const project = await Project.find({});
    res.status(200).send(project);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Unable to fetch projects from database" + e.message });
  }
});

router.post("/createProject", projectValidator, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send(project);
  } catch (e) {
    res.status(500).json({ error: "Unable to create project" + e.message });
  }
});

router.patch("/editProject", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.body._id, req.body);
    res.status(200).send(project);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit project" + e.message });
  }
});

router.delete("/deleteProject/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).send(project);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete project" + e.message });
  }
});

module.exports = router;
