import LegislationProject, {
  ILegislationProject,
  ILegislationStep,
} from "../model/LegislationProject";
import { AppError } from "../exception/AppError";
import { HTTP_STATUS_CODE } from "../exception/http";

export class LegislationProjectService {
  static async create(
    data: Pick<ILegislationProject, "title" | "description" | "steps" | "tags">
  ) {
    const project = new LegislationProject(data);
    await project.save();
    return project;
  }

  static async createMany(
    items: Array<Pick<ILegislationProject, "title" | "description" | "steps" | "tags">>
  ) {
    const projects = await LegislationProject.insertMany(items);
    return projects;
  }

  static async getAll() {
    return LegislationProject.find();
  }

  static async getById(id: string) {
    const project = await LegislationProject.findById(id);
    if (!project) {
      throw new AppError("Project not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    return project;
  }

  static async update(
    id: string,
    data: Partial<
      Pick<ILegislationProject, "title" | "description" | "steps" | "tags">
    >
  ) {
    const project = await LegislationProject.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!project) {
      throw new AppError("Project not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    return project;
  }

  static async delete(id: string) {
    const project = await LegislationProject.findByIdAndDelete(id);
    if (!project) {
      throw new AppError("Project not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
  }

  static async deleteAll() {
    await LegislationProject.deleteMany({});
  }

  static async addStep(projectId: string, step: ILegislationStep) {
    const project = await LegislationProject.findById(projectId);
    if (!project) {
      throw new AppError("Project not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    project.steps.push(step);
    await project.save();
    return project;
  }

  static async setStepActive(projectId: string, stepId: string, isActive: boolean) {
    const project = await LegislationProject.findOneAndUpdate(
      { _id: projectId, "steps._id": stepId },
      { $set: { "steps.$.isActive": isActive } },
      { new: true }
    );
    if (!project) {
      throw new AppError("Project or step not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    return project;
  }
}
