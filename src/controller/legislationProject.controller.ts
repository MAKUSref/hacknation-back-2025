import { Request, Response } from "express";
import { LegislationProjectService } from "../service/legislationProject.service";

export class LegislationProjectController {
  static async getAll(req: Request, res: Response) {
    const projects = await LegislationProjectService.getAll();
    res.json(projects);
  }

  static async getById(req: Request, res: Response) {
    const project = await LegislationProjectService.getById(req.params.id);
    res.json(project);
  }

  static async create(req: Request, res: Response) {
    const project = await LegislationProjectService.create(req.body);
    res.status(201).json(project);
  }

  static async createMany(req: Request, res: Response) {
    const projects = await LegislationProjectService.createMany(req.body);
    res.status(201).json(projects);
  }

  static async update(req: Request, res: Response) {
    const project = await LegislationProjectService.update(req.params.id, req.body);
    res.json(project);
  }

  static async remove(req: Request, res: Response) {
    await LegislationProjectService.delete(req.params.id);
    res.status(204).send();
  }

  static async removeAll(req: Request, res: Response) {
    await LegislationProjectService.deleteAll();
    res.status(204).send();
  }

  static async addStep(req: Request, res: Response) {
    const project = await LegislationProjectService.addStep(req.params.id, req.body);
    res.json(project);
  }

  static async setStepActive(req: Request, res: Response) {
    const project = await LegislationProjectService.setStepActive(
      req.params.id,
      req.params.stepId,
      req.body.isActive
    );
    res.json(project);
  }

  static async addStepInfo(req: Request, res: Response) {
    const stepInfo = await LegislationProjectService.addStepInfo(req.body);
    res.status(201).json(stepInfo);
  }

  static async addBulkStepInfo(req: Request, res: Response) {
    const stepInfos = await LegislationProjectService.addBulkStepInfo(req.body);
    res.status(201).json(stepInfos);
  }

  static async getAllStepInfo(req: Request, res: Response) {
    const stepInfos = await LegislationProjectService.getAllStepInfo();
    res.json(stepInfos);
  }

  static async getStepInfoById(req: Request, res: Response) {
    const stepInfo = await LegislationProjectService.getStepInfoById(Number(req.params.id));
    res.json(stepInfo);
  }
}